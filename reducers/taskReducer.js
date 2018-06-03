import { ADD_NEW_TASK, DELETE_TASK } from "../actions/types";

const INITIAL_STATE = {
  itemsy: []
};

export default function(state = INITIAL_STATE, action) {
  console.log(action);

  switch (action.type) {
    case ADD_NEW_TASK:
      const updatedItems = [...state.itemsy, action.payload];
      console.log({ ...state, itemsy: updatedItems });
      return { ...state, itemsy: updatedItems };

    case DELETE_TASK:
      const updatedele = state.itemsy.filter(
        eachItem => eachItem !== action.payload
      );

      return { ...state, itemsy: updatedele };

    default:
      return state;
  }
}
