import { ADD_ITEM, UPDATE_NOTE, DELETE_ITEM} from "../actionType";

export function updateNote(key, value) {
  return { type: UPDATE_NOTE, key, value };
}

export function addItem() {
  return { type: ADD_ITEM };
}

export function deleteItem(index){
  return{type:DELETE_ITEM,index};
}
