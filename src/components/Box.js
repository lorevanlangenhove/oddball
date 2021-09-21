import React, {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";

const Box = (props) => {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    //subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

    return (
        <mesh
            {... props}
            ref={mesh}
            scale={active? 1.5 : 1}
            onClick={event => setActive(!active)}
            onPointerOver={event => setHover(true)}
            onPointerOut={event => setHover(false)}
            >
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"}/>
        </mesh>
    )
}

export default Box;
