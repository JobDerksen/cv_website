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
        mesh.current.rotation.y += 0.005;
        mesh.current.position.y = -2;
        mesh.current.position.z = -13.5;
        mesh.current.rotation.x = 0.4;
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
            <Canvas>
                <OrbitControls maxAzimuthAngle={-100}/>
                <ambientLight />
                <pointLight intensity={100} color={'#FFF'}/>
                <MeshComponent />
            </Canvas>
        </div>
    );
}

export default Model;
