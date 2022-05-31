import React from 'react';
import Services from '../Services';
import './DonorReg.css';
import bgimage from './Image/2dd2d552cbf6b94d6f6ccbd7b6f1c03d.jpg';

class DonorReg extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            donorDetails: {
                "nic": '0',
                "telephone": 0,
                "mobile": 0,
                "hiv": "false",
                "asc": "false",
                "diabetes": "false",
                "kidneyDisease": "false",
                "heartDisease": "false",
                "none": "false"
            },
            agreement : []
        };
    }

    /*async navigateSuperAdmin(){
        window.location.replace("/doner/thank");
    }*/

    async handle(e){
        const newData = {...this.state.donorDetails};
        newData["donateId"] = "noid";
        newData[e.target.id] = e.target.value;

        if(Number(newData["nic"]) >= 1000000000000){
            let nic = newData["nic"].substring(0,12);
            newData["nic"] = nic;
            alert("Invalid NIC ");
        }

        if(Number(newData["telephone"]) >= 100000000000){
            let telephone = newData["telephone"].substring(0,11);
            newData["telephone"] = telephone;
            alert("Telephone number formats are '0771234567' or '94771234567'");
        }

        if(Number(newData["mobile"]) >= 100000000000){
            let mobile = newData["mobile"].substring(0,11);
            newData["mobile"] = mobile;
            alert("Mobile number formats are '0771234567' or '94771234567'");
        }
        this.setState({ donorDetails: newData });
        console.log(newData);
    }

    async handleR2(e){ //Check boxes
        const newData = {...this.state.donorDetails};
        if(e.target.id == "mi1"){
            if(e.target.checked == false){
                newData["hiv"] = "false";
            }
            else{
                newData["hiv"] = "true";
            }
        }
        else if(e.target.id == "mi2"){
            if(e.target.checked == false){
                newData["asc"] = "false";
            }
            else{
                newData["asc"] = "true";
            }
        }
        else if(e.target.id == "mi3"){
            if(e.target.checked == false){
                newData["diabetes"] = "false";
            }
            else{
                newData["diabetes"] = "true";
            }
        }
        else if(e.target.id == "mi4"){
            if(e.target.checked == false){
                newData["kidneyDisease"] = "false";
            }
            else{
                newData["kidneyDisease"] = "true";
            }
        }
        else if(e.target.id == "mi5"){
            if(e.target.checked == false){
                newData["heartDisease"] = "false";
            }
            else{
                newData["heartDisease"] = "true";
            }
        }
        else if(e.target.id == "mi6"){
            if(e.target.checked == false){
                newData["none"] = "false";
            }
            else{
                newData["none"] = "true";
            }
        }

        this.setState({donorDetails: newData});
        console.log(newData);
    }

      


    async handleAgree(e){
        const newData = {...this.state.agreement};
        newData[e.target.id] = e.target.checked;
        this.setState({agreement: newData});
        console.log(newData);
    }

    async navigateThank(id){
        window.location.replace("/doner/thank/"+id);
    }

    async nicValidate(e){
        e.preventDefault();
        var nic = e.target.value;
        if(!(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/m).test(nic)) {
            alert("Incorrect format of NIC.");
        }
    }

    async submitForm(e){
        e.preventDefault();
        const data = this.state.agreement;
        if(data.check1 == true){
            Services.DonateReg(this.state.donorDetails)
            .then(({data})=>{
                console.log(data);
                this.navigateThank(data.donateId);
            }).catch(({response})=>{
                console.log(response);
            })
        }
        else{
            alert("Please agree with agreement.");
        }
    } 

    render() {
        const {donorDetails} = this.state;
        return (
          <div>
            <div className='container'>
                <img src={bgimage} alt='' className='imgd'></img>

                <div className='bgcd'>
                    <form onSubmit={(e) => this.submitForm(e)}>
                        <div>
                            <h1 className='text-center mb-5'>Register desicion to donate</h1>
                        </div>
                        <div>
                            <h3 className='spcd'>Register desicion to donate</h3>
                            <hr/>
                            <div className='txtPaned'>
                                <div className="form-floating my-2">
                                    <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="title" required>
                                        <option value="">Select one</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Rev.">Rev.</option>
                                        <option value="Dr.">Dr.</option>
                                    </select>
                                    <label htmlFor="title">Title</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="firstName" placeholder="Text" required/>
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="lastName" placeholder="Text" required/>
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="middleName" placeholder="Text" required/>
                                    <label htmlFor="middleName">Middle Name</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="prefferedName" placeholder="Text" required/>
                                    <label htmlFor="prefferedName">Preffered Name</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="date" className="form-control" onChange={(e) => this.handle(e)} id="dob" placeholder="Text" required/>
                                    <label htmlFor="dob">Date of Birth</label>
                                </div>
                                <div className="form-floating my-2">
                                    <select className="form-select form-select" id="gender" onChange={(e) => this.handle(e)} aria-label=".form-select-sm example" required>
                                        <option value="">Select one</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <label htmlFor="gender">Gender</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" value={donorDetails.nic} onChange={(e) => this.handle(e)} onBlur={(e)=> this.nicValidate(e)} id="nic" placeholder="Text" required/>
                                    <label htmlFor="nic">NIC Number</label>
                                </div>
                                <br/><br/>
                            </div>
                            <div>
                                <h3 className='spcd'>Your address</h3>
                                <hr/>
                                <div className='txtPaned'>
                                    <div className="form-floating my-2">
                                        <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="addLine1" placeholder="Text" required/>
                                        <label htmlFor="addLine1">Address line 1</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="addLine2" placeholder="Text" required/>
                                        <label htmlFor="addLine2">Address line 2</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="city" placeholder="Text" required/>
                                        <label htmlFor="city">City</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="distric" placeholder="Text" required/>
                                        <label htmlFor="distric">Distric</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="province" placeholder="Text" required/>
                                        <label htmlFor="province">Province</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="postalCode" placeholder="Text" required/>
                                        <label htmlFor="postalCode">Postal Code</label>
                                    </div>
                                </div>
                                <br/><br/>
                            </div>
                            <div>
                                <h3 className='spcd'>Your contact details</h3>
                                <hr/>
                                <div className='txtPaned'>
                                    <div className="form-floating my-2">
                                        <input type="email" className="form-control" onChange={(e) => this.handle(e)} id="email" placeholder="Text" required/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="text" className="form-control" value={donorDetails.telephone} onChange={(e) => this.handle(e)} id="telephone" placeholder="Text" required/>
                                        <label htmlFor="telephone">Telephone</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <input type="number" className="form-control" value={donorDetails.mobile} onChange={(e) => this.handle(e)} id="mobile" placeholder="Text" required/>
                                        <label htmlFor="mobile">Mobile</label>
                                    </div>
                                    <div className="form-floating my-2">
                                        <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="prefContact" required>
                                            <option value="">Select one</option>
                                            <option value="Mobile">Mobile</option>
                                            <option value="Email">Email</option>
                                            <option value="Telephone">Telephone</option>
                                        </select>
                                        <label htmlFor="prefContact">Preferred form of contact</label>
                                    </div>
                                </div>
                                <br/><br/>
                            </div>
                            <div>
                                <h3 className='spcd'>Your Choice</h3>
                                <hr/>
                                <div className='txtPaned'>
                                    <p>I want to donate</p>
                                    <div className="form-floating my-2">
                                        <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="donateType" required>
                                            <option value="">Select one</option>
                                            <option value="Heart">Heart</option>
                                            <option value="Lungs">Lungs</option>
                                            <option value="Kindness">Kindneys</option>
                                            <option value="Liver">Liver</option>
                                            <option value="Tissue">Tissue</option>
                                            <option value="All Organs">All Organs</option>
                                        </select>
                                        <label htmlFor="donateType">Donate</label>
                                    </div>
                                </div>
                                <br/><br/>
                            </div>
                            
                            <div>
                                <h3 className='spcd'>Medical information</h3>
                                <hr/>
                                <div className='txtPaned'>
                                    <p>Do you have any of the bellow medical complications.</p>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" onChange={(e) => this.handleR2(e)} type="checkbox" name="flexRadioDefault" id="mi1"/>
                                        <label className="form-check-label" htmlFor="mi1">HIV</label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" onChange={(e) => this.handleR2(e)} type="checkbox" name="flexRadioDefault" id="mi2"/>
                                        <label className="form-check-label" htmlFor="mi2">Actively spreading cancer</label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" onChange={(e) => this.handleR2(e)} type="checkbox" name="flexRadioDefault" id="mi3"/>
                                        <label className="form-check-label" htmlFor="mi3">Diabetes</label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" onChange={(e) => this.handleR2(e)} type="checkbox" name="flexRadioDefault" id="mi4"/>
                                        <label className="form-check-label" htmlFor="mi4">Kidney disease</label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" onChange={(e) => this.handleR2(e)} type="checkbox" name="flexRadioDefault" id="mi5"/>
                                        <label className="form-check-label" htmlFor="mi5">Heart disease</label>
                                    </div>
                                    <div className="form-check mx-5">
                                        <input className="form-check-input" onChange={(e) => this.handleR2(e)} type="checkbox" name="flexRadioDefault" id="mi6"/>
                                        <label className="form-check-label" htmlFor="mi5">None</label>
                                    </div>
                                </div>
                                <br/><br/>
                            </div>
                            <div>
                                <h3 className='spcd'>Confirmation</h3>
                                <hr/>
                                <div className='txtPaned'>
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={(e) => this.handleAgree(e)} type="checkbox" value="" id="check1" />
                                        <label className="form-check-label" htmlFor="check1">
                                            I have read the privacy statement and give consent for the use of my infomation accordance with the terms.
                                        </label>
                                    </div>
                                </div>
                                <br/><br/>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type="submit" className='btn btn-primary-lg px-5 mx-5 text-light' style={{background: "rgba(33, 45, 97, 0.57)"}}>Submit</button>
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

export default DonorReg;