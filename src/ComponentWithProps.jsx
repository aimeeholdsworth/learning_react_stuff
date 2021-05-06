import './App.js';

import PropTypes from 'prop-types';

const ComponentWithProps = props =>{
    return(
        <>
            <h1>{props.headerProp}</h1>
            <p>{props.contentProp}</p>
            <p>Your number: {props.numberProp}</p>
        </>
    );
}

export default ComponentWithProps;

ComponentWithProps.defaultProps ={
    headerProp:'Hi this is the defeault headin!',
    contentProp:'CONTENT X1000!!',
    numberProp:15


}


ComponentWithProps.propTypes = {
    headerProp: PropTypes.string.isRequired,
    contentProp: PropTypes.string.isRequired,
    numberProp: PropTypes.number
}

