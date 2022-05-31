import React from "react";
import './common.css';

class Whathappensafterisignin extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div>
                            <div>
                                <div className='d-flex justify-content-center mb-5 mt-5'>
                                    <h2>What happens after I sign In</h2>
                                    <hr/>
                                </div>

                                <h4 className='mt-5 mb-3'>Share Your Decision with Family</h4>

                                <p className='text'>
                                    Signing up to be an organ donor is the first step in making your decision known. After you sign up, let the people closest to you know. 
                                    You may save them from having to make the decision at a difficult time.
                                </p>

                                <h4 className='mt-5 mb-3'>Encourage Others and Spread the Word</h4>

                                <p className='text'>
                                    You may want to share your decision with your friends and your community. This may encourage them to sign up as a donor.
                                </p>

                                <p className='text'>
                                    You can also get involved with other groups by joining donation awareness efforts.
                                </p>

                                <h4 className='mt-5 mb-3'>Update Your Donor Information </h4>

                                <p className='text'>
                                    Your state donor registry allows you to sign up and to change your information. Many states allow you to choose which organs and tissues you 
                                    want to donate. In other states, registered donors donate everything that can be used.
                                </p>

                                <p className='text'>
                                    Make sure your organ donor information is up to date if your address changes. You can change your donor information on your state's site.
                                </p>

                                <p className='text'>
                                    Now that you’ve taken the first step and signed up as a donor, take time to learn more about the donation process after death.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whathappensafterisignin;