import {Api} from '../../constants/Baseurl';

export const RegisterUser = async params => {
  try {
    const response = await Api.post('/auth/register', {
      name: params.username,
      username: params.username,
      email: params.email,
      password: params.password,
      password_confirmation: params.comfirmpassword,
    });

    if (response.status <= 200) {
      const loginResponse = await SignInUser({
        email: params.email,
        password: params.password,
      });
      return loginResponse ?? '';
    }
  } catch (error) {
    return {
      error: error.response.data?.errors.email[0].msg,
    };
  }
};
export const SignInUser = async params => {
  try {
    const response = await Api.post('/auth/login', {
      email: params.email,
      password: params.password,
    });

    return response.data;
  } catch (error) {
    return {
      error: error.response?.data?.message,
    };
  }
};

const checkResponseStatus = status => {
  if (status === 400) {
    throw new Error('Bad Request: Client provided invalid data');
  }

  if (status >= 500) {
    throw new Error('Server or Web Service Error');
  }

  return true;
};
