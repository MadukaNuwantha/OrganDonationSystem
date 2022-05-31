import React from "react";
import Services from "./../Services";

class OrgansDetails extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: []
        }
    }

    async componentDidMount() {
        Services.orgonFetch().then(({data})=>{
            this.setState({data: data});
            console.log(data);
        });
    }

    render(){
        const {data} = this.state;

        function tableData(){
            if(data.length == 0 || data === undefined){
                return(
                    <tr>
                        <th colSpan={6} className="text-center"> No data</th>
                    </tr>
                )
            }
            else{
                return(
                    data.map((data) =>
                        <tr key={data.organId}>
                            <th>{data.organ}</th>
                            <th>{data.organSize}</th>
                            <th>{data.bloodType}</th>
                            <th>{data.age}</th>
                            <th>{data.gender}</th>
                            <th>{data.location}</th>
                        </tr>
                    )
                );
            }   
        }

        return(
            <div className="container">
                <div className="container">
                    <div className='d-flex justify-content-center'><h1>Organ Details</h1></div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr className="table-dark">
                                    <th>Organ</th>
                                    <th>Organ Size</th>
                                    <th>Blood Type</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tableData() }
                            </tbody>
                        </table>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrgansDetails;