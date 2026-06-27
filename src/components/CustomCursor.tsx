import { useEffect, useRef, useState } from "react";

const interactiveSelector =
  'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const frame = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const supportsPointer = window.matchMedia("(pointer: fine)").matches;

    if (!supportsPointer) {
      return;
    }

    const moveCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
      }
      frame.current = undefined;
    };

    const handlePointerMove = (event: PointerEvent) => {
      position.current = { x: event.clientX, y: event.clientY };
      setIsVisible(true);
      setIsInteractive(Boolean((event.target as Element | null)?.closest(interactiveSelector)));

      if (!frame.current) {
        frame.current = window.requestAnimationFrame(moveCursor);
      }
    };

    const handlePointerLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);

      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={[
        "custom-cursor",
        isVisible ? "custom-cursor--visible" : "",
        isInteractive ? "custom-cursor--interactive" : "",
      ].join(" ")}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
