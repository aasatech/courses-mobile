import {Api} from '../../constants/Baseurl';

export const fetchTags = async params => {
  try {
    const url = `/tags`;
    const response = await Api.get(url);

    return response?.data ?? [];
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data?.errors,
    };
  }
};
