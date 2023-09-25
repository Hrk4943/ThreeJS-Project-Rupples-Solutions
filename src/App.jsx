import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Component/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./Component/Interface";
import ScrollManager from "./Component/ScrollManager";
import MenuPart from "./Component/Menu/MenuPart";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./Component/Config";
import Cursor from "./Component/Cursor";
import { Leva } from "leva";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <MenuPart
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      {/* <Leva hidden /> */}
    </>
  );
}

export default App;
