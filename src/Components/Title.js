import React from 'react';

function Title({title}) {
    return (
        <React.Fragment>
        <div className="section-title">
            <h1>{title}</h1>
            <div></div>
        </div>
        </React.Fragment>
    )
}

export default Title;
 