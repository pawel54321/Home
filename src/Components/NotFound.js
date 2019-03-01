import React, { Component } from 'react';

import { strings } from '../App';

class NotFound extends Component {

    render() {
        return (

            <div>
                <center>
                    <h2>Not Found</h2>
                    {strings.subtitle_NotFound}
                </center>    
            </div>

        );
    }
}


export default NotFound;
