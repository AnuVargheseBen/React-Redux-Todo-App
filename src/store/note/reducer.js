import { UPDATE_NOTE } from "../actionType";
import { ADD_ITEM } from "../actionType";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_NOTE:
      return { ...state, [action.key]: action.value };
    case ADD_ITEM:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
}
