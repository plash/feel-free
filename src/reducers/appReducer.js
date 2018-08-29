import * as types from "../actions/actionTypes";

const initialState = {
  root: "" // 'login' / 'after-login'
};

export default function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROOT_CHANGED:
      return {
        ...state,
        root: action.root
      };
    default:
      return state;
  }
}
