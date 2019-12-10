import React, { Component } from 'react';

//import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
import {
    Card, /*Button, CardImg,*/ CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import { SocialIcon } from 'react-social-icons';

import { strings } from '../App'

class SocialMedia extends Component {

    render() {
        return (
            <div style={{ clear: 'both' }}>
                <h4 style={{ paddingLeft: '30px', paddingTop: '30px' }}>{strings.heading_SocialMedia}</h4>
              
            <CardDeck style={{ padding: '30px', float: 'middle' }}>
                    <Card className="Card">
                        <center><SocialIcon style={{ marginTop: '25px', height: 100, width: 100 }} url="https://play.google.com/store/apps/developer?id=Pawel+Warcaba" /></center>
                        {/*<CardImg top width="100%" src="" alt="Image" />*/}
                    <CardBody>
                            <CardTitle><div style={{whiteSpace: 'nowrap'}}>Google Play</div></CardTitle>
                            <CardSubtitle>{strings.type_subtitle_1}</CardSubtitle>
                        <CardText></CardText>
                            {/*   <Button color="success" href="https://play.google.com/store/apps/developer?id=Pawel+Warcaba">Read More</Button>*/}
                    </CardBody>
                </Card>
                    <Card className="Card">
                        <center><SocialIcon style={{ marginTop: '25px', height: 100, width: 100 }} url="https://www.youtube.com/channel/UCEMiuxoZuphxWj7eDqh4hBA" /></center>
                        {/*<CardImg top width="100%" src="" alt="Image" />*/}
                    <CardBody>
                        <CardTitle>YouTube</CardTitle>
                            <CardSubtitle>{strings.type_subtitle_2}</CardSubtitle>
                        <CardText></CardText>
                            {/*  <Button color="success" href="https://www.youtube.com/channel/UCEMiuxoZuphxWj7eDqh4hBA">Read More</Button>*/}
                    </CardBody>
                </Card>
                <Card className="Card">
                        <center><SocialIcon style={{ marginTop: '25px', height: 100, width: 100 }} url="https://github.com/pawel54321?tab=repositories" /></center>
                        {/*<CardImg top width="100%" src="" alt="Image" />*/}
                    <CardBody>
                        <CardTitle>GitHub</CardTitle>
                            <CardSubtitle>{strings.type_subtitle_3}</CardSubtitle>
                        <CardText></CardText>
                            {/* <Button color="success" href="https://github.com/pawel54321?tab=repositories">Read More</Button>*/}
                    </CardBody>
                </Card>
                    </CardDeck>
                   
            </div>
        
        );
    }
}


export default SocialMedia;
