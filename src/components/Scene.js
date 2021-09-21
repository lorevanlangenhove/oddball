import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {useLoader} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import React, {Suspense} from "react";
import Loader from "./Loader";

const planet = "/assets/planet.obj"


const Scene = () => {
    const obj = useLoader(OBJLoader, planet);

    console.log("obj:")
    console.log(obj);

    return (
        <primitive object={obj}/>
    );
}

export default Scene;
