import React from "react";
import './Articals.css';
import img1 from './Image/organ-transplants-6bad48.jpg';
import img2 from './Image/1559209965.jpeg';

class Articals extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className="bgcx">
                    <div className="mb-4">
                        <div className="d-flex justify-content-center mb-2">
                            <h3><b>Organ Donation and Transplantation</b></h3>
                        </div>
                        <div>
                            <h4>What is organ donation and transplantation?</h4>
                            <p>
                                Organ donation is the process of surgically removing an organ or tissue from one person (the organ donor) 
                                and placing it into another person (the recipient). Transplantation is necessary because the recipient’s 
                                organ has failed or has been damaged by disease or injury.
                            </p>
                            <p>
                                Organ transplantation is one of the great advances in modern medicine. Unfortunately, the need for organ 
                                donors is much greater than the number of people who actually donate. Every day in the United States, 21 
                                people die waiting for an organ and more than 107,380 men, women and children await life-saving organ transplants.
                            </p>
                            <h4>What organs and tissues can be transplanted?</h4>
                            <p>
                                Organs and tissues that can be transplanted include:
                            </p>
                            <div className="d-flex justify-content-center mb-2">
                                <img src={img1} alt="" />
                            </div>
                            <ul>
                                <li>Liver.</li>
                                <li>Kidney.</li>
                                <li>Pancreas.</li>
                                <li>Heart.</li>
                                <li>Lung.</li>
                                <li>Intestine.</li>
                                <li>Corneas.</li>
                                <li>Middle ear.</li>
                                <li>Skin.</li>
                                <li>Bone.</li>
                                <li>Bone marrow.</li>
                                <li>Heart valves.</li>
                                <li>Connective tissue.</li>
                                <li>Vascularized composite allografts (transplant of several structures that may include skin, uterus, bone, muscles, blood vessels, nerves and connective tissue).</li>
                            </ul>
                            <h4>Who can be an organ donor?</h4>
                            <p>
                                People of all ages should consider themselves potential donors. When a person dies, they are evaluated for donor suitability based on their 
                                medical history and age. The organ procurement organization determines medical suitability for donation.
                            </p>
                            <h4>Will organ donation disfigure the body?</h4>
                            <p>
                                The recovery of organs, tissue and eyes is a surgical procedure performed by trained medical professionals. Generally, the family may still have a traditional 
                                funeral service
                            </p>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <div className="d-flex justify-content-center mb-5">
                            <h3>Advertiesments</h3>
                        </div>
                        <div>
                            <div className="card mb-3">
                                <div className="card-body d-flex justify-content-center">
                                    <h4 className="card-title">The Power of Organ Donation to Save Lives Through Transplantation</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Organ and tissue donation is more important than many of us realize—for society and for the individuals it directly affects. Today, 
                                        there are nearly 118,000 individuals waiting for an organ transplant to live healthier, more productive lives (Unpublished data, 
                                        Organ Procurement and Transplantation Network [OPTN], April 2013). For some people with end-stage organ failure, it is truly a 
                                        matter of life and death. Add to these the thousands more whose lives will be improved through tissue and cornea donation and 
                                        transplants that can help them move better, see better, and live better.
                                    </p>
                                    <p className="card-text">
                                        Donation affects more than the donors and recipients. It also affects the families, friends, colleagues, and acquaintances who 
                                        love and support those in need of transplantation, and who benefit from their renewed life and improved health after transplant. 
                                        For my part, I have experienced not once, but twice how donation and transplantation affects individuals.
                                    </p>
                                    <p className="card-text">
                                        Twenty years ago, my wife, Donna Lee Jones, died in a severe automobile accident. Her death was a shock, and my family did not know 
                                        what to make of our tragedy. Then we were offered the opportunity to donate her organs and tissues for transplantation. While it did 
                                        not lessen the pain of her loss, it brought comfort to us knowing that out of our tragedy, some good would come, and others could 
                                        receive the gift of life. Because of her donation, several people received a new lease on life: a man in Tampa, Florida, received 
                                        her heart; a teenage boy in Washington, D.C., received a kidney and pancreas; a hospital custodian received her other kidney; a 
                                        woman in Pennsylvania received her liver; and her corneas went to a young woman in Baltimore, Maryland, and a government worker.
                                    </p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <img src={img2} alt="" className="my-3" style={{width: "600px"}}/>
                                    </div>
                                    <p className="card-text">
                                        Four years later, my 20-year-old daughter, Vikki Lianne, was struck by a car and died. Losing a spouse was tragic enough, but the pain 
                                        of losing a child cannot be expressed. Falling back on our previous experience, we decided to donate Vikki's organs and tissues for 
                                        transplantation. Again, several individuals benefited from her gift: a mother of five children from Upstate New York received her 
                                        heart; a widow with four children received her lung; a 59-year-old man from Washington, D.C., who was active with a local charity, 
                                        received her liver; a widower with one daughter received her kidney; a working father received the other kidney; and her corneas 
                                        went to a 26-year-old man in Florida and a 60-year-old woman in Pennsylvania. And we, her family, took comfort in the idea that 
                                        Vikki's legacy was one of life and giving.
                                    </p>
                                    <p className="card-text">
                                        Organ donation provides a life-giving, life-enhancing opportunity to those who are at the end of the line for hope. And the need for 
                                        organ donors is growing. When Donna Lee died in 1992, there were 27,000 people on the transplant wait list. When Vikki died just 
                                        four years later, that number had grown to 47,000 (Unpublished data, OPTN, January 2010). As of April 5, 2013, there were 117,812 
                                        people waiting, with hope, for an organ to become available (Unpublished data, OPTN, April 2013).
                                    </p>
                                    <p className="card-text">
                                        One way to expand the number of organs available for transplantation is to expand the number of donors, through carefully and safely 
                                        considering individuals who in the past were not included. The guideline in this special issue of Public Health Reports provides a 
                                        scientific, evidence-based process to assure a balance between organ safety and availability for each individual on the transplant 
                                        wait list. As our knowledge and scientific capabilities regarding safety and availability grow and evolve, donors who in the past 
                                        would not have been considered as donors are now able to provide the gift of life to others.
                                    </p>
                                    <p className="card-text">
                                        This guideline will help improve organ transplant outcomes, leading to more individuals being able to live healthier and longer lives. 
                                        The science and evidence are clear and will improve the safety of organs, balanced with a clear and conscious regard for donors and 
                                        recipients. It is the human aspect of donation and transplantation—helping people. It is the right thing to do.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Articals;