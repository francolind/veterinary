import can1 from '../assets/can1.png'
import can2 from '../assets/can2.png'
import can3 from '../assets/can3.png'
import '../style/OurServices.css'


export const OurServices = () => {
    return(
        <div className="our-services-conteiner">
            <div className="services-title">
                <h2>Services</h2>
                <p>If you have any questions about the services we offer or would like to inquire about additional treatment options, please contact us at your earliest convenience.</p>
                </div>
            <div>
                <div className='content-card'>
                <div className='card'>
                    <img src={can1} alt="" />
                    <h3>GENERAL MEDICINE</h3>
                    <p>Diagnostic Imaging<br/>
                        Euthanasia<br/>
                        Emergency and Urgent Care<br/>
                        Exotic Medicine<br/>
                        Laboratory Testing<br/>
                        Laser Therapy<br/></p>
                    <button className='primaty-button'>I need it</button>
                </div>
                <div className='card'>
                    <img src={can2} alt="" />
                    <h3>PREVENTATIVE CARE</h3>
                    <p>Our Pet Pharmacy<br/>
                        Deworming<br/>
                        Dental Services<br/>
                        Heartworms<br/>
                        Pet Vaccinations<br/>
                        Pet Wellness Exams<br/></p>
                    <button className='primaty-button'>I need it</button>
                </div>
                <div className='card'>
                    <img src={can3} alt="" />
                    <h3>SURGICAL PROCEDURES</h3>
                    <p>Laser Surgery<br/>
                        Spay and Neuter<br/>
                        Soft Tissue Surgery<br/>
                        Reconstructive and <br/>Cosmetic Surgery<br/>
                        Cesarean Section c-Section<br/>
                        </p>
                    <button className='primaty-button'>I need it</button>
                </div>
                </div>
            </div>
            
        </div>
    )
};