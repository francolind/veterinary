import data1 from '../assets/data1.png'
import data2 from '../assets/data2.png'
import data3 from '../assets/data3.png'
import '../style/Data.css'


export const Data = () => {
    return(
        <div className="data-conteiner">
            <div className="data-logos">
            </div>
            <div className='data-img'>
                <img src={data1} alt="" />
                <img src={data2} alt="" />
                <img src={data3} alt="" />
            </div>
        </div>
    )
};