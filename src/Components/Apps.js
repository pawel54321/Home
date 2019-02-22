import React, { Component } from 'react';

//import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';


class Apps extends Component {

    render() {
        return (
            <div style={{ float: 'left' }}>
                <h4 style={{ paddingLeft: '30px', paddingTop: '30px'}}>Apps</h4>
                <CardDeck style={{ padding: '30px', paddingBottom:'0px', float: 'left' }}>
                
                <Card className="Card">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Candy Gift</CardTitle>
                        <CardSubtitle>Android</CardSubtitle>
                        <CardText></CardText>
                        <Button color="success">Read More</Button>
                    </CardBody>
                </Card>
                <Card className="Card">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>The Escaping Balls</CardTitle>
                        <CardSubtitle>Desktop | Multiplayer</CardSubtitle>
                        <CardText></CardText>
                        <Button color="success">Read More</Button>
                    </CardBody>
                </Card>
                <Card className="Card">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Równanie Kwadratowe</CardTitle>
                        <CardSubtitle>Android</CardSubtitle>
                        <CardText></CardText>
                        <Button color="success">Read More</Button>
                    </CardBody>
                </Card>
                </CardDeck>
            </div>
            );
    }
}


export default Apps;
