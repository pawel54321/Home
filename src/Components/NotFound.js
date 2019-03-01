import React, { Component } from 'react';

import { strings } from '../App';

class NotFound extends Component {

    render() {
        return (

            <div className="NotFoundClass">
                <center>
                    <h2>Not Found</h2>
                    {strings.subtitle_NotFound}
                    <br /><br /><br /><br />
                </center>    
            </div>

        );
    }
}


export default NotFound;
