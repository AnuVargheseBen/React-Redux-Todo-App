import { ADD_ITEM, DELETE_ITEM, UPDATE_NOTE } from "../actionType";

const initialState = { items: [], name: "", item: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_NOTE:
      return { ...state, [action.key]: action.value };
    case ADD_ITEM:
      return { ...state, items: [...state.items, state.item], item: "" };
    case DELETE_ITEM:
      const newItems = [...state.items];
      newItems.splice(action.index, 1);
      return { ...state, items: newItems };
    default:
      return state;
  }
}
