import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Center } from '@react-three/drei';
import { SimpleHook, TrebleHook } from './Hooks';

const DefaultLure = ({ color }) => (
  <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
    <capsuleGeometry args={[0.4, 4, 4, 16]} />
    <meshStandardMaterial
      color={color}
      roughness={0.3}
      metalness={0.1}
    />
  </mesh>
);

const STLLure = ({ color, modelPath }) => {
  const geometry = useLoader(STLLoader, modelPath);
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[0.1, 0.1, 0.1]}
    >
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
};

const LureModel = ({ color, modelPath, hook, hookPosition, hookRotation }) => {
  const meshRef = useRef();

  // Utilisation de la position fournie par la config (lures.js)
  // Valeurs par défaut de secours si jamais la config manque
  const finalHookPos = hookPosition || (modelPath ? [0, -2, 0] : [2.2, 0, 0]);
  const finalHookRot = hookRotation || (modelPath ? [0, 0, Math.PI] : [0, 0, -Math.PI / 2]);

  const renderHook = () => {
    if (hook === 'Simple') return <SimpleHook position={finalHookPos} rotation={finalHookRot} color="silver" />;
    if (hook === 'Triple') return <TrebleHook position={finalHookPos} rotation={finalHookRot} color="silver" />;
    return null;
  };

  return (
    <group>
      <Center>
        <mesh ref={meshRef}>
          {modelPath ? <STLLure color={color} modelPath={modelPath} /> : <DefaultLure color={color} />}
        </mesh>
      </Center>
      {renderHook()}
    </group>
  );
};

export default LureModel;
