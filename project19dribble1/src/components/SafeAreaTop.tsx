/** Fills the iPhone notch/status-bar safe area with the hero navy color. */
export function SafeAreaTop() {
  return (
    <div
      aria-hidden="true"
      className="safe-area-top pointer-events-none fixed top-0 right-0 left-0 z-[45] bg-p19-navy"
    />
  );
}
