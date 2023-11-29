function CategoryBtn(props){
    return(
        <>
        <button class="category-button" onClick={props.filter}>{props.value}</button>
        </>
    );
}
export default CategoryBtn