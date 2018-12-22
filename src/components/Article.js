import React from 'react';

import Content from './Content';

const Article = (props) => {
    return (
        <div>
            <Content name={props.name} text={props.text} />
        </div>
    );
}

export default Article;
