import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router'
import DashboardReducer from '../containers/DashboardContainer/reducers'

const IndexReducer = history =>
	combineReducers({
		router: connectRouter(history),
		dashboardReducer: DashboardReducer,
	})

export default IndexReducer
