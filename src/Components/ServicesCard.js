function ServicesCard(props){
    return(
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card text-center">
            <div className="icon">
            <i>{props.icon}</i>
            </div>
            <div className="info">
                <h3>{props.value}</h3>
            </div>
        </div>
        </div>
    );
}
export default ServicesCard;