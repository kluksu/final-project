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
import Checkout from './components/Checkout';
import MyIncommingOrders from './MyIncommingOrders';
import ThanksForRegistering from './components/ThanksForRegistering';


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
        accountType:"buyer"
        
      },{
        email: "shriki618@hotmail.com",
        password:"111",
        phone_number:"0507780982",
        userName:"ori",
        address:"ghiugiugigigigig",
        accountType:"seller"
        
      },{
        email: "elad@gmail.com",
        password:"111",
        phone_number:"0507780982",
        userName:"elad",
        address:"ghiugiugigigigig",
        accountType:"seller"
      },{
        email: "hadar@gmail.com",
        password:"111",
        phone_number:"0507780982",
        userName:"hadar",
        address:"ghiugiugigigigig",
        accountType:"seller"
      }
    ],
      products:[],
      activeUser: {
        email: "shriki18@hotmail.com",
        password:"111",
        phone_number:"0507780982",
        userName:"kluksu",
        address:"ghiugiugigigigig",
        accountType:"buyer"
        
      },
      activeStore:'',
      productID:0,
      searchText:"",
      selectedStore:"",
      selectedProduct:"",
      buyerQuantity:0,
      cart:[],
      selectedCart:"",
      orders:[], 
      signupSubmited:false,
      selectedOrder:""
                            //{buyerQWAntity, product, status, activeuser}

    }
}


createOrder=(order)=>{
   let ordersArr={newOrder:order.order,
                  orderedFrom:this.state.activeUser,
                    buyerQuantity:order.buyerQuantity}
  this.setState({orders:this.state.orders.concat(ordersArr)})
  console.log(this.state.orders)

}

cartSelect=(store)=>{
    this.setState({selectedCart:store.cartStore} )
    console.log(this.state.selectedCart)

}
selectedProduct=(item)=>{
  let product=item.product
this.setState({selectedProduct:product})
}////////////////////

 addCartItem = async (item)=>{
  let product=item.product
  let Quantity=item.BuyerQuantity

   await this.setState({selectedProduct:product})
  let arr=[]
  let cartItem = {buyerQuantity:Quantity, product:this.state.selectedProduct, activeUser:this.state.activeUser}

arr.push(cartItem)
this.setState({cart:this.state.cart.concat(arr)})
console.log(this.state.cart)

}



setBuyerQuantity=(event)=>{
 this.setState({buyerQuantity:event.target.value})
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
  getSelectedOrder=(order)=>{
    this.setState({selectedOrder:order})
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
     this.setState({signupSubmited:true})
     this.setState({users:this.state.users.concat(user)})
    }
     
   }



  
    
  render() {
    return (
 <HashRouter>
    <div className="App">
    <MyNavBar cart={this.state.cart} getSelectedOrder={this.getSelectedOrder} orders={this.state.orders} cartSelect={this.cartSelect} logout={this.logout} activeUser={this.state.activeUser} products={this.props.products}></MyNavBar>

    <Route exact path="/">
      <HomePage getText={this.getText} getStore={this.getStore} setBuyerQuantity={this.setBuyerQuantity} activeUser={this.state.activeUser} searchText={this.state.searchText}  products={this.state.products}></HomePage>
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
        <Signup activeUser={this.state.activeUser} signupSubmited={this.state.signupSubmited} users={this.state.users} updateUsers={this.updateUsers}> </Signup>
        </Route>

        <Route exact path="/Signupcompleted" >
        <ThanksForRegistering></ThanksForRegistering>

        </Route>
        <Route exact path="/uploaditems" >
        <UploadItems activeUser={this.state.activeUser} products={this.state.products} updateProducts={this.updateProducts}></UploadItems>
      </Route>
      <Route exact path={`/store/${this.state.selectedStore}`}>
      <Store getText={this.getText} logout={this.logout} addCartItem={this.addCartItem} setBuyerQuantity={this.setBuyerQuantity} selectedProduct={this.selectedProduct} activeUser={this.state.activeUser} searchText={this.state.searchText} selectedStore={this.state.selectedStore}  products={this.state.products}></Store>
       </Route>
       <Route exact path={`/store/${this.state.selectedStore}/x${this.state.selectedProduct.itemName}`}>
         <ProductDetailsPage selectedProduct={this.state.selectedProduct}></ProductDetailsPage>
       </Route>
       
       <Route exact path={`/cart+${this.state.selectedCart}+${this.state.activeUser.userName}`}>
         <Checkout createOrder={this.createOrder} selectedCart={this.state.selectedCart} cart={this.state.cart} activeUser={this.state.activeUser}></Checkout>
       </Route>
       <Route exact path={`/order/${this.state.activeUser.userName}/${this.state.selectedOrder}`}>
         <MyIncommingOrders activeUser={this.state.activeUser} selectedOrder={this.state.selectedOrder} orders={this.state.orders}></MyIncommingOrders>
       </Route>
   
     

  
      


      <Route exact path="/Login" >

<Login activeUser={this.state.activeUser} users={this.state.users} activateUser={this.activateUser} ></Login>

</Route>


    </div>
    </HashRouter>
  );


}}