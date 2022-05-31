import React from "react";
import './common.css';

class Whocandonate extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div>
                            <div className='d-flex justify-content-center mb-5'>
                                <h2>Who Can Donate</h2>
                                <hr/>
                            </div>

                            <div>
                                <p className='text'>
                                    All people should consider themselves potential organ, eye, and tissue donors. Your age, race, ethnicity, religion, or health (in most cases) 
                                    do not matter.
                                </p>

                                <h4 className='mt-5 mb-3'>Is There an Age Limit for Organ Donation?</h4>

                                <p className='text'>
                                    You can donate at any age. The health of your organs is more important than your age.
                                </p>

                                <h4 className='mt-5 mb-3'><h4 className='mt-5 mb-3'>Religion & Organ Donation</h4>

                                <p className='text'>
                                    Many religions support organ donation. Speak with your faith leader for more information.
                                </p></h4>

                                <h4 className='mt-5 mb-3'>Organ Donation and Children</h4>

                                <p className='text'>
                                    Important facts about teen, child, and infant donation.
                                </p>

                                <h4 className='mt-5 mb-3'>Who Can Sign Up as a Donor</h4>

                                <p className='text'>
                                    Because so few people who sign up can actually become donors, we encourage everyone to sign up now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whocandonate;