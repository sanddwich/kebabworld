import { GET_APP } from '../constants/ActionTypes'
import { ApplicationType } from '../interfaces/app'
import { AppState } from '../interfaces/interfaces'

const initialState: AppState = {
  error: '',
  loading: false,
}

const app = (state: AppState = initialState, action: ApplicationType) => {
  switch (action.type) {
    case GET_APP:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default app
