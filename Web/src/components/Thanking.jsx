import React from 'react';
import jsPDF from 'jspdf';
import Services from '../Services';
import './Thanking.css';
import bgimage from './Image/672cb937dff072e1ec76a01634f729bf.jpg';
import image from './Image/Image.jpg';

class Thanking extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
    }

    async componentDidMount(){
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[3];
        console.log(id);

        Services.DonateView(id).then(({data})=>{
            this.setState({data: data});
            console.log(data);
        }).catch(({response}) => {
            console.log(response);
        })
    }

    async pdfGenarate(){
        const myData = this.state.data;
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[3];
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        var doc = new jsPDF('portrait', 'px', 'a4', 'false');
        
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        //var imgData = 'data:image/jpg;base64,' + Base64.encode('./Image/Image.jpg');
        doc.addImage(image, 'JPG', 15, 40, width, height);
        //var text = "";
        /*doc.setFontSize(48);
        doc.text(width/2, 55, 'OrgDon.lk', { align: 'center' });
        doc.setFontSize(24);
        doc.text(width/2, 80, 'Donor Certificate.', { align: 'center' });
        doc.text(width/2, 90, '__________________________________________________________________________________', { align: 'center' });*/
        
        /*doc.setFontSize(14);
        doc.text(60, 120, "Title");
        doc.text(200, 120, ":");
        doc.text(220, 120, myData.title);
        doc.text(60, 135, "First Name");
        doc.text(200, 135, ":");
        doc.text(220, 135, myData.firstName);
        doc.text(60, 150, "Last Name");
        doc.text(200, 150, ":");
        doc.text(220, 150, myData.lastName);
        doc.text(60, 165, "Middle Name");
        doc.text(200, 165, ":");
        doc.text(220, 165, myData.middleName);
        doc.text(60, 180, "Preffered Name");
        doc.text(200, 180, ":");
        doc.text(220, 180, myData.prefferedName);
        doc.text(60, 195, "Date of Birth");
        doc.text(200, 195, ":");
        doc.text(220, 195, myData.dob);
        doc.text(60, 210, "Gender");
        doc.text(200, 210, ":");
        doc.text(220, 210, myData.gender);
        doc.text(60, 225, "NIC Number");
        doc.text(200, 225, ":");
        doc.text(220, 225, myData.nic);

        doc.text(60, 240, "Address line 1");
        doc.text(200, 240, ":");
        doc.text(220, 240, myData.addLine1);
        doc.text(60, 255, "Address line 2");
        doc.text(200, 255, ":");
        doc.text(220, 255, myData.addLine2);
        doc.text(60, 270, "City");
        doc.text(200, 270, ":");
        doc.text(220, 270, myData.city);
        doc.text(60, 285, "Province");
        doc.text(200, 285, ":");
        doc.text(220, 285, myData.province);
        doc.text(60, 300, "Postal Code");
        doc.text(200, 300, ":");
        doc.text(220, 300, (myData.postalCode).toString());

        doc.text(60, 315, "Email");
        doc.text(200, 315, ":");
        doc.text(220, 315, myData.email);
        doc.text(60, 330, "Telephone");
        doc.text(200, 330, ":");
        doc.text(220, 330, myData.telephone);
        doc.text(60, 345, "Mobile");
        doc.text(200, 345, ":");
        doc.text(220, 345, myData.mobile);
        doc.text(60, 360, "Preferred form of contact");
        doc.text(200, 360, ":");
        doc.text(220, 360, myData.prefContact);

        doc.text(60, 375, "Donate");
        doc.text(200, 375, ":");
        doc.text(220, 375, myData.donateType);
        doc.text(60, 390, "Ethnicity");
        doc.text(200, 390, ":");
        doc.text(220, 390, myData.ethnicity);
        doc.text(60, 405, "Religion");
        doc.text(200, 405, ":");
        doc.text(220, 405, myData.religion);

        doc.text(60, 420, "HIV");
        doc.text(200, 420, ":");
        doc.text(220, 420, myData.hiv);
        doc.text(60, 435, "Actively spreading cancer");
        doc.text(200, 435, ":");
        doc.text(220, 435, myData.asc);
        doc.text(60, 450, "Diabetes");
        doc.text(200, 450, ":");
        doc.text(220, 450, myData.diabets);
        doc.text(60, 465, "Kidney disease");
        doc.text(200, 465, ":");
        doc.text(220, 465, myData.kidneyDisease);
        doc.text(60, 480, "Heart disease");
        doc.text(200, 480, ":");
        doc.text(220, 480, myData.heartDisease);
        doc.text(60, 495, "None");
        doc.text(200, 495, ":");
        doc.text(220, 495, myData.none);*/

        doc.text(145, 275, "Name");
        doc.text(210, 275, ":");
        doc.text(220, 275, myData.title + myData.firstName +  " " + myData.lastName);
        doc.text(145, 290, "NIC No");
        doc.text(210, 290, ":");
        doc.text(220, 290, myData.nic);
        doc.text(145, 305, "Telephone");
        doc.text(210, 305, ":");
        doc.text(220, 305, myData.telephone);
        doc.text(145, 320, "Reg Date");
        doc.text(210, 320, ":");
        doc.text(220, 320, date);
        doc.setFontSize(9);
        doc.text(145, 380, "Reg No");
        doc.text(180, 380, ":");
        doc.text(190, 380, myData.donateId);
        
        doc.save(id+".pdf");
    }

    render(){
        return(
          <div>
            <div className='container'>
                <img src={bgimage} alt='' className='imgm'/>

                <div className='bgcm'>
                    <div>
                        <h4 className='text-center text-light mb-4'>Thank you for your decision to donate!</h4>
                    </div>
                    <div>
                        <h1 className='text-center text-light mb-4'>Welcome to the Organ Donation Society!</h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="button" onClick={() => this.pdfGenarate()} className='btn btn-primary-lg my-4 px-5 mx-5' style={{background: "#629288", color: "#0E4B4F", fontSize:"25px"}}>
                            <b><i className="bi bi-download"></i></b> Download your donor card from here
                        </button>
                    </div>
                </div>
            </div>
          </div>
        ); 
    }
}

export default Thanking;