function FollowLinks(props){
    return(
        <>
        <a href={props.href} className={props.class} target={props.target}>{props.icon}
        <p className="icon-hover">{props.hover}</p>
        </a>
        </>
    );
}
export default FollowLinks;