import './about.css';
import Button from './Button.js';
import CV from '../CV.pdf';
import BackgroundText from './BackgroundText';
import { FaArrowCircleDown } from "react-icons/fa";
function About(){
    
    return(
        <div className="about-me bg-dark" id='about'>
            
            <div className='container'>
                <BackgroundText value1="More About Me" value2="ABOUT ME"/>
            <div className='about-info text-light'>
                <div className='row justify-content-between'>
                    <div className='col-lg-8 col-sm-12 mb-3'>
                        <div className='personal-info'>
                            <h3 className='text-7 mb-4 fw-600'>I'm <span>Abdelrahman Hamada</span>, a Data Analyst.</h3>
                            <p className='text-white-50'>I'm a dedicated Data Analyst with a passion for unraveling the stories hidden within
                            raw data. Armed with a robust toolkit that includes SQL, Python, Power BI, and Excel,
                            I embark on a journey of exploration and analysis to transform complex datasets into meaningful insights.
                            My expertise lies in getting insights from data, deciphering patterns and trends, ensuring that every project I tackle
                            benefits from a data-driven approach.
                            </p>
                            <p className='text-white-50'>
                            Join me as I navigate the world of analytics, armed with curiosity, technical prowess,
                            and a commitment to translating numbers into actionable strategies.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-12'>
                        <div className='InfoCategories'>
                            <h4>Name: <span>Abdelrahman Hamada</span></h4>
                            <h4>Email: <a href='mailto:xabdo608@gmail.com'>xabdo608@gmail.com</a></h4>
                            <h4>Education: <span>Faculty of Computers and Artificial Intelligence 2019-2023,<br/>Cairo University</span></h4>
                            <h4>Age: <span>21</span></h4>
                            <h4>From: <span>Cairo, Egypt.</span></h4>
                        </div>
                            <div className='cvBtn'>
                            <Button href={CV} value="Download CV" targ="_blank" icon={<FaArrowCircleDown/>}/>
                            </div>
                            
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}
export default About;