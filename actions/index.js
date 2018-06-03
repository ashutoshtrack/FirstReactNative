import { ADD_NEW_TASK, DELETE_TASK } from "./types";

export const addNewTask = task => {
  return function(dispatch) {
    dispatch({ type: ADD_NEW_TASK, payload: task });
  };
};

export const deleteTask = task => {
  return function(dispatch) {
    dispatch({ type: DELETE_TASK, payload: task });
  };
};
