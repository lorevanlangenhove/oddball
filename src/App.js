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
                    
                    <div class="col">
                        <a role="button" class="q">
                            ?
                        </a>
                    </div>
                    
                </div>

                <div class="row" id="two">
                    <div class="col" id="auto">
                        <a role="button" id="car"></a>
                    </div> 

                    <div class="col" id="ex">
                        Welcome to the new and <br /> supersonic model of <br /> Volkswagen: <br /> the <span>VW-ERASMUS</span>! You can <br /> take a look to our latest <br /> model by dragging the car <br /> around.
                    </div>
                </div>
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
