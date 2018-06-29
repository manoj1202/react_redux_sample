import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = "RECEIVE_TWEETS"
export const TOGGLE_TWEET = "TOGGLE_TWEET"

export function receiveTweets(tweets){
    return{
        type:RECEIVE_TWEETS,
        tweets
    }
}

function  toggleTweet(id, authedUser, hasLiked){
    return{
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}