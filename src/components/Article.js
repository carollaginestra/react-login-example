import React from 'react';

import Welcome from './Welcome';
import Content from './Content';

const Article = (props) => {
    return (
        <div>
            <Welcome name={props.name} />
            <Content text={props.text} />
        </div>
    );
}

export default Article;
