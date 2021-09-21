import './App.css';
import React, {Suspense} from "react";


import Scene from "./components/Scene";
import {Canvas} from "@react-three/fiber";
import Loader from "./components/Loader";
import {Environment, OrbitControls} from "@react-three/drei";

function App() {
    return (
        <div className="app">
            <Canvas>
                <Suspense fallback={<Loader/>}>
                    <Scene/>
                    <OrbitControls/>
                </Suspense>
            </Canvas>
        </div>
    );
}

export default App;
