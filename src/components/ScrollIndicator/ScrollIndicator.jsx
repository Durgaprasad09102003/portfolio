import React, { useEffect, useRef, useState, useCallback } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ containerRef }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const isDragging = useRef(false);
  const indicatorRef = useRef(null);
  const thumbRef = useRef(null);

  const getContainer = useCallback(
    () => containerRef?.current || window,
    [containerRef]
  );

  const handleScroll = useCallback(() => {
    if (isDragging.current) return;
    const container = getContainer();
    const scrollTop =
      container === window ? window.scrollY : container.scrollTop;
    const scrollHeight =
      (container === window
        ? document.documentElement.scrollHeight - window.innerHeight
        : container.scrollHeight - container.clientHeight);

    const percent = (scrollTop / scrollHeight) * 100;
    setScrollPercent(percent);
  }, [getContainer]);

  const handleDrag = useCallback((clientY) => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const rect = indicator.getBoundingClientRect();
    let percent = ((clientY - rect.top) / rect.height) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setScrollPercent(percent);

    const container = getContainer();
    const scrollHeight =
      (container === window
        ? document.documentElement.scrollHeight - window.innerHeight
        : container.scrollHeight - container.clientHeight);

    const newScrollTop = (percent / 100) * scrollHeight;
    if (container === window) {
      window.scrollTo({ top: newScrollTop, behavior: "auto" });
    } else {
      container.scrollTop = newScrollTop;
    }
  }, [getContainer]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    handleDrag(e.clientY);
  }, [handleDrag]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    handleDrag(e.touches[0].clientY);
  }, [handleDrag]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.classList.remove("noselect");
  }, []);

  useEffect(() => {
    const container = getContainer();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [getContainer, handleScroll, handleMouseMove, handleTouchMove, handleMouseUp]);

  return (
    <div className="scroll-indicator" ref={indicatorRef}>
      <div className="scroll-track" />
      <div
        ref={thumbRef}
        className="circular-thumb"
        style={{ top: `calc(${scrollPercent}% - 8px)` }}
        onMouseDown={(e) => {
          if (e.target === thumbRef.current) {
            isDragging.current = true;
            document.body.classList.add("noselect");
            e.preventDefault();
          }
        }}
        onTouchStart={(e) => {
          if (e.target === thumbRef.current) {
            isDragging.current = true;
            document.body.classList.add("noselect");
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
