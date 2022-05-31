import React from 'react';
import Services from '../Services';
import './DonorView.css';

class PatientView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            mail: []
        }
    }

    async componentDidMount() {
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[3];

        Services.PatientView(id).then(({data})=>{
            this.setState({data: data});
            console.log(data);
        })
    }

    async handle(e){
        const newData = {...this.state.mail};
        const dataset = {...this.state.data}
        newData["email"] = dataset.email;
        newData[e.target.id] = e.target.value;
        this.setState({mail: newData});
        console.log(newData);
    }

    async sendMail(){
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[3];

        Services.sendMail(this.state.mail)
        .then(({data})=>{
          console.log(data);
          alert("Email sent successfully!");
          this.refreshPage(id);
        }).catch(({response})=>{
          console.log(response);
        })
    }

    async refreshPage(id){
        window.location.replace("/patient/view/"+id);
    }

    render(){
        const {data} = this.state;
        return(
            <div className='container'>
                <div className='bgs'>
                    <div className="d-flex justify-content-center mb-3">
                        <h2 className='display-5 text-primary'><b>Details of {data.userName}</b></h2>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <table>
                            <tbody>
                                <tr className='h3 trheight'>
                                    <td width={350}>Patient Name : </td>
                                    <td width={650} className="tddata">{data.userName}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Age : </td>
                                    <td className="tddata">{data.age}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>DOB : </td>
                                    <td className="tddata">{data.dob}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Gender : </td>
                                    <td className="tddata">{data.gender}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Email : </td>
                                    <td className="tddata">{data.email}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Hospital : </td>
                                    <td className="tddata">{data.hospital}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Gardient Name : </td>
                                    <td className="tddata">{data.gardName}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Gardient Contact : </td>
                                    <td className="tddata">{data.gardContact}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Gardient Relation : </td>
                                    <td className="tddata">{data.gardRel}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Gardient Address : </td>
                                    <td className="tddata">{data.gardAddress}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Organ : </td>
                                    <td className="tddata">{data.organ}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Blood Type : </td>
                                    <td className="tddata">{data.bloodType}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Organ Size : </td>
                                    <td className="tddata">{data.organSize}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Condition : </td>
                                    <td className="tddata">{data.condition}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Date of Reg : </td>
                                    <td className="tddata">{data.dateOfReg}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Waiting List : </td>
                                    <td className="tddata">{data.waitingList}</td>
                                </tr>
                            </tbody>
                        </table>         
                    </div>

                    <div className='d-flex justify-content-center my-5'>
                        <button type="button" className='btn btn-primary-lg px-5 mx-5 text-light' style={{background: "rgba(33, 45, 97, 0.57)"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Send Email
                        </button>
                    </div>
                        
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Patients Message</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-floating my-2 d-flex justify-content-center">
                                        <input type="text" className="form-control" onChange={(e) => this.handle(e)} id="subject" placeholder="Text" required/>
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                    <div className="form-floating my-2 d-flex justify-content-center">
                                        <textarea className="form-control" onChange={(e) => this.handle(e)} id="body" cols={3} placeholder="Text" required></textarea>
                                        <label htmlFor="body">Body</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={ () => this.sendMail() } className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div> 
            </div>
        );
    }
}

export default PatientView;;