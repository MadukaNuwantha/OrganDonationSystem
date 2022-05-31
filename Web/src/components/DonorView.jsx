import React from 'react';
import Services from '../Services';
import './DonorView.css';

class DonorView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[3];

        Services.DonateView(id).then(({data})=>{
            this.setState({data: data});
            console.log(data);
        })
    }

    render(){
        const {data} = this.state;
        return(
            <div className='container'>
                <div className='bgs'>
                    <div className="d-flex justify-content-center mb-3">
                        <h2 className='display-5 text-primary'><b>Details of {data.firstName} {data.lastName}</b></h2>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <table>
                            <tbody>
                                <tr className='h3 trheight'>
                                    <td width={350}>Title : </td>
                                    <td width={650} className="tddata">{data.title}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>First Name : </td>
                                    <td className="tddata">{data.firstName}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Last Name : </td>
                                    <td className="tddata">{data.lastName}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Middle Name : </td>
                                    <td className="tddata">{data.middleName}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Preffered Name : </td>
                                    <td className="tddata">{data.prefferedName}</td>
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
                                    <td>NIC : </td>
                                    <td className="tddata">{data.nic}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Address Line 1 : </td>
                                    <td className="tddata">{data.addLine1}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Address Line 2 : </td>
                                    <td className="tddata">{data.addLine2}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>City : </td>
                                    <td className="tddata">{data.city}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Province : </td>
                                    <td className="tddata">{data.province}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>PostalCode : </td>
                                    <td className="tddata">{data.postalCode}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Email : </td>
                                    <td className="tddata">{data.email}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Telephone : </td>
                                    <td className="tddata">{data.telephone}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Mobile : </td>
                                    <td className="tddata">{data.mobile}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Pref Contact : </td>
                                    <td className="tddata">{data.prefContact}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>DonateType : </td>
                                    <td className="tddata">{data.donateType}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Ethnicity : </td>
                                    <td className="tddata">{data.ethnicity}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Religion : </td>
                                    <td className="tddata">{data.religion}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>HIV : </td>
                                    <td className="tddata">{data.hiv}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>ASC : </td>
                                    <td className="tddata">{data.asc}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Diabets : </td>
                                    <td className="tddata">{data.diabets}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>Kidney Disease : </td>
                                    <td className="tddata">{data.kidneyDisease}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>HeartDisease : </td>
                                    <td className="tddata">{data.heartDisease}</td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td>None : </td>
                                    <td className="tddata">{data.none}</td>
                                </tr>
                            </tbody>
                        </table>              
                    </div>
                </div>
            </div>
        );
    }
}

export default DonorView;