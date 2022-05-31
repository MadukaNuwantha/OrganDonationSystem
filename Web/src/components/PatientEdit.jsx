import React, { useEffect, useState } from "react";  
import Services from '../Services';

function PatientEdit(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[3];

        Services.PatientView(id).then(({data})=>{
            setData(data);
            console.log(data);
        })
    },[])

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    function updatePatient(){
        if(window.confirm("Are you sure you want to update this data!") == true){
            Services.updatePatient(data)
            .then(({data})=>{
            console.log(data);
            alert("Update Successfully!");
            window.location.replace("/patient/details");
            }).catch(({response})=>{
            console.log(response);
            })
        }
    }

    return(
        <div className='container'>
            <div className="bgs">
                <div className="d-flex justify-content-center mb-3">
                    <h2 className='display-5 text-primary'><b>Details of {data.userName}</b></h2>
                </div>
                <hr/>
                <div className="d-flex justify-content-center">
                    <form>
                        <table>
                            <tbody>
                                <tr className='h3 trheight'>
                                    <td width={350}><b>Patient Name : </b></td>
                                    <td width={450}><input type="text" id ="userName" value={data.userName} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Age : </b></td>
                                    <td><input type="number" id ="age" value={data.age} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>                            
                                <tr className='h3 trheight'>
                                    <td><b>DOB : </b></td>
                                    <td><input type="date" id ="dob" value={data.dob} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Gender : </b></td>
                                    <td><input type="text" id ="gender" value={data.gender} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Email : </b></td>
                                    <td><input type="email" id ="email" value={data.email} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Hospital : </b></td>
                                    <td><input type="text" id ="hospital" value={data.hospital} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Gardient Name : </b></td>
                                    <td><input type="text" id ="gardName" value={data.gardName} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Gardient Contact : </b></td>
                                    <td><input type="text" id ="gardContact" value={data.gardContact} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Gardient Relation : </b></td>
                                    <td><input type="text" id ="gardRel" value={data.gardRel} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Gardient Address : </b></td>
                                    <td><input type="text" id ="gardAddress" value={data.gardAddress} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Organ : </b></td>
                                    <td><input type="text" id ="organ" value={data.organ} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Blood Type : </b></td>
                                    <td><input type="text" id ="bloodType" value={data.bloodType} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Organ Size : </b></td>
                                    <td><input type="text" id ="organSize" value={data.organSize} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Condition : </b></td>
                                    <td><input type="text" id ="condition" value={data.condition} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Date of Reg : </b></td>
                                    <td><input type="date" id ="dateOfReg" value={data.dateOfReg} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td><b>Waiting List : </b></td>
                                    <td><input type="date" id ="waitingList" value={data.waitingList} onChange={(e) => handle(e)} className="form-control"/></td>
                                </tr>
                                <tr className='h3 trheight'>
                                    <td colSpan={2}>
                                        <div className=' d-flex justify-content-end mt-5'>
                                            <button type="button" className='btn btn-primary-lg px-5 mx-5 text-light'  onClick={ () => updatePatient() } style={{background: "rgba(33, 45, 97, 0.57)"}}>Update</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PatientEdit;