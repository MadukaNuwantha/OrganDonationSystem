import React from 'react';
import Services from '../Services';
import './AdminReg.css';
import bgimage from './Image/b1ea42ea85668586f4194fd531d3ac75.jpg';
import dp from './Image/Icons/e3877653beb65e7e69fd471c30bb3384.png';


class AdminReg extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            regData: [],
            password: [],
        };
    }

    async SignupFunc(e){
        e.preventDefault();
        const pData = {...this.state.password};
        if(pData.password == pData.cpassword){
            await Services.AdminRegister(this.state.regData)
            .then(({data})=>{
                console.log(data);
                this.navigateAdmin();
            }).catch(({response})=>{
                alert("Registation Faild!");
            console.log(response);
            });
        }
        else{
            alert("Password not maching!");
        }
    }

    async navigateAdmin(){
        window.location.replace("/admin/login");
    }

    /*async adminReg(){
        const pData = {...this.state.password};
        var pw = pData.password.valueOf();
        var cpw = pData.cpassword.valueOf();
        if(pw == cpw){
            await Services.AdminRegister(this.state.regData)
            .then(({data})=>{
            console.log(data);
            }).catch(({response})=>{
            console.log(response);
            })
            console.log(pw+" "+cpw);
        }
        else{
            alert("Password not maching!");
        }
    }*/

    async handle(e){
        const newData = {...this.state.regData};
        newData["adminID"] = "0";
        newData[e.target.id] = e.target.value;
        if((newData["organization"]== "National Hospital of Sri Lanka") || (newData["organization"]== "Sri Jayawardhanapura Genaral Hospital") || (newData["organization"]== "Ragama Genaral Hospital") || (newData["organization"]== "Karapitiya Genaral Hospital") || (newData["organization"]== "Chillaw Base Hospital")){
            newData["type"] = "SuperAdmin";
        }
        else{
            newData["type"] = "Admin";
        }
        this.setState({ regData: newData });
        console.log(newData);
    }

    async passwordHandle(e){
        const newData = {...this.state.password};
        newData[e.target.id] = e.target.value;
        this.setState({ password: newData });
        console.log(newData);
    }

    render () {
        return (
          <div>
            <div className='container'>
                <img src={bgimage} alt='' className='imgb'></img>

                <div className='bgcb'>
                    <form onSubmit={(e) => this.SignupFunc(e)}>
                        <div className='d-flex justify-content-center mb-5'>
                            <img src={dp} alt='' className='' width={150} height={150}></img>
                            <br/><br/><br/>
                        </div>
                        <div>
                            <h1 className='text-center mb-5'>Admin Register</h1>
                            <hr/>
                            <div className='txtPaneb mt-5'>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="userName" placeholder="Text" required/>
                                    <label htmlFor="userName"> User Name</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="nic" placeholder="Text" required/>
                                    <label htmlFor="nic">NIC</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="password" className="form-control" onChange={(e) => {this.handle(e); this.passwordHandle(e)}} id="password" placeholder="Text" required/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="password" className="form-control" onChange={(e) => this.passwordHandle(e)} id="cpassword" placeholder="Text" required/>
                                    <label htmlFor="cpassword">Confirm Password</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" list="datalist" onChange={(e) => this.handle(e)} id="organization" placeholder="Text" required/>
                                    <datalist id='datalist'>
                                        <option value="National Hospital of Sri Lanka">National Hospital of Sri Lanka</option>
                                        <option value="Sri Jayawardhanapura Genaral Hospital">Sri Jayawardhanapura Genaral Hospital</option>
                                        <option value="Ragama Genaral Hospital">Ragama Genaral Hospital</option>
                                        <option value="Karapitiya Genaral Hospital">Karapitiya Genaral Hospital</option>
                                        <option value="Chillaw Base Hospital">Chillaw Base Hospital</option>
                                    </datalist>
                                    <label htmlFor="organization">Organization</label>
                                </div>
                                <br/><br/>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className='btn btn-primary-lg px-5 mx-5 text-light' style={{background: "rgba(33, 45, 97, 0.57)"}}>Sign Up</button>
                                <br/><br/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        );
    }
}

export default AdminReg;