import React, { Component } from 'react';

//import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
import {
    Card, Button,/*CardImg,*/ CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';



import CG_S from '../Images/Candy_Gift_-_Screenshot.jpg';
import CG_S_2 from '../Images/Candy_Gift_-_Screenshot_2.jpg';
import CG_S_3 from '../Images/Candy_Gift_-_Screenshot_3.jpg';

import TEB_2_S from '../Images/The_Escaping_Balls_2_-_Screenshot.jpg';
import TEB_2_S_2 from '../Images/The_Escaping_Balls_2_-_Screenshot_2.jpg';
import TEB_S from '../Images/The_Escaping_Balls_-_Screenshot.jpg';
import TEB_S_2 from '../Images/The_Escaping_Balls_-_Screenshot_2.jpg';

import RK_S from '../Images/Równanie_Kwadratowe_-_Screenshot.jpg';
import RK_S_2 from '../Images/Równanie_Kwadratowe_-_Screenshot_2.jpg';
import RK_S_3 from '../Images/Równanie_Kwadratowe_-_Screenshot_3.jpg';

import CS from '../Images/Coming_Soon.jpg';

import STCOS from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_1.jpg';
import STCOS_2 from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_2.jpg';
import STCOS_3 from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_3.jpg';
import STCOS_4 from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_4.jpg';


import { strings } from '../App'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const images = [

    CG_S,
    CG_S_2,
    CG_S_3,

    TEB_2_S,
    TEB_2_S_2,
    TEB_S,
    TEB_S_2,

    RK_S,
    RK_S_2,
    RK_S_3,

    STCOS,
    STCOS_2,
    STCOS_3,
    STCOS_4
];

class Apps extends Component {


    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }


    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div style={{ float: 'left', paddingBottom: '30px' }}>



     

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                        discourageDownloads={false}
                        enableZoom={false}
                        clickOutsideToClose={false}
                  
                    />
                )}



                <h4 style={{ paddingLeft: '30px', paddingTop: '30px' }}>{strings.heading_Apps}</h4>

                <CardDeck style={{ paddingTop: '30px', float: 'left' }}>

                    <Card className="Card" style={{ borderStyle: "none" }}>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 10, })}>
                                <img src={STCOS} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 11, })}>
                                <img src={STCOS_2} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 12, })}>
                                <img src={STCOS_3} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 13, })}>
                                <img src={STCOS_4} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'Survive The Clash Of Spiders'</CardTitle>
                            <CardSubtitle>Oculus (VR) | Singleplayer<br/><i>Cardboard Support In The Future (Only Implement Controller)</i></CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://github.com/pawel54321/Survive-The-Clash-Of-Spiders">{strings.button_github}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card" style={{ borderStyle: "none" }}>
                    </Card>
                </CardDeck>

                <CardDeck style={{ paddingTop: '30px', float: 'left' }}>


                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'?'</CardTitle>
                            <CardSubtitle>WebGL | Multiplayer (Photon) | Only WAN (NO LAN)</CardSubtitle>
                            <CardText></CardText>
                            <Button disabled color="primary" href="">{strings.button_play}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'?'</CardTitle>
                            <CardSubtitle>WebGL | Multiplayer (Hot Seat)</CardSubtitle>
                            <CardText></CardText>
                            <Button disabled color="primary" href="">{strings.button_play}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: -1, })}>
                                <img src={CS} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'?'</CardTitle>
                            <CardSubtitle>WebGL | Singleplayer</CardSubtitle>
                            <CardText></CardText>
                            <Button disabled color="primary" href="">{strings.button_play}</Button>
                        </CardBody>
                    </Card>
                </CardDeck>

                <CardDeck style={{ paddingTop: '30px', float: 'left' }}>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 0,})}>
                                <img src={CG_S} alt="" />                         
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 1, })}>
                                <img src={CG_S_2} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 2, })}>
                                <img src={CG_S_3} alt="" />
                            </div>
                        </Carousel>

                        <CardBody>
                            <CardTitle>'Candy Gift'</CardTitle>
                            <CardSubtitle>Android | Singleplayer</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://play.google.com/store/apps/details?id=com.pawelwarcaba.candygift">{strings.button_google_play}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={6000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 3, })}>
                                <img src={TEB_2_S} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 4, })}>
                                <img src={TEB_2_S_2} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 5, })}>
                                <img src={TEB_S} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 6, })}>
                                <img src={TEB_S_2} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'The Escaping Balls' & 'The Escaping Balls 2'</CardTitle>
                            <CardSubtitle>Desktop | Multiplayer (UNet) | Only LAN</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2">{strings.button_github}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={9000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 7, })}>
                                <img src={RK_S} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 8, })}>
                                <img src={RK_S_2} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 9, })}>
                                <img src={RK_S_3} alt="" />
                            </div>
                        </Carousel>
                        {/*<CardImg top width="100%" height="63%" src={RK_S} alt="Image" />*/}
                    <CardBody>
                        <CardTitle>'Równanie Kwadratowe'</CardTitle>
                        <CardSubtitle>Android</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://play.google.com/store/apps/details?id=com.pawelwarcaba.rownaniekwadratowe">{strings.button_google_play}</Button>
                    </CardBody>
                </Card>
                </CardDeck>
            </div>
            );
    }
}


export default Apps;
