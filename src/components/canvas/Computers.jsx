import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scence.glft')

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'
      />
      <pointLight intensity={1} />
      <primitive
        obeject={computer.scene} />
    </mesh>
  )
}

const ComputersCanvas = () => (
  <canvas
    fromLoop='demand'
  >

  </canvas>
)

export default Computers