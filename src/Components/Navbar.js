import "./Navbar.css";
import PersonalImg from './Personalimg.js';
import Navlinks from './Navlinks';
function Navbar(){

    
    return (
        <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <div className="Portfolio-Info">
        <PersonalImg/>
        <div className="PerName">
            <h2>Abdelrahman Hamada</h2>
        </div>
      </div>
        <ul className="navbar-nav justify-content-center flex-grow-1">
          <Navlinks/>
        </ul>
        
                </div>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;