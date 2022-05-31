import React from 'react';
import Services from '../Services';
import './AdminLogin.css';
import bgimage from './Image/b1ea42ea85668586f4194fd531d3ac75.jpg';
import dp from './Image/Icons/e3877653beb65e7e69fd471c30bb3384.png';


class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginData: [] };
    }

    async loginFunc(e){
        e.preventDefault();
        await Services.AdminLogin(this.state.loginData)
        .then(({data})=>{
          console.log(data);
          sessionStorage.setItem('userID', data.AdminID);
          sessionStorage.setItem('userName', data.userName);
          sessionStorage.setItem('type', data.type);

          var text = data.type;
          if(text == "Admin"){
            this.navigateAdmin();
          }
          else if(text == "SuperAdmin"){
            this.navigateSuperAdmin();
          }
          else{
            this.navigateLogin();
          }
        }).catch(({response})=>{
            alert("Username or Password wrong!");
          console.log(response);
        });
    }

    async navigateAdmin(){
        window.location.replace("/admin");
    }

    async navigateSuperAdmin(){
        window.location.replace("/superadmin");
    }

    async navigateLogin(){
        window.location.replace("/admin/login");
    }

    async handle(e){
        const newData = {...this.state.loginData};
        newData[e.target.id] = e.target.value;
        this.setState({ loginData: newData });
        console.log(newData);
    }

    render () {
        return (
          <div>
            <div className='container'>
                <img src={bgimage} alt='' className='imga'></img>

                <div className='bgca'>
                    <form onSubmit={(e) => this.loginFunc(e)}>
                        <div className='d-flex justify-content-center mb-5'>
                            <img src={dp} alt='' className='' width={150} height={150}></img>
                            <br/><br/><br/>
                        </div>
                        <div>
                            <h1 className='text-center my-5'>Admin Login</h1>
                            <hr/>
                            <div className='txtPanea my-5'>
                                <div className="form-floating my-2 d-flex justify-content-center">
                                    <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="userName" placeholder="Text" required/>
                                    <label htmlFor="userName"> User Name</label>
                                </div>
                                <div className="form-floating my-2 d-flex justify-content-center">
                                    <input type="password" className="form-control" onChange={(e) => this.handle(e)} id="password" placeholder="Text" required/>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            
                            <div className='d-flex justify-content-center mb-5'>
                                <button type="submit" className='btn btn-primary-lg px-5 mx-5 text-light' style={{background: "rgba(33, 45, 97, 0.57)"}}>Login</button>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p>Don't have an account. <a href="/admin/signup">Register</a></p>
                            </div>
                            <br/><br/>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        );
    }
}

export default AdminLogin;
