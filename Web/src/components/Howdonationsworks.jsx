import React from "react";
import './common.css';

class Howdonationsworks extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div>
                            <div className='d-flex justify-content-center mb-5'>
                                <h2>How Donation Works</h2>
                                <hr/>
                            </div>

                            <div>
                                <p className='text'>
                                    Learn what and when you can donate, how organ donors match to organ recipients, and how the transplant process works.
                                </p>

                                <h4 className='mt-5 mb-3'>Donation After Life</h4>

                                <p className='text'>
                                    Learn about donation after death and why only three in 1,000 people actually become donors even though 169 million are registered.
                                </p>

                                <h4 className='mt-5 mb-3'>Donation While Alive</h4>

                                <p className='text'>
                                    You can donate some organs—or parts of them—while you are alive.
                                </p>

                                <h4 className='mt-5 mb-3'>Matching Donors with Recipients</h4>

                                <p className='text'>
                                    Doctors add patients in the Organ Procurement and Transplantation Network (OPTN). The OPTN is a national computer system. 
                                    It puts patients in order on the waiting list and matches them to donors. 
                                </p>

                                <h4 className='mt-5 mb-3'>The Organ Transplant Process</h4>

                                <p className='text'>
                                    Find out how patients in need of a transplant get on OPTNs waiting list. Learn what happens before, during, and after the transplant.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Howdonationsworks;