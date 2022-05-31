import React from 'react';
import Services from '../Services';

class PatientOrgon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var orgon = words[3];

        Services.patientFetchByOrgon(orgon).then(({data})=>{
            this.setState({data: data});
            console.log(data);
        })
    }

    render(){
        const { data } = this.state;

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
                                <a href={`/patient/view/${data.patientId}`} className="btn btn-primary me-2">View</a>
                            </td>
                        </tr>
                    )
                )
            }   
        }

        return(
            <div>
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
                                    <th>Date Of Registered</th>
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
            </div>
        );
    }

}

export default PatientOrgon;