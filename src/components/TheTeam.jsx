import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twiter from '../assets/twiter.png';
import whatsapp from '../assets/whatsapp.png';
import '../style/TheTeam.css'


export const TheTeam = () => {
    return(
        <div className="team-conteiner">
            <div className="team-title">
                <h2>the vetcare team</h2>
                <p>Hello animal lovers!  Here at Spaick, we enjoy caring for wide range of animals; cats, dogs, reptiles, small mammals, and exotics.  Our highly skilled staff is ready to take care of your loved ones.  We devote our time to you and your pets, and with open arms we welcome you to Spaick.</p>
                </div>
            <div className='container-card'>
                <div className='card'>
                    <img src={team1} alt="" />
                    <h3>Jennfer Mullen</h3>
                    <h4>Veterinary</h4>
                    <div className='social-media'>
                    <img src={instagram}/>
                    <img src={facebook}/>
                    <img src={twiter}/>
                    <img src={whatsapp}/>
                    </div>
                    
                </div>
                <div className='card'>
                    <img src={team2} alt="" />
                    <h3>Sheeren Collins</h3>
                    <h4>Administracion</h4>
                    <div className='social-media'>
                    <img src={instagram}/>
                    <img src={facebook}/>
                    <img src={twiter}/>
                    <img src={whatsapp}/>
                    </div>
                </div>
                <div className='card'>
                    <img src={team3} alt="" />
                    <h3>Camila Mullen</h3>
                    <h4>Veterinary</h4>
                    <div className='social-media'>
                    <img src={instagram}/>
                    <img src={facebook}/>
                    <img src={twiter}/>
                    <img src={whatsapp}/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};