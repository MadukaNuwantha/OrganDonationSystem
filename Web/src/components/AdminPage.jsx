import React from 'react';
import './AdminPage.css';
import image1 from './Image/Icons/donor (1).png';
import image2 from './Image/Icons/d06e8f7d48292df2b979220eafeb1fb4.png';
import image5 from './Image/Icons/organ-donation (2).png';

class AdminPage extends React.Component {
    async logout(){
        sessionStorage.setItem('userID', "");
        sessionStorage.setItem('userName', "");
        sessionStorage.setItem('type', "");
        this.navigateHome();
    }

    async navigateHome(){
        window.location.replace("/");
    }
    
    render() {
        return (
          <div>
            <div className='container'>
                <div className='bgcc'>
                    <div className='row py-3'>
                        <div className='col-6'>
                            <a href='/doner/reg'>
                                <div className='d-flex justify-content-center'>
                                    <div className='rectangle'>
                                        <img src={image1} alt='' width="100" height="100" />
                                        <h3 className="py-3">Register Donors</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='col-6'>
                            <a href='/patient/reg'>
                                <div className='d-flex justify-content-center'>
                                    <div className='rectangle'>
                                        <img src={image2} alt='' width="100" height="100" />
                                        <h3 className="py-3">Register Patient</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='row py-1'>
                        <div className='col-6'>
                            <a href='/availableorgans/reg'>
                                <div className='d-flex justify-content-center'>
                                    <div className='rectangle'>
                                        <img src={image5} alt='' width="100" height="100" />
                                        <h3 className="py-3">Update Orgon Details</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type='button' onClick={ () => this.logout() } className='btn float'><i className="bi bi-box-arrow-right h4"></i></button>
            </div>
        </div>
        );
    }
}

export default AdminPage;