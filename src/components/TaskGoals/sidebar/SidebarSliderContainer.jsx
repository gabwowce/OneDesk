// components/TaskGoals/Sidebar.jsx
import { useState, useRef, useEffect } from "react";

import {MIN_W, MAX_W, START_W} from "../../../config/SideBarSlider"

export default function SidebarSliderContainer({children}) {
  /* 1) plotis – laikom state */
  const [width, setWidth] = useState(START_W);
  const dragging = useRef(false);      // ar šiuo metu tempiame

  /* 2) pradėti tempimą */
  const handleMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
  };

  /* 3) globalūs mousemove / mouseup listeneriai */
  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      let newW = e.clientX;            // atstumas nuo kairio ekrano krašto
      newW = Math.max(MIN_W, Math.min(MAX_W, newW));
      setWidth(newW);
    };
    const stopDrag = () => (dragging.current = false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   stopDrag);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   stopDrag);
    };
  }, []);

  return (
    /* išorinis „frame“, kurio plotį valdome */
    <div style={{ width }} className="relative h-full bg-white">
      {/* faktinis meniu turinys */}
      {children}

      {/* 4) viso aukščio rankenėlė */}
      <div
        onMouseDown={handleMouseDown}
        className=" select-none
          absolute right-0 top-0
          w-[3px] h-full cursor-col-resize
          bg-transparent hover:bg-slate-50 transition
        "
      />
    </div>
  );
}
