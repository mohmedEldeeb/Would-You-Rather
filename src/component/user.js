import React, { Component } from "react"
import { connect } from "react-redux"



class User extends Component {

    render (){
        const {user}=this.props
        return (
            <div>
                <ul >
                    {Object.keys(user).map((x)=>{
                        return(
                            <li className="row " key={user[x].id} >
                                <img className="col-3" alt="img" src={ user[x].avatarURL} />
                                <div className="col-7 " >
                                <h3 className="profil">{user[x].name}</h3>
                                </div>
                                <div className="col-2 span">
                                    <div>score</div>
                                    <span className="score">{
                                    Object.keys(user[x].answers).length
                                    + Object.keys(user[x].questions).length }</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){

    return{
        user :state.User,
    }
}

export default connect(mapStateToProps)(User)