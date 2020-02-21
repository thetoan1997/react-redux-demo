import {PROJECT_ACTIONS} from "../actions/projects"

export const projects = (state = {data: [], xxx: 'old'}, action) => {
  let payload = action.payload;

  switch (action.type) {
    case PROJECT_ACTIONS.GET_PROJECTS:
      return {
        ...state,
        data: payload.data,
        note: 'after get projects'
      }
    case PROJECT_ACTIONS.UPDATE_PROJECT:
      return {
        ...state,
        data: payload.data,
        note: 'after update project'
      }
    case PROJECT_ACTIONS.GET_PROJECT:
      return {
        ...state, 
        data: payload.project,
        note: 'after get project'
      }
    case PROJECT_ACTIONS.CREATE_PROJECT:
      return {
        ...state,
        data: payload.data,
        note: 'after create project'
      }
    default:
      return state;
  }
}

export default projects;