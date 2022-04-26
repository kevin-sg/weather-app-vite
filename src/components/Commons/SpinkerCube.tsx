import type { ReactElement } from 'react';

function SpinkerCube(): ReactElement {
  return (
    <div className="absolute inset-0 flex justify-between items-center">
      <div className="sk-cube-grid">
        {[...new Array(9)].map((el, i) => (
          <div
            key={i + 1}
            className={`sk-cube sk-cube${i + 1} bg-gray-700 dark:bg-slate-100`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SpinkerCube;
