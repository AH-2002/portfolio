import BackgroundText from './BackgroundText.js';
import ServicesCard from './ServicesCard.js';
import { FaFileExcel } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import powerBi from '../Images/powerBi.png';


import './about.css';
import './services.css';

function Services(){
    return(
        <div className="services" id='services'>
            <div className='container'>
                <BackgroundText value1="What I Do?" value2="SERVICES"/>
                <div className='services-info'>
                    <div className='row justify-content-between'>
                    
                        <ServicesCard icon={<FaFileExcel/>} value="Excel"/>
                        <ServicesCard icon={<FaDatabase/>} value="SQL"/>
                        <ServicesCard icon={<FaPython/>} value="Python"/>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card text-center">
                                <div className="icon">
                                    <img src={powerBi}/>
                                </div>
                            <div className="info">
                                <h3>PowerBi</h3>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Services;