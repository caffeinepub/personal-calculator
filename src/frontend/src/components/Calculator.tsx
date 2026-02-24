import { useCalculator } from '../hooks/useCalculator';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

export default function Calculator() {
  const {
    display,
    error,
    handleNumberInput,
    handleOperation,
    handleEquals,
    handleClear,
    handleDecimal,
  } = useCalculator();

  return (
    <div className="bg-[oklch(0.96_0.02_50)] dark:bg-[oklch(0.22_0.03_50)] rounded-3xl shadow-2xl p-6 border-2 border-[oklch(0.88_0.03_50)] dark:border-[oklch(0.30_0.04_50)]">
      <CalculatorDisplay value={display} error={error} />
      
      <div className="grid grid-cols-4 gap-3 mt-6">
        {/* Row 1: Clear and operations */}
        <CalculatorButton
          value="C"
          onClick={handleClear}
          variant="function"
          className="col-span-2"
        />
        <CalculatorButton
          value="÷"
          onClick={() => handleOperation('÷')}
          variant="operation"
        />
        <CalculatorButton
          value="×"
          onClick={() => handleOperation('×')}
          variant="operation"
        />

        {/* Row 2: 7, 8, 9, - */}
        <CalculatorButton value="7" onClick={() => handleNumberInput('7')} />
        <CalculatorButton value="8" onClick={() => handleNumberInput('8')} />
        <CalculatorButton value="9" onClick={() => handleNumberInput('9')} />
        <CalculatorButton
          value="−"
          onClick={() => handleOperation('−')}
          variant="operation"
        />

        {/* Row 3: 4, 5, 6, + */}
        <CalculatorButton value="4" onClick={() => handleNumberInput('4')} />
        <CalculatorButton value="5" onClick={() => handleNumberInput('5')} />
        <CalculatorButton value="6" onClick={() => handleNumberInput('6')} />
        <CalculatorButton
          value="+"
          onClick={() => handleOperation('+')}
          variant="operation"
        />

        {/* Row 4: 1, 2, 3 */}
        <CalculatorButton value="1" onClick={() => handleNumberInput('1')} />
        <CalculatorButton value="2" onClick={() => handleNumberInput('2')} />
        <CalculatorButton value="3" onClick={() => handleNumberInput('3')} />

        {/* Row 5: 0, ., = (equals spans 2 rows) */}
        <CalculatorButton
          value="0"
          onClick={() => handleNumberInput('0')}
          className="col-span-2"
        />
        <CalculatorButton value="." onClick={handleDecimal} />
        
        <CalculatorButton
          value="="
          onClick={handleEquals}
          variant="equals"
          className="row-span-2"
        />
      </div>
    </div>
  );
}
