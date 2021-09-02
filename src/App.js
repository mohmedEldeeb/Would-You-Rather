import React,{ Component ,Fragment } from 'react';
import { fetch } from './action/fetch';
import './App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import Aapp from "./component/app"
import Api from "./component/api"
class App extends Component {

  state={
    start:"false"
  }

  componentDidMount(){
    this.props.dispatch(fetch())
    console.log(this.props.re)
    this.setState({start:true})
  }


  render (){
    console.log(this.props.re)

    return(
      <Fragment>
        <LoadingBar />
        <div >
          
          { this.props.rs > 0 ? <Aapp /> : <h1>lodeng...</h1> }
        </div>
      </Fragment>
         
    )
  }

}
function mapStateToProps(state){
  return {
    re:state.User,
    rs : Object.keys(state.User).length
  }
}


export default connect(mapStateToProps)(App);