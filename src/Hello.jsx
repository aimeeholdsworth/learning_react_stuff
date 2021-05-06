const Hello = props => {
    return(
        <h1>Hello, {props.name}</h1>
    );
}


export default Hello;

const PropComp = () =>{
    return(
        <>
            <Hello name="AImee"/>
            <Hello name="Prune"/>
            <Hello name="Kristen"/>
        </>
    );
}


