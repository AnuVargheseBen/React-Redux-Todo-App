import { UPDATE_NOTE } from "../actionType";
import { ADD_ITEM } from "../actionType";

export function updateNote(key, value) {
  return { type: UPDATE_NOTE, key, value };
}

export function additem(key, value) {
  return { type: ADD_ITEM, key, value };
}
