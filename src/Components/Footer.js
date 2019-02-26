import React, { Component } from 'react';

import { strings } from '../App';

class Footer extends Component {

    render() {
        return (
            <footer>
                {strings.datetime}
            </footer>
            );
    }

}

export default Footer;