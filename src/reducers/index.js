import {combinedReducers} from "redux"
import authedUser from "./authed"
import users from "./users"
import tweets from "./tweets"

export default combinedReducers({
    authedUser,
    users,
    tweets
})