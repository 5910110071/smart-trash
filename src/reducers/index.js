import {combineReducers} from "redux"
import {reducer as reduxForm} from "redux-form"
import UserReducer from "./UserReducer"

const rootRuducer  = combineReducers({
    user : UserReducer,
    form : reduxForm
})
export default rootRuducer