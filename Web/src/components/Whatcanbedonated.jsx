import React from "react";
import './common.css';

class Whatcanbedonated extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='bgs'>
                    <div>
                        <div>
                            <div className='d-flex justify-content-center mb-5'>
                                <h2>What can be donated</h2>
                                <hr/>
                            </div>

                            <div>
                                <h4 className='mt-5 mb-3'></h4>

                                <p className='text mb-5'>
                                    The list of organs and tissues that you can donate continues to grow. You can save up to eight lives and improve over 75 more.
                                </p>

                                <div className="accordion mb-5" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Organs
                                        </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="mt-2 mb-3">Most often, you donate organs once you’ve died. You can donate some organs while you’re alive.</p>
                                                
                                                <strong className="my-2">What organs can I donate after I die?</strong>
                                                <ul>
                                                    <li>Kidneys (2)</li>
                                                    <li>Liver</li>
                                                    <li>Lungs (2)</li>
                                                    <li>Heart</li>
                                                    <li>Pancreas</li>
                                                    <li>Intestines</li>
                                                    <li>Hands and Face</li>
                                                </ul>
                                                <p className="mt-2 mb-3">Get answers to your questions about donating after death.</p>

                                                <strong className="my-2">What organs can I donate while I’m alive?</strong>
                                                <ul>
                                                    <li>One kidney</li>
                                                    <li>One lung</li>
                                                    <li>A part of the liver</li>
                                                    <li>A part of the pancreas</li>
                                                    <li>A part of the intestine</li>
                                                </ul>
                                                <p className="mt-2 mb-3">Get answers to your questions about donating while you’re alive.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Corneas
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="mt-2 mb-3">You can donate your corneas when you sign up as an organ, eye, and tissue donor. This lets you leave behind the gift of sight.</p>
                                                
                                                <ul>
                                                    <li>In 2018, doctors performed over 85,000 corneal transplants.</li>
                                                    <li>The cornea is the clear part of the eye over the iris and pupil. Damaged corneas can result from eye disease, injury, or birth defects.</li>
                                                    <li>More than 97% of all corneal transplants restore the receiving patient’s vision.</li>
                                                    <li>Corneal donors don't have to "match" receiving patients like organ donors do. Donors are universal. Age, eye color, and the quality of your eyesight don’t matter.</li>
                                                    <li>Doctors can remove and store corneas several hours after death. They can do the corneal transplant three to five days after donation.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Tissue
                                        </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="mt-2 mb-3">Donated tissues enhance the quality of life for the people who receive them. Each year, about 30,000 donors provide tissue.</p>
                                                <p className="mt-2 mb-3">The hospital, medical examiner, or funeral home notifies the local tissue bank. The American Association of Tissue Banks can help you understand tissue banks better.</p>
                                                <p className="mt-2 mb-3">Doctors must take out the tissue within 24 hours after death. But tissue banks can store the tissue for a long time.</p>

                                                <strong className="my-2">What can tissue banks store?</strong>

                                                <ul>
                                                    <li>Corneas</li>
                                                    <li>The middle ear</li>
                                                    <li>Skin</li>
                                                    <li>Heart valves</li>
                                                    <li>Bone</li>
                                                    <li>Veins</li>
                                                    <li>Cartilage</li>
                                                    <li>Tendons</li>
                                                    <li>Ligaments</li>
                                                </ul>

                                                <p className="mt-2 mb-3">Doctors use these to restore sight, cover burns, repair hearts, replace veins, and mend damaged connective tissue and cartilage.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Hands and Face
                                        </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="mt-2 mb-3">These are difficult surgeries. They call them vascularized composite allograft (VCA) organ transplants.</p>

                                                <p className="mt-2 mb-3">Doctors move (“graft”) tissue. This can include bone, muscle, nerves, skin, and blood vessels.</p>
                                                
                                                <ul>
                                                    <li>2005: First hand transplant</li>
                                                    <li>2007: First face transplant</li>
                                                </ul>
                                                <p className="mt-2 mb-3">Anti-rejection drugs help the people who receive them to keep the transplants.</p>

                                                <p className="mt-2 mb-3">As of January 2018, there have been fewer than 200 VCA organ transplants around the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Blood Stem Cells, Cord Blood and Bone Marrow
                                        </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="mt-2 mb-3">If you’re healthy and between age 18 and 60, you can donate blood stem cells.</p>

                                                <p className="mt-2 mb-3">It’s best when the donor and the receiving patient’s tissue type or human leukocyte antigen (HLA) match.</p>

                                                <p className="mt-2 mb-3">It’s easier to find a match in the same family or in the same racial or ethnic group.</p>
                                                
                                                <strong className="my-2">What are the three sources of blood stem cells?</strong>

                                                <ul>
                                                    <li><code>Bone marrow:</code> This soft tissue is inside your bones. It produces many blood cells. Doctors remove it to get stem cells.</li>
                                                    <li><code>Cord blood stem cells:</code> The blood in the cord that connects a newborn to the mother during pregnancy has high levels of blood stem cells. Doctors can collect and store these in freezers for a long time.</li>
                                                    <li><code>Peripheral blood stem cells:</code> You can get daily injections of a drug called filgrastim. The drug increases the number of stem cells in the blood. It helps push out the same types of stem cells found in marrow. Doctors can collect this in the same way as when you donate blood.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Blood and Platelets
                                        </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="mt-2 mb-3">Your body makes blood and platelets. You replace these repeatedly throughout your life. This means that you can donate blood and platelets more than once.</p>
                                                <p className="mt-2 mb-3">It’s safe to donate blood every 56 days and platelets every four weeks.</p>

                                                <strong className="my-2">How do they store blood?</strong>

                                                <p className="mt-2 mb-3">Blood banks store blood by type (A, B, AB, or O) and Rh factor (positive or negative).</p>

                                                <strong className="my-2">How do doctors use blood?</strong>

                                                <p className="mt-2 mb-3">Blood had different lifesaving uses. Doctors can use it whole or they can separate it into packed red cells, plasma, and platelets.</p>

                                                <strong className="my-2">How long does it take to donate blood?</strong>

                                                <p className="mt-2 mb-3">It only takes about 10 minutes to collect one pint of blood. The entire process takes about an hour because they need to test and screen your blood.</p>

                                                <strong className="my-2">What are platelets?</strong>

                                                <p className="mt-2 mb-3">Platelets are tiny parts of cells. They move around in the blood and help blood clot.</p>

                                                <strong className="my-2">How can I donate platelets?</strong>

                                                <p className="mt-2 mb-3">You can donate platelets without donating blood. A patient may need platelets but not blood.</p>
                                                <p className="mt-2 mb-3">Doctors separate platelets from the rest of the blood. Then they return the blood to you. Your body will replace the missing platelets in a few hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Whatcanbedonated;