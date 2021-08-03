// import React from 'react'
import classes from './Login.css'
import React, { Component } from 'react'

export class Form extends Component {


  emailRef = React.createRef();
  password = React.createRef();
  state = {email:'', password:''}

  // emailChangeHandler(e){
  //   this.setState({email:e.target.value})  
  // }


  // passwordChangeHandler(e){
  //  this.setState({password:e.target.value})
  // }


  // submitHandler(event){
  //   event.preventDefault();
  //   console.log(this.state);
  //   this.setState({email:'', password:''})
  // }


  // handleChange(e){
  //   let stateName = e.target.name;
  //   let newStateVal = e.target.value;
  //   this.setState({[stateName]: newStateVal})
  // }


  submitHandler(e){
    e.preventDefault();
    console.log({
      email: this.emailRef.current.value,
      password: this.password.current.value
    })

    this.emailRef.current.value = ''  //DO NOT DO IT 
    this.password.current.value =''  

  }

  render() {
    return (
 
      <form onSubmit={(event)=>{this.submitHandler(event)}}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          {/* <input type="text" id="email"  onChange={(e)=>{this.emailChangeHandler(e)}} value={this.state.email}/> */}
          <input type="text" name="email" id="email" ref={this.emailRef}/>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          {/* <input type="password" id="password" onChange={(e)=>{this.passwordChangeHandler(e)}} value={this.state.password}/> */}
          <input type="password" id="password" ref={this.password}/>
        </div>

        <div className="form-control text-center">
   
          <button> Submit</button>
        </div>

        
      </form>
    )
  }
}

export default Form

// export class Login extends Component {
//   render() {
//     return (
//       <div className={classes.Register}>
//         <h1>Login Page</h1>
        
//         <form>
//           <div className={classes['form-control']}>
//             <label htmlFor="">Email</label>
//             <input type="email" />
//           </div>

//           <div className={classes['form-control']}>
//             <label htmlFor="">Password</label>
//             <input type="password" />
//           </div>



//           <div className={classes['form-control']}>
//               <button type="submit"> Login</button>  
//           </div>

//         </form>
//       </div>
//     )
//   }
// }

function Login() {
  return (
          <div className={classes.Register}>
            <h1>Login Page</h1>
            
            <form>
              <div className={classes['form-control']}>
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
    
              <div className={classes['form-control']}>
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
    
    
    
              <div className={classes['form-control']}>
                  <button type="submit"> Login</button>  
              </div>
    
            </form>
          </div>
        )
}



// export default Login