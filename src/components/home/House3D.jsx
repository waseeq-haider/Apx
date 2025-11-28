import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const House3D = (props) => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) / 8;
        group.current.rotation.z = Math.sin(t / 4) / 20;
        group.current.position.y = Math.sin(t / 1.5) / 10;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group ref={group} {...props} dispose={null} scale={2}>
                {/* Base of the house */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.5, 1, 1.5]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>

                {/* Roof */}
                <mesh position={[0, 0.75, 0]} rotation={[0, Math.PI / 4, 0]}>
                    <coneGeometry args={[1.3, 0.8, 4]} />
                    <meshStandardMaterial color="#0071e3" />
                </mesh>

                {/* Door */}
                <mesh position={[0, -0.2, 0.76]}>
                    <planeGeometry args={[0.4, 0.6]} />
                    <meshStandardMaterial color="#1d1d1f" />
                </mesh>

                {/* Window Left */}
                <mesh position={[-0.4, 0.1, 0.76]}>
                    <planeGeometry args={[0.3, 0.3]} />
                    <meshStandardMaterial color="#86868b" />
                </mesh>

                {/* Window Right */}
                <mesh position={[0.4, 0.1, 0.76]}>
                    <planeGeometry args={[0.3, 0.3]} />
                    <meshStandardMaterial color="#86868b" />
                </mesh>
            </group>
        </Float>
    );
};

export default House3D;
