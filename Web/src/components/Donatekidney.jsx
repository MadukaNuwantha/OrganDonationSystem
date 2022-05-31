import React from 'react';
import './common.css';
import img1 from './Image/organ_donation_1564041690_725x725.jpg';

class Donatekidney extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'> 
                    <div>
                        <div className='d-flex justify-content-center mb-5'>
                            <h2>Donating your kidney.</h2>
                            <hr/>
                        </div>
                        <div>
                            <div className='d-flex justify-content-center mb-5'>
                                <img src={img1} alt="" style={{borderRadius: "15px", height: "500px"}} />
                            </div>

                            <p className='text'>
                                Kidneys are the most commonly donated organs by living people, and about a third of all kidney transplants carried out in the Sri Lanka are from 
                                living donors.
                            </p>

                            <p className='text'>
                                In the Sri Lanka living kidney transplants have been performed since 2005 and currently around 1,100 such operations are performed each year, with 
                                a very high success rate. A kidney transplant can transform the life of someone with kidney disease.
                            </p>

                            <div className='d-flex justify-content-center my-5'>
                                <div class="alert alert-danger" role="alert" style={{ width: "400px" }}>
                                    <h4>Interested in becoming a living kidney donor?</h4>

                                    <br/>

                                    <p>Here's what you need to do:</p>

                                    <ol>
                                        <li>Watch the Transplant TV films</li>
                                        <li>Browse the information below to find out more about what is involved</li>
                                        <li>Register your interest using the links provided</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Donatekidney;