import React from "react";
import Services from '../Services';
import './../components/OrgansReg.css';
import bgimage from './Image/c587a683abb90a91f710583f58d9c36b.jpg';
import dp from './Image/Icons/organ-donation (2).png';

class OrgansReg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            alert: false,
            retVal: []
        }
    }

    async handle(e){
        const newData = {...this.state.data};
        newData["organId"] = "0";
        newData[e.target.id] = e.target.value;
        this.setState({ data: newData });
        console.log(newData);
    }

    async submitData(){
        await Services.orgonReg(this.state.data)
            .then(({data})=>{
                console.log(data);
                this.setState({ retVal: data });
                alert("Successfully Added!");
                var type = sessionStorage.getItem('type');
                console.log(type);
                const offData = {...this.state.data};
                offData["organ"] = "";
                offData["organSize"] = "";
                offData["bloodType"] = "";
                offData["age"] = "";
                offData["gender"] = "";
                offData["location"] = "";
                this.setState({ data: offData });
                if(type == "SuperAdmin"){
                    this.setState({ alert: true });
                }
                //this.navigateAdmin();
        })
            .catch(({response})=>{
                alert("Registation Faild!");
                console.log(response);
        });
    }

    async navigateAdmin(){
        window.location.replace("/availableorgans/details");
    }
    
    render(){
        const {alert} = this.state;
        const {data} = this.state;
        const { retVal } = this.state;

        function alertOpen(){
            if(alert == true){
                return(
                    <div className="alert alert-success alertpoint" role="alert">
                        <p>New organ Available!</p>
                        <p>Organ: {retVal.organ} &nbsp;&nbsp;&nbsp; Location: {retVal.location} &nbsp;&nbsp;&nbsp; Size: {retVal.organSize}</p>
                        <div className="d-flex justify-content-between">
                            <a href={`/patient/filter/${retVal.organ}`} className="btn btn-success mx-2">Open</a>
                            <button type="button" className="btn-close alert-dismissible mx-2" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                );
            }
        }

        return(
            <div className="container">
                <div>
                    {alertOpen()}
                </div>
                <div className='container'>
                    <img src={bgimage} alt='' className='imgy'></img>

                    <div className='bgcy'>
                        <form>
                            <div className='d-flex justify-content-center mb-5'>
                                <img src={dp} alt='' className='' width={150} height={150}></img>
                                <br/><br/><br/>
                            </div>
                            <div>
                                <h1 className='text-center mb-5'>Available organ</h1>
                                <hr/>
                                <div className='txtPaney'>
                                    <div className="form-floating mb-2 mt-5">
                                        <input type="text" className="form-control" value={data.organ} onChange={(e) => this.handle(e)} id="organ" placeholder="Text" required/>
                                        <label htmlFor="organ">Organ</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <select className="form-select form-select" value={data.organSize} onChange={(e) => this.handle(e)} id="organSize" aria-label=".form-select-sm example">
                                            <option value="">Select one</option>
                                            <option value="Large">Large</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Small">Small</option>
                                        </select>
                                        <label htmlFor="organSize">Organ Size</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <select className="form-select form-select" value={data.gender} onChange={(e) => this.handle(e)} id="bloodType" aria-label=".form-select-sm example">
                                            <option value="">Select one</option>
                                            <option value="O-">O-</option>
                                            <option value="A-">A-</option>
                                            <option value="B-">B-</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="AB+">AB+</option>
                                        </select>
                                        <label htmlFor="bloodType" className="form-label">Blood Type</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="number" className="form-control" value={data.age} onChange={(e) => this.handle(e)} id="age" placeholder="Text" required/>
                                        <label htmlFor="age">Age</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <select className="form-select form-select" value={data.gender} onChange={(e) => this.handle(e)} id="gender" aria-label=".form-select-sm example">
                                            <option value="">Select one</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="type" className="form-control" value={data.location} onChange={(e) => this.handle(e)} id="location" placeholder="Text" required/>
                                        <label htmlFor="location">Location</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                <button type="button" onClick={() => this.submitData()} className='btn btn-primary-lg px-5 mx-5 text-light' style={{background: "rgba(33, 45, 97, 0.57)"}}>Submit</button>
                                <br/><br/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrgansReg;