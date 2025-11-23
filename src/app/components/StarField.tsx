import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Points as PointsImpl } from 'three';
import { random } from 'maath';

export const StarField = () => {
    const ref = useRef<PointsImpl>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array);
  
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    });
  
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#8B5CF6"
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  };
