import React from 'react';
import Services from '../Services';

class PatientDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        Services.PatientFetch().then(({data})=>{
            this.setState({data: data});
            console.log(data);
        })
    }

    render(){
        const { data } = this.state;

        const PatientDelete = async (id) => {
            if(window.confirm("Are you sure you want to update this data!") == true){
                await Services.PatientDelete(id)
                    .then(({data})=>{
                    console.log(data);
                    this.componentDidMount();
                }).catch(({response:{data}})=>{
                    console.log(data);
                })
            }
        }

        function tableDataFetch(){
            if(data.length == 0 || data === undefined){
                return(
                    <tr>
                        <th colSpan={16} className="text-center"> No data</th>
                    </tr>
                )
            }
            else{
                return(
                    data.map((data) =>
                        <tr className="table-info" key={data.patientId}>
                            <td>{data.userName}</td>
                            <td>{data.age}</td>
                            <td>{data.dob}</td>
                            <td>{data.gender}</td>
                            <td>{data.hospital}</td>
                            <td>{data.organ}</td>
                            <td>{data.bloodType}</td>
                            <td>{data.condition}</td>
                            <td>{data.points}</td>
                            <td>{data.dateOfReg}</td>
                            <td className="text-center">
                                <a href={`/patient/edit/${data.patientId}`} className="btn btn-warning me-2">Edit</a>
                                <a href={`/patient/view/${data.patientId}`} className="btn btn-primary me-2">View</a>
                            </td>
                        </tr>
                    )
                )
            }   
        }

        return(
            <div className='container'>
                <div className='d-flex justify-content-center'><h1>Patients Details</h1></div>
                <div>
                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th>Name</th>
                                <th>Age</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Nearest Hospital</th>
                                <th>Organ to Transplant</th>
                                <th>Blood Type</th>
                                <th>Condition</th>
                                <th>Points</th>
                                <th>Date Of Registration</th>
                                <th width={250}>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableDataFetch()}
                        </tbody>
                    </table>
                    <br/><br/><br/>
                </div>
            </div>
        );
    }
}

export default PatientDetails;