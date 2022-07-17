import React, { Component } from 'react';

class Test extends Component {

    componentDidMount() {
        window.myCookie();
    }

    render() {
        return (
            <div>
                <h4 style={{ paddingLeft: '30px', paddingTop: '30px' }}>Test</h4><br/>
                <center><div id="gameContainer" style={{ width: '960px', height: '600px' }}></div></center><br />
            </div>
        );
    }
}


export default Test;
