import type { ReactElement } from 'react';

interface IProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: IProgressBarProps): ReactElement {
  const statusBar = progress.toString().trim();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <p className="text-xs">0</p>
        <p className="text-xs">50</p>
        <p className="text-xs">100</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-1">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${statusBar}%` }} />
      </div>
      <div className="text-right">
        <p className="text-xs">%</p>
      </div>
    </div>
  );
}

export default ProgressBar;
