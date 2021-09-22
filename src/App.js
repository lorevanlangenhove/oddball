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
                <div class="row">
                    <div class="col" id="three">
                        <div>
                            <button type="button">

                            </button>
                        </div>
                    </div>
                    <div class="col" id="big">
                        <h1>ERVAAR DE <br /> <span class="vw">VW-ERASMUS</span></h1>
                    </div>
                    <div class="col" id="logo">
                        <img src="/src/dieteren.svg"></img>
                    </div>
                </div>

                <div class="row">
                    <div class="col" id="auto">
                        <Canvas>
                            <Suspense fallback={<Loader/>}>
                                <Scene/>
                                <OrbitControls/>
                            </Suspense>
                        </Canvas>
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