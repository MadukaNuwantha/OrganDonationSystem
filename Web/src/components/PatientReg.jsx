import React from 'react';
import Services from '../Services';
import './PatientReg.css';
import bgimage from './Image/c587a683abb90a91f710583f58d9c36b.jpg';
import dp from './Image/Icons/cdaa137feb4203b75c6cd6661408de9f.png';


class PatientReg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                "gardContact": "",
            }]
        }
    }

    async handle(e){
        const newData = {...this.state.data};
        newData[e.target.id] = e.target.value;
        newData["point"] = 0;
        newData["patientId"] = "0";

        if(Number(newData["gardContact"]) >= 100000000000){
            let telephone = newData["gardContact"].substring(0,11);
            newData["gardContact"] = telephone;
            alert("Contact number formats are '0771234567' or '94771234567'");
        }

        this.setState({data: newData});
        console.log(newData);
    }

    async submitData(){
        await Services.PatientAdd(this.state.data)
            .then(({data})=>{
                console.log(data);
                alert("Successfully Added!");
                this.navigateAdmin();
        })
            .catch(({response})=>{
                alert("Registation Faild!");
                console.log(response);
        });
    }

    async navigateAdmin(){
        window.location.replace("/patient/details");
    }

    render () {
        return (
          <div>
            <div className='container'>
                <img src={bgimage} alt='' className='imgy'></img>

                <div className='bgcy'>
                    <div className='d-flex justify-content-center mb-5'>
                        <img src={dp} alt='' className='' width={150} height={150}></img>
                        <br/><br/><br/>
                    </div>
                    <div>
                        <h1 className='text-center'>Patient details</h1>
                        <hr/>
                        <div className='txtPaney'>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="userName" placeholder="Text" required/>
                                <label htmlFor="userName">Patient Name</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="number" className="form-control" onChange={(e) => this.handle(e)} id="age" placeholder="Text" required/>
                                <label htmlFor="age">Age</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="date" className="form-control" onChange={(e) => this.handle(e)} id="dob" placeholder="Text" required/>
                                <label htmlFor="dob">Date of Birth</label>
                            </div>
                            <div className='form-floating my-2'>
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="gender" required>
                                    <option value="">Select one</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Female">Other</option>
                                </select>
                                <label htmlFor="gender">Gender</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="email" className="form-control" onChange={(e) => this.handle(e)} id="email" placeholder="Text" required/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating my-2">
                                    <input type="text" className="form-control" list="datalist" onChange={(e) => this.handle(e)} id="hospital" placeholder="Text" required/>
                                    <datalist id='datalist'>
                                        <option value="National Hospital of Sri Lanka">National Hospital of Sri Lanka</option>
                                        <option value="Sri Jayawardhanapura Genaral Hospital">Sri Jayawardhanapura Genaral Hospital</option>
                                        <option value="Ragama Genaral Hospital">Ragama Genaral Hospital</option>
                                        <option value="Karapitiya Genaral Hospital">Karapitiya Genaral Hospital</option>
                                        <option value="Chillaw Base Hospital">Chillaw Base Hospital</option>
                                    </datalist>
                                    <label htmlFor="hospital">Nearest hospital for transplantation</label>
                                </div>
                                <br/><br/>
                        </div>
                    </div>
                    <div>
                        <div className='spcy'>
                            <h3 className=''>Guardian details</h3>
                        </div>
                        <hr/>
                        <div className='txtPaney'>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="gardName" placeholder="Text" required/>
                                <label htmlFor="gardName">Full name</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="gardContact" placeholder="Text" required/>
                                <label htmlFor="gardContact">Contact</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="gardRel" placeholder="Text" required/>
                                <label htmlFor="gardRel">Relationship to the patient</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="gardAddress" placeholder="Text" required/>
                                <label htmlFor="gardAddress">Address</label>
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                    <div>
                        <div className='spcy'>
                            <h3 className=''>Clinical information</h3>
                        </div>
                        <hr/>
                        <div className='txtPaney'>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="organ" placeholder="Text" required/>
                                <label htmlFor="organ">Type of organ transplantation</label>
                            </div>
                            <div className="form-floating my-2">
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="bloodType" required>
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
                                <label htmlFor="bloodType">Blood type</label>
                            </div>
                            <div className="form-floating my-2">
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="organSize" required>
                                    <option value="">Select one</option>
                                    <option value="Large">Large</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Small">Small</option>
                                </select>
                                <label htmlFor="organSize">Size of organ</label>
                            </div>
                            <div className='form-floating my-2'>
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="condition" required>
                                    <option value="">Select one</option>
                                    <option value="Low">Low</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="High">High</option>
                                </select>
                                <label htmlFor="condition">Severeity of patients medical condition</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="date" className="form-control" onChange={(e) => this.handle(e)} id="dateOfReg" placeholder="Text" required/>
                                <label htmlFor="dateOfReg">Date of registration</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="waitingList" placeholder="Text" required/>
                                <label htmlFor="waitingList">How long the patient have been in the waiting list</label>
                            </div>
                            <br/><br/> 
                        </div>
                    </div>
                    <div>
                        <div className='spcy'>
                            <h3 className=''>Prioratized Points</h3>
                        </div>
                        <hr/>
                        <div className='txtPaney'>
                            <div className='form-floating my-2'>
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="medicalurgency" required>
                                    <option value="">Select one</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                                <label htmlFor="medicalurgency">Medical urgency</label>
                            </div>
                            <div className="form-floating my-2">
                                <input type="number" className="form-control" onChange={(e) => this.handle(e)} id="distance" placeholder="Text" required/>
                                <label htmlFor="distance">Distance for donor hospital (KM)</label>
                            </div>
                            <div className='form-floating my-2'>
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="compatability" required>
                                    <option value="">Select one</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                                <label htmlFor="compatability">Compatability</label>
                            </div>
                            <div className='form-floating my-2'>
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="oneyearpost" required>
                                    <option value="">Select one</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                                <label htmlFor="oneyearpost">Predicted one year post survival</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="button" onClick={() =>  this.submitData()} className='btn btn-primary-lg px-5 mx-5 text-light' style={{background: "rgba(33, 45, 97, 0.57)"}}>Submit</button>
                        <br/><br/>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default PatientReg;