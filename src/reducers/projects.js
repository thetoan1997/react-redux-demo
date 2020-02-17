import {PROJECT_ACTIONS} from "../actions/projects"

// NOTE: fetchingStatus is one of: never, fetching, fetched
export const projects = (state = {data: [], xxx: 'old'}, action) => {
  let payload = action.payload;
  console.log("TYPE: ");
  console.log(action);
  console.log(state);
  switch (action.type) {
    case PROJECT_ACTIONS.GET_PROJECTS:
      console.log("IN SWITCH");
      console.log(payload.data);
      console.log(state);
      return {
        data: payload.data,
        xxx: 'after get projects'
      }
    default:
      return state;
  }
}

export default projects;