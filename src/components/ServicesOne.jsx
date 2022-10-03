import video from '../assets/video.png'
import orange from '../assets/orange.png'
import '../style/ServiceOne.css'


export const ServicesOne = () => {
    return (
      <div className="service-one-conteiner">
        <div className="service-title">
          <h2 className='titletwo'>as a veterinarian and lover of animals.</h2>
          <p className='service-p'>
            we love all animals. and we show them the best care. safe
            treatments, and with the best care.
          </p>
          <button className='button-orange'>our service</button>
        </div>
        <div className="service-video">
          <img className="dog" src={video} alt="dog" />

          <img className="back" src={orange} alt="" />
        </div>
      </div>
    );
};