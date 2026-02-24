import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CalculatorButtonProps {
  value: string;
  onClick: () => void;
  variant?: 'number' | 'operation' | 'function' | 'equals';
  className?: string;
}

export default function CalculatorButton({
  value,
  onClick,
  variant = 'number',
  className,
}: CalculatorButtonProps) {
  const baseStyles = 'h-16 text-2xl font-semibold transition-all duration-150 active:scale-95';
  
  const variantStyles = {
    number: 'bg-[oklch(0.94_0.02_50)] hover:bg-[oklch(0.90_0.03_50)] text-[oklch(0.30_0.08_45)] dark:bg-[oklch(0.28_0.04_50)] dark:hover:bg-[oklch(0.32_0.05_50)] dark:text-[oklch(0.92_0.04_55)] border-2 border-[oklch(0.88_0.03_50)] dark:border-[oklch(0.32_0.04_50)] shadow-md',
    operation: 'bg-[oklch(0.75_0.12_45)] hover:bg-[oklch(0.70_0.14_45)] text-[oklch(0.98_0.01_50)] dark:bg-[oklch(0.50_0.10_45)] dark:hover:bg-[oklch(0.55_0.12_45)] dark:text-[oklch(0.98_0.01_50)] border-2 border-[oklch(0.70_0.13_45)] dark:border-[oklch(0.55_0.11_45)] shadow-lg font-bold',
    function: 'bg-[oklch(0.82_0.08_35)] hover:bg-[oklch(0.78_0.10_35)] text-[oklch(0.98_0.01_50)] dark:bg-[oklch(0.45_0.08_35)] dark:hover:bg-[oklch(0.50_0.10_35)] dark:text-[oklch(0.98_0.01_50)] border-2 border-[oklch(0.78_0.09_35)] dark:border-[oklch(0.50_0.09_35)] shadow-lg font-bold',
    equals: 'bg-[oklch(0.65_0.18_25)] hover:bg-[oklch(0.60_0.20_25)] text-[oklch(0.98_0.01_50)] dark:bg-[oklch(0.55_0.15_25)] dark:hover:bg-[oklch(0.60_0.17_25)] dark:text-[oklch(0.98_0.01_50)] border-2 border-[oklch(0.60_0.19_25)] dark:border-[oklch(0.60_0.16_25)] shadow-xl font-bold',
  };

  return (
    <Button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      size="lg"
    >
      {value}
    </Button>
  );
}
