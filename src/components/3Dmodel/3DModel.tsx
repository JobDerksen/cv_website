"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from "three";
import styles from './3Dmodel.module.scss'

const MeshComponent = () => {
    const fileUrl = '/model/FinalCar.gltf';
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.position.x = -5;

        mesh.current.rotation.x = 1;
        mesh.current.rotation.z += 0.01;
        mesh.current.rotation.y = 1.2;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

const Model = () => {
    return (
        <div className={styles.container}>
            <Canvas camera={{ position: [0, 8, 8] }}>
                <OrbitControls />
                <ambientLight />
                <pointLight intensity={75} color={'#FFF'} position={[2,2,2]}/>
                <MeshComponent />
            </Canvas>
        </div>
    );
}

export default Model;
