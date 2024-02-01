import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import ACTION_COURSE_TYPES from '../actions/Courses/type';
import {RegisterUser, SignInUser} from '../../actions/auth/Authentication';
import {FetchAllCourses} from '../../actions/courses/Course';
import {fetchTag, fetchTags} from '../../actions/courses/Tag';
import {fetchCategory} from '../../actions/courses/Category';

const initValues = {
  courses: [],
  tags: [],
  categories: [],
  // filterCategories:[]
};

export const courseReducer = (state = initValues, action) => {
  switch (action.type) {
    case 'allcourse':
      return {
        ...state,
        courses: action.payload,
      };
    case 'detail':
      return action.payload;
    case ACTION_COURSE_TYPES.resetCourses:
      return initValues;
    case ACTION_COURSE_TYPES.FILTER_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case ACTION_COURSE_TYPES.CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ACTION_COURSE_TYPES.TAG:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

export const fetchCourses = params => {
  return async function (dispatch) {
    try {
      const data = await FetchAllCourses(params);

      dispatch({
        type: 'allcourse',
        payload: data?.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const fetchCourseCategories = params => {
  return async function (dispatch) {
    try {
      const data = await fetchCategory();

      dispatch({
        type: ACTION_COURSE_TYPES.CATEGORIES,
        payload: data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const fetchCourseTag = params => {
  return async function (dispatch) {
    try {
      const data = await fetchTags();

      dispatch({
        type: ACTION_COURSE_TYPES.TAG,
        payload: data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const filterCourses = (
  params,
  isFilter,
  selectCategories,
  selectedTag,
) => {
  return async function (dispatch) {
    try {
      const data = await FetchAllCourses(
        params,
        true,
        selectCategories,
        selectedTag,
      );

      dispatch({
        type: ACTION_COURSE_TYPES.FILTER_COURSES,
        payload: data?.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const resetCourse = () => {
  return {
    type: ACTION_COURSE_TYPES.resetCourses,
  };
};
