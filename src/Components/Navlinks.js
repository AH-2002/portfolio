function NavLinks(props){
    return(
        <>
        <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link active" onClick={props.fun} aria-current="page" href="#main">Home</a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link"  href="#about">About</a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link" onClick={props.fun} href="#services">What I Do</a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link" onClick={props.fun} href="#resume">Resume</a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link" onClick={props.fun} href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link" onClick={props.fun} href="#contact">Contact</a>
          </li>
          </>
    );

}
export default NavLinks;