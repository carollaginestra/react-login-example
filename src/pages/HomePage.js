import React, { Component } from 'react';

import Article from "../components/Article";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Article name="React JS"
                    text="Web programming with react js" />
            </div>
        )
    }
}

export default HomePage;
