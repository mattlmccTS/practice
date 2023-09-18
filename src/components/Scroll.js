import React from 'react';
// at this point we have learned about props and state
// now we will use children 
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '10px solid black', height: '500px'}}> 
        {props.children}
        </div>
    )
};
    
;

export default Scroll