
const INITIAL_STATE = {
    repos: [],
    developers: [],
    languages: {},
  }
  
  export default function login (state = INITIAL_STATE, action) {
    switch (action.type) {
      case 1:
        return {
          ...state,
          repos: action.payload.data
        }
      case 2:
        return {
          ...state,
          developers: action.payload.data
        }
      case 3:
        return {
          ...state,
          languages: action.payload.data
        }
      default:
        return state
    }
  }