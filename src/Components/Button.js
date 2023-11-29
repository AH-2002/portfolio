
function Button(props){
    return(
        <>
                <div className='hireBtn'>
                    <a style={{textDecoration: "none"}} href={props.href} target={props.targ}>{props.value} <span>{props.icon}</span></a>
                </div>
        </>
    );
}
export default Button;