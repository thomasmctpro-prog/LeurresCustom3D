import React, { useMemo } from 'react';
import * as THREE from 'three';

// Un hameçon simple procédural (forme en J)
export const SimpleHook = ({ color = '#aaa', scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
    const geometry = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0.8, 0), // Eye/Top
            new THREE.Vector3(0, 0, 0),   // Shank bottom
            new THREE.Vector3(0.3, -0.3, 0), // Bend start
            new THREE.Vector3(0.5, 0, 0),    // Bend up
            new THREE.Vector3(0.4, 0.2, 0),  // Point
        ]);
        return new THREE.TubeGeometry(curve, 20, 0.05, 8, false);
    }, []);

    return (
        <group position={position} rotation={rotation} scale={scale}>
            {/* L'anneau de l'hameçon */}
            <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.1, 0.05, 8, 16]} />
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Le corps de l'hameçon */}
            <mesh geometry={geometry}>
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    );
};

// Un hameçon triple (3 hameçons simples assemblés)
export const TrebleHook = ({ color = '#aaa', scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
    return (
        <group position={position} rotation={rotation} scale={scale}>
            {/* Anneau central */}
            <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.12, 0.06, 8, 16]} />
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </mesh>

            {/* 3 branches pivotées de 120 degrés */}
            <group rotation={[0, 0, 0]}>
                <SimpleHook color={color} scale={0.8} position={[0, 0, 0]} />
            </group>
            <group rotation={[0, (2 * Math.PI) / 3, 0]}>
                <SimpleHook color={color} scale={0.8} position={[0, 0, 0]} />
            </group>
            <group rotation={[0, (4 * Math.PI) / 3, 0]}>
                <SimpleHook color={color} scale={0.8} position={[0, 0, 0]} />
            </group>
        </group>
    );
};
