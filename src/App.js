import './App.css';
import './car.css';
import React, {Suspense} from "react";


import Scene from "./components/Scene";
import {Canvas} from "@react-three/fiber";
import Loader from "./components/Loader";
import {Environment, OrbitControls} from "@react-three/drei";

function Test(){
    return(
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

                <div class="row" id="two">
                    <div class="col" id="auto">
                        <button type="button" id="car">
                            <img src="green.png" />
                        </button>
                    </div>

                    <div class="col" id="ex">
                        Welcome to the new and <br /> supersonic model of <br /> Volkswagen: <br /> the <span>VW-ERASMUS</span>! You can <br /> take a look to our latest <br /> model by dragging the car <br /> around.
                    </div>
                </div>

                <footer>
                    <div clas="row" id="foot">
                        <div class="col" id="cr">
                            <p>&copy;D'Ieteren</p>
                        </div>

                        <div class="col" id="links">
                            <a href="https://www.facebook.com/DIeterenMovingPeopleForward" target="_blank">
                                <img src="fb.png"/>
                            </a>

                            <a href="https://twitter.com/dieteren_auto" target="_blank">
                                <img src="twitter.png" class="twitter"/>
                            </a>

                            <a href="https://www.linkedin.com/company/d-ieteren/" target="_blank">
                                <img src="linkedin.png" class="linkedin"/>
                            </a>
                        </div>

                        <div class="col" id="adres">
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
