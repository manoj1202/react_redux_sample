import React,{ Component } from "react"
import { connect } from "react-redux"
import Tweet from "./tweet"

class Dashboard extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
              <h2 className="center">Your Timeline</h2>
              <ul className="dashboard-list">
                {this.props.tweetIds.map((id) => (
                    <li key={id}>
                        <Tweet id={id} />
                    </li>
                ))}
              </ul>
            </div>
        )
    }
}

function mapStateTOProps({tweets}){
    return{
        tweetIds: Object.keys(tweets)
         .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp )
    }
}

export default connect(mapStateTOProps)(Dashboard)