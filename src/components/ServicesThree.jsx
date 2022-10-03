import video2 from '../assets/video2.png';
import orange from '../assets/orange.png'
import '../style/ServicesThree.css'

export const ServicesThree = () => {
    return(
        <div className="services-three-conteiner">
        <div className="services-video">
            <img src={video2}></img>
            <img className="service-back" src={orange} alt="" />
            </div>
        <div className='container-sev'>
            <h2>Our Passion. Our Profession.</h2>
            <p>Empowering veterinarians to thrive in the profession we all love.</p>
            <button className='button-orange'>our service</button>
        </div>
        
    </div>
    )
};