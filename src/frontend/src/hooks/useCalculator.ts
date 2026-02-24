import { useState, useCallback } from 'react';
import { add, subtract, multiply, divide } from '../utils/calculatorOperations';

type Operation = '+' | '−' | '×' | '÷' | null;

export function useCalculator() {
  const [display, setDisplay] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleNumberInput = useCallback((num: string) => {
    setError(undefined);
    
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay((prev) => (prev === '0' ? num : prev + num));
    }
  }, [waitingForNewValue]);

  const handleDecimal = useCallback(() => {
    setError(undefined);
    
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay((prev) => prev + '.');
    }
  }, [display, waitingForNewValue]);

  const performCalculation = useCallback((
    prev: number,
    current: number,
    op: Operation
  ): number | null => {
    switch (op) {
      case '+':
        return add(prev, current);
      case '−':
        return subtract(prev, current);
      case '×':
        return multiply(prev, current);
      case '÷':
        return divide(prev, current);
      default:
        return current;
    }
  }, []);

  const handleOperation = useCallback((op: Operation) => {
    setError(undefined);
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation && !waitingForNewValue) {
      const result = performCalculation(previousValue, currentValue, operation);
      
      if (result === null) {
        setError('Cannot divide by zero');
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(false);
        return;
      }
      
      const displayResult = Number.isInteger(result) ? result.toString() : result.toFixed(8).replace(/\.?0+$/, '');
      setDisplay(displayResult);
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  }, [display, previousValue, operation, waitingForNewValue, performCalculation]);

  const handleEquals = useCallback(() => {
    setError(undefined);
    
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = performCalculation(previousValue, currentValue, operation);
      
      if (result === null) {
        setError('Cannot divide by zero');
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(false);
        return;
      }
      
      const displayResult = Number.isInteger(result) ? result.toString() : result.toFixed(8).replace(/\.?0+$/, '');
      setDisplay(displayResult);
      setPreviousValue(result);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  }, [display, previousValue, operation, performCalculation]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
    setError(undefined);
  }, []);

  return {
    display,
    error,
    handleNumberInput,
    handleOperation,
    handleEquals,
    handleClear,
    handleDecimal,
  };
}
