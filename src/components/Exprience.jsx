/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls, Environment } from '@react-three/drei';
import { Shoe } from './Shoe';

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <Environment preset='city' />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={1} damping={0.25}>
        <Shoe />
      </ScrollControls>
    </>
  );
};

export default Experience;
