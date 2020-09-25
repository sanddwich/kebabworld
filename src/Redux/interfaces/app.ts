import {GET_APP} from '../constants/ActionTypes'

interface GetAppAction {
  type: typeof GET_APP
}

export type ApplicationType = 
  | GetAppAction