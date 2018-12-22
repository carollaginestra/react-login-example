import React from 'react';

const Content = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>

            <p>{props.text}</p>
        </div>
    );
}

export default Content;
