import React from 'react';
import './common.css';
import img1 from './Image/tissue-regeneration-bone-vesicles2-1.jpg';

class DonateBone extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div className='d-flex justify-content-center mb-5'>
                            <h2>Bone and amniotic membrane donation.</h2>
                            <hr/>
                        </div>

                        <div>
                            <div className='d-flex justify-content-center mb-5'>
                                <img src={img1} alt="" style={{borderRadius: "15px", height: "500px"}} />
                            </div>

                            <p className='text'>
                                Unlike other organ and tissue donations, you can donate bone and part of your placenta as a living tissue donor. Signing up to the Organ Donor 
                                Register tells us what you would like to happen to your body in the event of your death. We also work with specific hospitals to give people 
                                the opportunity to donate bone and amniotic membrane (part of the placenta) when having planned hip surgery or giving birth by elective 
                                caesarean section.
                            </p>

                            <h4 className='mt-5 mb-3'>Donating bone</h4>

                            <p className='text'>
                                If you are having a total hip replacement you can donate the femoral head part of your thigh bone that is removed during your operation. 
                                Donating this bone does not interfere with your surgery in any way as the bone must be removed anyway. You will need to give some blood 
                                samples to help determine whether your bone can be used for transplantation.
                            </p>

                            <h4 className='mt-5 mb-3'>Donating your placenta</h4>

                            <p className='text'>
                                Amniotic membrane is part of the placenta. It is the tissue closest to your baby while it develops in the womb. If your baby is being 
                                delivered by elective caesarian section at one of our partner hospitals, you can donate the placenta at delivery.
                            </p>

                            <p className='text'>
                                Donating the placenta is completely voluntary and will not interfere with the delivery of your baby. Before delivery a trained Specialist 
                                Tissue Donation Nurse or Health Care Professional will ask you about your medical history and take a blood sample. No blood is ever needed 
                                from your baby.
                            </p>

                            <h4 className='mt-5 mb-3'>Can I be a living tissue donor?</h4>

                            <p className='text'>
                                If your surgery or birth is planned at one of our partner hospitals, it may be possible for you to donate.
                            </p>

                            <ul>
                                <li>Find out more about our ‘bone donation during surgery’ programme.</li>
                                <li>Find out more about our ‘placenta donation’ programme.</li>
                                <li>It is also possible to donate cord blood after giving birth.</li>
                                <li>Contact us about living bone donation and placenta donation by emailing tissuedonation@nhsbt.nhs.uk.</li>
                            </ul>

                            <h4 className='mt-5 mb-3'>Why do people need bone and amniotic membrane?</h4>

                            <p className='text'>
                                Donated bone can be used in bone grafts which can make an enormous difference, restoring health and mobility to many patients.
                            </p>

                            <p className='text'>
                                Amniotic membrane is important for reconstructive surgery. It can be used as a graft and as a dressing. It is particularly useful in 
                                ophthalmology for eye reconstruction surgery.
                            </p>

                            <h4 className='mt-5 mb-3'>If you want to become a donor after your death</h4>

                            <p className='text'>
                                Tell your friends and family that you want to be an organ and tissue donor – it is very important that they understand and support your organ 
                                and tissue donation decision because your family’s support is needed for donation to go ahead. Dealing with the death of a loved one is a 
                                difficult time to make an important decision quickly.
                            </p>

                            <p className='text'>
                                Sign up to the Organ Donor Register online. The NHS Organ Donor Register is a secure database that records people’s decision around whether 
                                or not they want to be an organ and tissue donor when they die. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DonateBone;