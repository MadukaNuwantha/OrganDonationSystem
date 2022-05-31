import React from 'react';
import './common.css';
import img1 from './Image/5ead611c775013709c7fe1db529f074ef8376407.jpg';
import img2 from './Image/42c756d72f4b0a00cb18e0b7f277fb1f3016e5a2.jpg';

class Campaigns extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'> 
                    <div>
                        <div className='d-flex justify-content-center mb-5'>
                            <h2>Organ donation campaigns.</h2>
                        </div>
                        <div>
                            <h3>Talk to your loved ones.</h3>
                            <hr width="300px"/>

                            <img src={img1} className="my-3 mx-5" style={{ borderRadius: "15px" }} alt="" />

                            <h4>Your family can overturn your decision</h4>

                            <br/>

                            <p className='text'>Each year, hundreds of opportunities for transplants are missed because families aren't sure what to do.</p>

                            <p className='text'>
                                Your family will always be consulted about whether you wanted to be an organ donor or not, and clinicians will never 
                                proceed with organ donation if your family or loved ones object.
                            </p>

                            <h4 className='mb-4 mt-5'>Leave them certain</h4>
                            
                            <h5>If you want to donate</h5>

                            <p className='text'>
                                If you want to be an organ donor after you die, it's really important that you talk to your loved ones and make sure 
                                they understand and support your organ donation decision. You can also register your decision on the NHS Organ Donor Register.
                            </p>

                            <h5>If you don't want to donate</h5>

                            <p className='text'>
                                If you decide not to become an organ donor, you can still help your family through a difficult time by talking to 
                                them about your organ donation decision now, and making sure they know what you want. You can also register your decision on the NHS 
                                Organ Donor Register.
                            </p>
                        </div>
                        <div>
                            <h3 className='mt-5'>Are you under 18?</h3>
                            <hr width="300px"/>

                            <img src={img2} className="my-3 mx-5" style={{ borderRadius: "15px" }} alt="" />

                            <h4>There are a lot of things you wouldn't let your family choose, so why leave them to make an organ donation decision for you?</h4>

                            <br/>

                            <p className='text'>This page explains how the opt out system works and what you need to do if you are under 18.</p>
                            
                            <h5 className='mt-4'>Talk to your loved ones</h5>

                            <p className='text'>
                                Your family will always be involved if organ donation is a possibility.
                            </p>

                            <p className='text'>
                                If they don't know your organ donation decision, they could be left to make a decision on your behalf. 
                            </p>

                            <p className='text'>
                                By registering your decision on the NHS Organ Donor Register and talking to your loved ones, you can leave them certain about what you want. 
                            </p>

                            <h5 className='mt-4'>Don't just think your decision. Own it. </h5>

                            <p className='text'>
                                A big thank you to everyone who has recorded their organ donation decision so far.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Campaigns;