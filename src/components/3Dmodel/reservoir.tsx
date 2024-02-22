"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from "three";
import styles from './3Dmodel.module.scss'

const MeshComponent = () => {
    const fileUrl = '/reservoir/Resivoir.gltf';
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

const ResModel = () => {
    return (
        <div className={styles.container}>
            <Canvas camera={{ position: [25, 5, -10] }}>
                <OrbitControls />
                <ambientLight />
                <pointLight intensity={75} color={'#FFF'} position={[2,2,2]}/>
                <MeshComponent />
            </Canvas>
        </div>
    );
}

export default ResModel;
