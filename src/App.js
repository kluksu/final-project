import HomePage from './components/HomePage';

import './App.css';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';




import React, { Component } from 'react'
import MyNavBar from './components/MyNavBar';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[],
      products:[],
      activeUser:""
    

    }
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.users!==prevState.users){
      console.log(this.state.users)
    }
  }
  logout=()=>{
    this.setState({activeUser:""})
  }
  activateUser=(userdata)=>{
for (let i = 0; i < this.state.users.length; i++) {
  const element = this.state.users[i];
  if((element.email===userdata.email) && (element.password===userdata.password)){
this.setState({activeUser:element})
 }}





  }

  
  updateUsers=(usersdata)=>{
        if((usersdata.email.includes("@")) && (usersdata.password.length>2)&&(usersdata.phone_number.length===10)
        &&(usersdata.userName.length>2)&&(usersdata.address.length>10)&&(usersdata.accountType)){

    let user=  [{
       email: usersdata.email,
       password:usersdata.password,
       phone_number:usersdata.phone_number,
       userName:usersdata.userName,
       address:usersdata.address,
       accountType:usersdata.accountType
       
     }]
     this.setState({users:this.state.users.concat(user)})
    }
     
   }



  

  
  render() {
    return (
 <HashRouter>
    <div className="App">
    <MyNavBar logout={this.logout} activeUser={this.state.activeUser} ></MyNavBar>

    <Route exact path="/">
      <HomePage activeUser={this.state.activeUser}></HomePage>
       </Route>
      <Route exact path="/Features">
      <Features></Features>
       </Route>
      <Route exact path="/Pricing">
        <Pricing></Pricing>
      </Route>
      <Route exact path="/About" >
        <About></About>
      </Route>
      <Route exact path="/SignupSeller" >
        <Signup activeUser={this.state.activeUser} users={this.state.users} updateUsers={this.updateUsers}></Signup>
        <Route exact path="/Signupcompleted" >
        </Route>
        </Route>

      


      <Route exact path="/Login" >

<Login activeUser={this.state.activeUser} users={this.state.users} activateUser={this.activateUser} ></Login>

</Route>


    </div>
    </HashRouter>
  );


}}