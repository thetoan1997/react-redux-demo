import {USER_ACTIONS} from "../actions/users"

// NOTE: fetchingStatus is one of: never, fetching, fetched
export const users = (state = {data: [], xxx: 'old'}, action) => {
  let payload = action.payload;

  switch (action.type) {
    case USER_ACTIONS.GET_USERS:
      console.log("IN SWITCH");
      console.log(payload.data);
      console.log(state);
      return {
        data: payload.data,
        xxx: 'after get users'
      }
    default:
      return state;
  }
}

export default users;