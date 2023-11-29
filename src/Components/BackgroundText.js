function BackgroundText(props){
    return(
        <>
        <div className="back-h2">
            <h2>
                {props.value1}
             </h2>
             <span className='t-24'>{props.value2}</span>
        </div>
        
        
        </>
    );
}
export default BackgroundText;