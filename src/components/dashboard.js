import React,{ Component } from "react"
import { connect } from "react-redux"

class Dashboard extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
              <h2>DashBoard</h2>
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