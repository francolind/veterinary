import vet1 from '../assets/vet1.png';
import vet2 from '../assets/vet2.png';
import vet3 from '../assets/vet3.png';
import '../style/ServicesTwo.css'


export const ServicesTwo = () => {
    return(

        <div className="services-two-conteiner">
             <div className="services-title">
                    <h2>our best services</h2>
                    <p>We have a wide range of services, with the best experience</p>
                </div>
            <div className='container-card'>
                <div className='card'>
                    <img src={vet1} alt="" />
                    <p>Vaccination care</p>
                </div>
                <div className='card'>
                    <img src={vet2} alt="" />
                    <p>Dental care</p>
                </div>
                <div className='card'>
                    <img src={vet3} alt="" />
                    <p>Veterinarian</p>
                </div>
                
            </div>
        
    </div>
       

       
    )
};