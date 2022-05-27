import { Reducer } from "redux"
import { ICartState } from "./types"

const INITIAL_STATE: ICartState = {
  items: []
}

export const cart: Reducer<ICartState> = (state, action) => {
  return INITIAL_STATE;
}