import {Api} from '../../constants/Baseurl';

export const fetchCategory = async params => {
  try {
    const url = `/categories`;
    const response = await Api.get(url);


    return response?.data ?? [];
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data?.errors,
    };
  }
};
