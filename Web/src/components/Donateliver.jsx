import React from 'react';
import './common.css';
import img1 from './Image/5c739ed2e1056c0370b6c24f737070e0.jpg';

class Donateliver extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div className='d-flex justify-content-center mb-5'>
                            <h2>Donating part of your liver.</h2>
                            <hr/>
                        </div>
                        <div>
                            <div className='d-flex justify-content-center mb-5'>
                                <img src={img1} alt="" style={{borderRadius: "15px", height: "500px"}} />
                            </div>

                            <p className='text'>
                                Living donor liver transplantation has been successfully performed in the Sri Lanka since 2010.
                            </p>

                            <p className='text'>
                                A liver transplant operation is life saving surgery for patients with end stage liver disease. It is also performed for some patients with 
                                primary liver cancer and children with metabolic diseases (affecting the chemical processes within the body).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Donateliver;