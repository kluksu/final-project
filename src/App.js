import HomePage from './components/HomePage';

import './App.css';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Store from './components/Store';





import React, { Component } from 'react'
import MyNavBar from './components/MyNavBar';
import UploadItems from './components/UploadItems';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users: [{
        email: "shriki18@hotmail.com",
        password:"111",
        phone_number:"0507780982",
        userName:"kluksu",
        address:"ghiugiugigigigig",
        accountType:"seller"
        
      }],
      products:[],
      activeUser: {
        email: "shriki18@hotmail.com",
        password:"111",
        phone_number:"0507780982",
        userName:"kluksu",
        address:"ghiugiugigigigig",
        accountType:"seller"
        
      },
      activeStore:'',
      productID:0,
      searchText:"",
      selectedStore:"",
      selectedProduct:""

    

    }
  }
 
  componentDidUpdate(prevProps,prevState){
    console.log(this.state.selectedProduct)


}
selectedProduct=(item)=>{
  let product=item.product
this.setState({selectedProduct:product})
}

getStore=(store)=>{
    let user=store.user
 this.setState({selectedStore:user})
 }

 

  getText=(event)=>{
    this.setState({searchText:event.target.value})
    console.log(this.state.searchText)
    }
    
   
  updateProducts=(productData)=>{


let product=  [{
  fieldsArr:productData.fieldsArr,
  quantity:productData.quantity,
  unit:productData.unit,
  itemName:productData.itemName,
  batch:productData.batch,
  minimum:productData.minimum,
  price:productData.price,
  newFieldsArr:productData.newFieldsArr,
  id:this.state.productID,
  picturesArr:productData.picturesArr,
  user:this.state.activeUser.userName

 
   
 }]
 console.log(product)
 this.setState({productID:this.state.productID+1})
 this.setState({products:this.state.products.concat(product)})
}

  logout=()=>{
    this.setState({activeUser:""})
    console.log(this.state.activeUser)
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
      <HomePage getText={this.getText} getStore={this.getStore}  activeUser={this.state.activeUser} searchText={this.state.searchText}  products={this.state.products}></HomePage>
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
        <Route exact path="/uploaditems" >
        <UploadItems activeUser={this.state.activeUser} updateProducts={this.updateProducts}></UploadItems>
      </Route>
      <Route exact path={`/store/${this.state.selectedStore}`}>
      <Store getText={this.getText} logout={this.logout} selectedProduct={this.selectedProduct} activeUser={this.state.activeUser} searchText={this.state.searchText} selectedStore={this.state.selectedStore}  products={this.state.products}></Store>
       </Route>
       <Route exact path={`/store/${this.state.selectedStore}/x${this.state.selectedProduct.itemName}`}>
         <ProductDetailsPage selectedProduct={this.state.selectedProduct}></ProductDetailsPage>
       </Route>

       
      

  
      


      <Route exact path="/Login" >

<Login activeUser={this.state.activeUser} users={this.state.users} activateUser={this.activateUser} ></Login>

</Route>


    </div>
    </HashRouter>
  );


}}