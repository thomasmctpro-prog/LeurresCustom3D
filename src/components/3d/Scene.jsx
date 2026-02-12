import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import LureModel from './LureModel';

const Scene = ({ color, modelPath, hook, hookPosition, hookRotation }) => {
    return (
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
            <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6}>
                    <LureModel
                        color={color}
                        modelPath={modelPath}
                        hook={hook}
                        hookPosition={hookPosition}
                        hookRotation={hookRotation}
                    />
                </Stage>
                <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
            </Suspense>
        </Canvas>
    );
};

export default Scene;
