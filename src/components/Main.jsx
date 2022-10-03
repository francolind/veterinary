import pidbull from '../assets/pidbull.png';
import '../style/Main.css'


export const Main = () => {
    return(
        <div className="main-conteiner">
            <div className="main-title">
                    <h1 className='title'>First i wanted to be a veterinarian</h1>
                    <p className="main-parf">the best veterinarian in the city, with personalized attention and the best positive comments. 24 hours for emergencies. We accept all cards.</p>
                    <div className='main-button'>
                    <button className='primaty-button'>contact us</button>
                    <button className='secundary-button'>our service</button>
                    </div>
                </div>
                <div>
                     <img src={pidbull} alt="dog" />
                </div>
        </div>
    )
};