import React from 'react';
import Services from '../Services';

class DonorDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        Services.DonateFetch().then(({data})=>{
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
                        <tr className="table-info" key={data.donateId}>
                            <td scope="col">{data.title}</td>
                            <td scope="col">{data.firstName}</td>
                            <td scope="col">{data.lastName}</td>
                            <td scope="col">{data.dob}</td>
                            <td scope="col">{data.gender}</td>
                            <td scope="col">{data.city}</td>
                            <td scope="col">{data.province}</td>
                            <td scope="col">{data.email}</td>
                            <td scope="col">{data.telephone}</td>
                            <td scope="col">{data.mobile}</td>
                            <td className="text-center">
                                <a href={`/doner/view/${data.donateId}`} className="btn btn-primary me-2">View</a>
                            </td>
                        </tr>
                    )
                )
            }   
        }

        return(
            <div className="container">
                <div className='d-flex justify-content-center'><h1>Donor Details</h1></div>
                <div>
                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Title</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                                <th scope="col">Province</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableDataFetch()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DonorDetails;