import React from 'react';

import Welcome from './Welcome';
import Content from './Content';

const Article = (props) => {
    return (
        <div>
            <Welcome nome={props.name} />
            <Content texto={props.text} />
        </div>
    );
}

export default Article;
