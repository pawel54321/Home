import React, { Component } from 'react';

//import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
import {
    Card, Button,/*CardImg,*/ CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import PL from '../Images/pl.svg';
import GB from '../Images/gb.svg';

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

//import CS from '../Images/Coming_Soon.jpg';

import STCOS from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_1.jpg';
import STCOS_2 from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_2.jpg';
import STCOS_3 from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_3.jpg';
import STCOS_4 from '../Images/Survive_The_Clash_Of_Spiders_-_Screenshot_4.jpg';

import CGP from '../Images/Card_Game_Pan_-_Screenshot.jpg';
import CGP_2 from '../Images/Card_Game_Pan_-_Screenshot_2.jpg';
import CGP_3 from '../Images/Card_Game_Pan_-_Screenshot_3.jpg';
import CGP_4 from '../Images/Card_Game_Pan_-_Screenshot_4.jpg';
import CGP_5 from '../Images/Card_Game_Pan_-_Screenshot_5.jpg';

import EC from '../Images/English_Checkers_-_Screenshot.jpg';
import EC_2 from '../Images/English_Checkers_2_-_Screenshot.jpg';
import EC_3 from '../Images/English_Checkers_3_-_Screenshot.jpg';

import MG from '../Images/Memory_Game_-_Screenshot.jpg';
import MG_2 from '../Images/Memory_Game_2_-_Screenshot.jpg';
import MG_3 from '../Images/Memory_Game_3_-_Screenshot.jpg';

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
    STCOS_4,

    CGP,
    CGP_2,
    CGP_3,
    CGP_4,
    CGP_5,

    EC,
    EC_2,
    EC_3,

    MG,
    MG_2,
    MG_3
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
                            <CardSubtitle><i class="fa fa-android"></i><i class="fa fa-cardboard"></i> Oculus/Cardboard (VR) | <i class="fa fa-user"></i> Singleplayer | <img src={GB} alt="gb" height="20" width="20"></img> {strings.english_version}<br /><br />
                                <i>{strings.spiders_1}<br />
                                   {strings.spiders_2}<br />
                                <b>{strings.spiders_3}</b></i></CardSubtitle>
                            <CardText></CardText>
                                <Button color="success" href="https://github.com/pawel54321/Survive-The-Clash-Of-Spiders"><i class="fa fa-play-circle"></i> {strings.button_github}</Button> <Button color="info" disabled href=""><i class="fa fa-info-circle"></i> {strings.button_github_2}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card" style={{ borderStyle: "none" }}>
                    </Card>
                </CardDeck>

                <CardDeck style={{ paddingTop: '30px', float: 'left' }}>


                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 14, })}>
                                <img src={CGP} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 15, })}>
                                <img src={CGP_2} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 16, })}>
                                <img src={CGP_3} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 17, })}>
                                <img src={CGP_4} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 18, })}>
                                <img src={CGP_5} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <br /><br /><br />
                            <CardTitle>'{strings.game_card}'</CardTitle>
                            <CardSubtitle><i class="fa fa-globe"></i> WebGL | <i class="fa fa-server"></i> Multiplayer (Photon) | Only NETWORK (No LAN) | <img src={PL} alt="pl" height="20" width="20"></img> {strings.polish_version}</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://pawel54321.itch.io/card-game-pan"><i class="fa fa-gamepad"></i> {strings.button_play}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 19, })}>
                                <img src={EC} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 20, })}>
                                <img src={EC_2} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 21, })}>
                                <img src={EC_3} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'{strings.game_checkers}'</CardTitle>
                            <CardSubtitle><i class="fa fa-globe"></i> WebGL | <i class="fa fa-comments"></i> Multiplayer (Hot Seat) | <img src={PL} alt="pl" height="20" width="20"></img> {strings.polish_version}</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://pawel54321.itch.io/english-checkers"><i class="fa fa-gamepad"></i> {strings.button_play}</Button>
                        </CardBody>
                    </Card>
                    <Card className="Card">
                        <Carousel showThumbs={false} stopOnHover={true} emulateTouch={false} infiniteLoop={true} autoPlay={true} transitionTime={1500} interval={3000}>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 22, })}>
                                <img src={MG} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 23, })}>
                                <img src={MG_2} alt="" />
                            </div>
                            <div onClick={() => this.setState({ isOpen: true, photoIndex: 24, })}>
                                <img src={MG_3} alt="" />
                            </div>
                        </Carousel>
                        <CardBody>
                            <CardTitle>'{strings.game_memory}'</CardTitle>
                            <CardSubtitle><i class="fa fa-globe"></i> WebGL | <i class="fa fa-user"></i> Singleplayer | <img src={PL} alt="pl" height="20" width="20"></img> {strings.polish_version}</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://pawel54321.itch.io/memory-game"><i class="fa fa-gamepad"></i> {strings.button_play}</Button>
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
                            <CardSubtitle><i class="fa fa-android"></i> Android | <i class="fa fa-user"></i> Singleplayer | <img src={GB} alt="gb" height="20" width="20"></img> {strings.english_version}</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://play.google.com/store/apps/details?id=com.pawelwarcaba.candygift"><i class="fa fa-play-circle"></i> {strings.button_google_play}</Button>
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
                            <CardSubtitle><i class="fa fa-desktop"></i> Desktop | <i class="fa fa-home"></i> Multiplayer (UNet) | Only LAN | <img src={GB} alt="gb" height="20" width="20"></img> {strings.english_version}</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2"><i class="fa fa-play-circle"></i> {strings.button_github}</Button> <Button color="info" href="https://github.com/pawel54321/The-Escaping-Balls---The-Escaping-Balls-2/blob/master/README.pdf"><i class="fa fa-info-circle"></i> {strings.button_github_2}</Button>
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
                            <CardSubtitle><i class="fa fa-android"></i> Android | <img src={PL} alt="pl" height="20" width="20"></img> {strings.polish_version}</CardSubtitle>
                            <CardText></CardText>
                            <Button color="success" href="https://play.google.com/store/apps/details?id=com.pawelwarcaba.rownaniekwadratowe"><i class="fa fa-play-circle"></i> {strings.button_google_play}</Button>
                    </CardBody>
                </Card>
                </CardDeck>
            </div>
            );
    }
}


export default Apps;
