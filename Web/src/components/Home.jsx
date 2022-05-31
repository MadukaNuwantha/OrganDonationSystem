import React from 'react';
import './Home.css';
import coverImage from './Image/e5763307295dfd8d7ce63ff8e58146d0.jpg';
import img1 from './Image/Icons/donor.png';
import img2 from './Image/Icons/customer.png';
import img3 from './Image/Icons/share.png';
import img4 from './Image/Icons/organ-donation.png';
import img5 from './Image/Icons/donor (1).png';
import img6 from './Image/Icons/organ-donation (1).png';

class Home extends React.Component {
    render() {
        return (
            <div className='contBoxh'>
                <div className='headerRoundh'>
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className='display-4 text-light'>To the world you may be one person, but to one person you may be the world.</h1>
                            <p className='text-light'>Be an organ DONOR. All it costs is a little LOVE.</p>
                            <a href='/doner/reg' className='button-7'>Sign up to save lives</a>
                        </div>
                        <div className='col-4'>
                            <img src={coverImage} alt='' className='bgImage'/>
                        </div>
                        <br/>
                    </div>
                </div>

                <div className='row py-3'>
                    <div className='col-3'>
                        <h2 style={{ color: "navy", padding: "40% 0% 40% 0%" }} className="">Sign up process</h2>
                    </div>
                    <div className='col-3'>
                        <div className='d-flex justify-content-center' onClick= {() => (window.location.replace("/howdoisignup")) }>
                            <div className='rectangle'>
                                <img src={img1} alt='' width="100" height="100" />
                                <h3 className="text-light py-3">How do I Sign Up</h3>
                            </div>
                        </div>
                    </div> 
                    <div className='col-3'>
                        <div className='d-flex justify-content-center' onClick= {() => (window.location.replace("/whyshouldisignup")) }>
                            <div className='rectangle'>
                                <img src={img2} alt='' width="100" height="100" />
                                <h3 className="text-light py-3">Why should I Sign Up</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='d-flex justify-content-center' onClick= {() => (window.location.replace("/whathappensafterisignin")) }>
                            <div className='rectangle'>
                                <img src={img3} alt='' width="100" height="100" />
                                <h3 className="text-light py-3">What happens after I sign In</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className='col-3'>
                        <h2 style={{ color: "navy", padding: "40% 0% 40% 0%" }}>Learn about Donation</h2>
                    </div>
                    <div className='col-3'>
                        <div className='d-flex justify-content-center' onClick= {() => (window.location.replace("/howdonationsworks")) }>
                            <div className='rectangle'>
                                <img src={img4} alt='' width="100" height="100" />
                                <h3 className="text-light py-3">How Donations Works</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='d-flex justify-content-center' onClick= {() => (window.location.replace("/whocandonate")) }>
                            <div className='rectangle'>
                                <img src={img5} alt='' width="100" height="100" />
                                <h3 className="text-light py-3">Who can donate</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='d-flex justify-content-center' onClick= {() => (window.location.replace("/whatcanbedonated")) }>
                            <div className='rectangle'>
                                <img src={img6} alt='' width="100" height="100" />
                                <h3 className="text-light py-3">What can be donated</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        );
    }
}

export default Home;