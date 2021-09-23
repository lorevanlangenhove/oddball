import './App.css';
import './car.css';
import React, {Suspense, useState} from "react";


import Scene from "./components/Scene";
import {Canvas} from "@react-three/fiber";
import Loader from "./components/Loader";
import {Environment, OrbitControls} from "@react-three/drei";

function Test() {
    const [isPlaying, setPlaying] = useState(false);
    let carComponent;

    if (!isPlaying) {
        carComponent = (
            <div className="row" id="two">
                <div className="col" id="auto">
                    <button id="car" onClick={() => setPlaying(true)}>
                        <img src="green.png"/>
                    </button>
                </div>

                <div className="col" id="ex">
                    Welcome to the new and <br/> supersonic model
                    of <br/> Volkswagen: <br/> the <span>VW-ERASMUS</span>! You can <br/> take a look to our
                    latest <br/> model by dragging the car <br/> around.
                </div>
            </div>
        );
    } else {
        carComponent = (
            <div className="row" id="id">
                <div className="sketchfab-embed-wrapper">
                    <iframe width="100%" height="100%" title="Auto" frameBorder="0" allowFullScreen
                            mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="https://sketchfab.com/models/1e54eddf120948fe9514c6bab9d1a232/embed?autostart=1&camera=0&preload=1"></iframe>
                </div>
                <div class="buttons">
                    <button className="carbutton" id="testrit">
                        TESTRIT
                    </button>

                    <button className="carbutton" id="bestelnu"> 
                        BESTEL NU
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div class="container">
            <div class="row" id="three">

                <div class="col" id="logo">
                    <div class="dieteren">
                        <img src="logo1.png"/>
                    </div>
                </div>

                <div class="col" id="big">
                    <h1>ERVAAR DE <br/> <span class="vw">VW-ERASMUS</span></h1>
                </div>
            </div>

            {carComponent}

                <footer>
                    <div clas="row" id="foot">
                        <div className="col" id="cr">
                            <p>&copy;D'Ieteren</p>
                        </div>

                        <div className="col" id="links">
                            <a href="https://www.facebook.com/DIeterenMovingPeopleForward" target="_blank">
                                <img src="fb.png"/>
                            </a>

                            <a href="https://twitter.com/dieteren_auto" target="_blank">
                                <img src="twitter.png" className="twitter"/>
                            </a>

                            <a href="https://www.linkedin.com/company/d-ieteren/" target="_blank">
                                <img src="linkedin.png" className="linkedin"/>
                            </a>
                        </div>

                    <div className="col" id="adres">
                        <p>Maliestraat, 50 - 1050 Brussel - België</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function App() {
    return (
        <div className="app">
            <Test/>
        </div>
    );
}

export default App;
