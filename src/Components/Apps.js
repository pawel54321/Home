import React, { Component } from 'react';

//import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import TEB_S from '../Images/The_Escaping_Balls_-_Screenshot.jpg';
import RK_S from '../Images/Równanie_Kwadratowe_-_Screenshot.jpg';

import { strings } from '../App'

class Apps extends Component {
    
    render() {
        return (
            <div style={{ float: 'left' }}>
                <h4 style={{ paddingLeft: '30px', paddingTop: '30px' }}>{strings.heading_Apps}</h4>
                <CardDeck style={{ paddingTop: '30px', float: 'left' }}>
                
                    <Card className="Card">
                        <iframe width="100%" height="63%" src="https://www.youtube.com/embed/uXwikvBAanY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                      
                    <CardBody>
                        <CardTitle>'Candy Gift'</CardTitle>
                        <CardSubtitle>Android</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://play.google.com/store/apps/details?id=com.pawelwarcaba.candygift">{strings.button_read_more}</Button>              
                    </CardBody>
                </Card>
                <Card className="Card">
                        <CardImg top width="100%" src={TEB_S} alt="Image" />
                    <CardBody>
                        <CardTitle>'The Escaping Balls'</CardTitle>
                        <CardSubtitle>Desktop | Multiplayer</CardSubtitle>
                        <CardText></CardText>
                            <Button color="success" href="https://github.com/pawel54321/Game---The-Escaping-Balls---Multiplayer">{strings.button_read_more}</Button>
                    </CardBody>
                </Card>
                    <Card className="Card">
                        <CardImg top width="100%" height="63%" src={RK_S} alt="Image" />
                    <CardBody>
                        <CardTitle>'Równanie Kwadratowe'</CardTitle>
                        <CardSubtitle>Android</CardSubtitle>
                        <CardText></CardText>
                            <Button color="success" href="https://play.google.com/store/apps/details?id=com.pawelwarcaba.rownaniekwadratowe">{strings.button_read_more}</Button>
                    </CardBody>
                </Card>
                </CardDeck>
            </div>
            );
    }
}


export default Apps;
