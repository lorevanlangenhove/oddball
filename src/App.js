import './App.css';
import './car.css';
import React, {Suspense, useState} from "react";


import Scene from "./components/Scene";
import {Canvas} from "@react-three/fiber";
import Loader from "./components/Loader";
import {Environment, OrbitControls} from "@react-three/drei";
import Car from "./components/Car";

function Test() {
    const [isPlaying, setPlaying] = useState(false);
    let carComponent;
    if (!isPlaying) {
        carComponent = (
            <div className="row" id="two">

                <div className="col" id="auto">
                    <button type="button" id="car" onClick={() => setPlaying(true)}/>
                </div>

                <div className="col" id="ex">
                    Welcome to the new and <br/> supersonic model of <br/> Volkswagen: <br/> the <span>VW-ERASMUS</span>!
                    You can <br/> take a look to our latest <br/> model by dragging the car <br/> around.
                </div>
            </div>
        );
    } else {
        carComponent = (
            <Canvas>
                <Suspense fallback={<Loader/>}>
                    <Car/>
                    <OrbitControls/>
                </Suspense>
            </Canvas>
        );
    }

    return (
        <div>
            <div class="container">
                <div class="row" id="three">

                    <div class="col" id="logo">
                        <div class="dieteren">
                            <img src="logo1.png"/>
                        </div>
                    </div>

                    <div class="col" id="big">
                        <h1>ERVAAR DE <br /> <span class="vw">VW-ERASMUS</span></h1>
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
        </div>
    )
}

function App() {
    return (
        <div className="app">
            <Test />
        </div>
    );
}

export default App;
