import React, { Component } from 'react';

//import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
import {
    Card, Button,/*CardImg,*/ CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import TEB_S from '../Images/The_Escaping_Balls_-_Screenshot.jpg';
import TEB_S_2 from '../Images/The_Escaping_Balls_-_Screenshot_2.jpg';
import TEB_S_3 from '../Images/The_Escaping_Balls_-_Screenshot_3.jpg';

import RK_S from '../Images/Równanie_Kwadratowe_-_Screenshot.jpg';
import RK_S_2 from '../Images/Równanie_Kwadratowe_-_Screenshot_2.jpg';
import RK_S_3 from '../Images/Równanie_Kwadratowe_-_Screenshot_3.jpg';

import CG_S from '../Images/Candy_Gift_-_Screenshot.jpg';
import CG_S_2 from '../Images/Candy_Gift_-_Screenshot_2.jpg';
import CG_S_3 from '../Images/Candy_Gift_-_Screenshot_3.jpg';

import { strings } from '../App'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Apps extends Component {
    
    render() {
        return (
            <div style={{ float: 'left', paddingBottom: '30px' }}>
                <h4 style={{ paddingLeft: '30px', paddingTop: '30px' }}>{strings.heading_Apps}</h4>
                <CardDeck style={{ paddingTop: '30px', float: 'left' }}>
                    <Card className="Card">

                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={true} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div>
                                <img src={CG_S} alt="" />
                            </div>
                            <div>
                                <img src={CG_S_2} alt="" />
                            </div>
                            <div>
                                <img src={CG_S_3} alt="" />
                            </div>
                        </Carousel>

                        <CardBody>
                            <CardTitle>'Candy Gift'</CardTitle>
                            <CardSubtitle>Android</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://play.google.com/store/apps/details?id=com.pawelwarcaba.candygift">{strings.button_read_more}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={true} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={6000}>
                            <div>
                                <img src={TEB_S} alt="" />
                            </div>
                            <div>
                                <img src={TEB_S_2} alt="" />
                            </div>
                            <div>
                                <img src={TEB_S_3} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'The Escaping Balls'</CardTitle>
                            <CardSubtitle>Desktop | Multiplayer</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://github.com/pawel54321/Game_-_The_Escaping_Balls_-_Multiplayer">{strings.button_read_more}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={true} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={9000}>
                            <div>
                                <img src={RK_S} alt="" />
                            </div>
                            <div>
                                <img src={RK_S_2} alt="" />
                            </div>
                            <div>
                                <img src={RK_S_3} alt="" />
                            </div>
                        </Carousel>
                        {/*<CardImg top width="100%" height="63%" src={RK_S} alt="Image" />*/}
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
