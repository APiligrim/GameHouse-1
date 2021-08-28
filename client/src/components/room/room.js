import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import Model from "./resources/Walk.js";
import * as THREE from "three";
import "./styles/room.css";
import { Text, Box, Sphere } from "..";
import Island from "./resources/Island.js";
function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="#B881F3" />
    </mesh>
  );
}

//Loads the skybox texture and applies it to the scene
function SkyBox() {
  return null;
}

export default function Room() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{
          position: [Math.PI * 2, 20, Math.PI * 2],
        }}
      >
        {/* <Stars /> */}
        <SkyBox />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        {/* <spotLight
                    position={[10, 15, 10]}
                    angle={0.3}
                /> */}
        {/* <pointLight position={[-10, 10, -10]} castShadow /> */}
        <pointLight position={[-0, 500, -0]} castShadow />
        {[-10, 0, 10].map((x) =>
          [-10, 0, 10].map((z) => (
            <Box position={[x, Math.random() * 5 + 1, z]} />
          ))
        )}
        {[-20, 5, 20].map((x) =>
          [-20, 5, 20].map((z) => (
            <Sphere position={[x, Math.random() * 10 + 1, z]} />
          ))
        )}
        <Physics>
          <Island />
          {/* <Plane /> */}

          <Box />
          <Text text={"GameHouse"} position={[-30, 10, 0]} color={"#7FFFDD"} />
          {/* <Text text={"4 Baozi"} */}
          {/* position={[0, 5, 0]} /> */}
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
}
