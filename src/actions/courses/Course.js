import {Api} from '../../constants/Baseurl';

export const FetchAllCourses = async (
  params = {},
  isFilter = false,
  categories_id = [],
  tags_id = [],
) => {
  try {
    const url = `/courses?page=${params?.page ?? 1}&per_page=9`;

    const configParam = {
      params: {
        category_ids: categories_id,
        tags: tags_id,
      },
    };

    const response = await Api.get(url, configParam);

    return response?.data ?? [];
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data?.errors,
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
