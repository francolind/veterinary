import '../style/Footer.css'
import send from '../assets/send.png'
import insta from '../assets/insta.png'
import face from '../assets/face.png'
import twi from '../assets/twi.png'
import what from '../assets/what.png'

export const Footer = () => {
    return(
        <div className="footer-conteiner">
            <div className="footer-about">  
                    <h2>about</h2>
                    <p>history</p>  
                    <p>uor team</p>  
                    <p>brand guidelines</p>  
                    <p>terms and condition</p>  
                    <p>privacy policy</p>  
            </div>
            <div className="footer-services">  
                    <h2>services</h2>
                    <p>how to order</p>  
                    <p>our product</p>  
                    <p>order status</p>  
                    <p>promo</p>  
                    <p>payment Method</p>  
            </div>
            <div className='footer-social'>
                <h2>Contact Us</h2>
                <p>We have opened our door and are now letting clients in for appointment.</p>
                <img className='send' src={send} alt="" />
                <div className='social-media'>
                    <img src={insta} alt="" />
                    <img src={face} alt="" />
                    <img src={twi} alt="" />
                    <img src={what} alt="" />
                </div>
            </div>
            
        </div>
    )
};