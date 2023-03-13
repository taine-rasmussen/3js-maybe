import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import CanvasLoader from '../Loader';

const Earth = ({ isMobile }) => {

  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 0.7 : 6.25}
      position={isMobile ? [0.5, -3, -1.2] : [0, -1, -1.25]}
      rotation={[-0.01, 4, -0.1]}
    />
  )
}

const EarthCanvas = ({ isMobile, setIsMobile }) => {

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth isMobile={isMobile} />
    </Canvas>
  )
}

export default EarthCanvas