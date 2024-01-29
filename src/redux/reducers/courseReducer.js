import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import ACTION_TYPES from '../actions/Authentication/type';
import {RegisterUser, SignInUser} from '../../actions/auth/Authentication';
import {FetchAllCourses} from '../../actions/courses/Course';
import {fetchTag} from '../../actions/courses/Tag';
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
    case ACTION_TYPES.reset:
      return initValues;
    case ACTION_TYPES.FILTER_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case ACTION_TYPES.CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
        type: ACTION_TYPES.CATEGORIES,
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
        type: ACTION_TYPES.FILTER_COURSES,
        payload: data?.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const resetCourse = () => {
  return {
    type: ACTION_TYPES.reset,
  };
};
