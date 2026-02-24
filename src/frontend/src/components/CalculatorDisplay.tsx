interface CalculatorDisplayProps {
  value: string;
  error?: string;
}

export default function CalculatorDisplay({ value, error }: CalculatorDisplayProps) {
  return (
    <div className="bg-[oklch(0.98_0.01_50)] dark:bg-[oklch(0.18_0.04_50)] rounded-2xl p-6 border-2 border-[oklch(0.90_0.02_50)] dark:border-[oklch(0.28_0.04_50)] min-h-[100px] flex items-end justify-end shadow-inner">
      {error ? (
        <div className="text-right">
          <div className="text-[oklch(0.60_0.15_30)] dark:text-[oklch(0.70_0.12_30)] text-lg font-medium">
            {error}
          </div>
        </div>
      ) : (
        <div className="text-right w-full overflow-hidden">
          <div className="text-5xl font-bold text-[oklch(0.30_0.08_45)] dark:text-[oklch(0.92_0.04_55)] break-all">
            {value}
          </div>
        </div>
      )}
    </div>
  );
}
