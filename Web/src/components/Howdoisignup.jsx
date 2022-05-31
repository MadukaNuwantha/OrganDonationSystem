import React from "react";
import './common.css';

class Howdoisignup extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div>
                            <div className='d-flex justify-content-center mb-5'>
                                <h2>How To Sign Up</h2>
                                <hr/>
                            </div>

                            <div>
                                <h4 className='mt-5 mb-3'>What’s the organ donation process?</h4>

                                <p className='text'>
                                    Signing up as an organ donor happens through your state. Anyone over the age of 18 can sign up, and in some states, 
                                    people younger than 18 (ages 15-17) can sign up.  
                                    <br/>
                                    There are three ways to sign up: <br />

                                    <ul>
                                        <li>Sign up online now in your state. You may need your driver’s license/ID number to fill out a form.</li>
                                        <li>Visit your state local motor vehicle office.</li>
                                        <li>Sign up through the Health app on your iPhone. Your information is sent to a national computer system.</li>
                                    </ul>

                                    Signing up as an organ donor through your state is the first step in the donation process.
                                </p>

                                <h4 className='mt-5 mb-3'>How do I give permission to donate?</h4>

                                <p className='text'>
                                    When you die, or are near death, the hospital will contact the local Organ Procurement Organization (OPO). 
                                    The OPO will search your state registry to see if you signed up as a donor. If so, that serves as legal consent for donation.
                                </p>

                                <p className='text'>
                                    The OPO will tell your next of kin (family) whether you signed up and then ask for permission to proceed. It is important to 
                                    share your decision to sign up with your family, so they may carry out your wishes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Howdoisignup;