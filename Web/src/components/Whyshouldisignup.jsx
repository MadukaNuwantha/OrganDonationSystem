import React from "react";
import './common.css';

class Whyshouldisignup extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div>
                            <div>
                                <div className='d-flex justify-content-center mb-5 mt-5'>
                                    <h2>Why should I sign up?</h2>
                                    <hr/>
                                </div>

                                <p className='text'>
                                    The number of patients waiting for organs changes every day. As of February 2021, the number of patients on the national transplant 
                                    waiting list was more than 107,000. Every nine minutes, another person is added to the list.
                                </p>

                                <p className='text'>
                                    The number of patients who need a lifesaving transplant goes up faster than the number of available organs.
                                </p>

                                <h4 className='mt-5 mb-3'>How can I make a difference by signing up?</h4>

                                <p className='text'>
                                    Signing up to be an organ donor means you may someday be able to help others in need. Just one donor can provide lifesaving organs to up to 
                                    eight people. One donor may also impact the lives of others with tissue donation.
                                </p>

                                <p className='text'>
                                    Not everyone who signs up as a donor is able to donate. In fact, only three in 1,000 people die in a way that allows for organ donation after death.
                                </p>

                                <h4 className='mt-5 mb-3'>Why should minorities sign up as organ donors?</h4>

                                <p className='text'>
                                    More than half of all people on the transplant waiting list are from a minority group. Some diseases that cause end-stage organ failure are 
                                    more common in these groups of people.
                                </p>

                                <p className='text'>
                                    An organ transplant is sometimes the best—or only—option for saving a life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whyshouldisignup;