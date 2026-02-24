import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[oklch(0.92_0.03_60)] via-[oklch(0.88_0.04_50)] to-[oklch(0.85_0.05_40)] dark:from-[oklch(0.25_0.02_60)] dark:via-[oklch(0.20_0.03_50)] dark:to-[oklch(0.18_0.04_40)] p-4">
      <main className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[oklch(0.35_0.08_45)] dark:text-[oklch(0.90_0.04_55)] mb-2">
            Personal Calculator
          </h1>
          <p className="text-[oklch(0.50_0.05_45)] dark:text-[oklch(0.70_0.03_55)]">
            Simple & elegant calculations
          </p>
        </div>
        <Calculator />
      </main>
      <footer className="mt-12 text-center text-sm text-[oklch(0.55_0.04_45)] dark:text-[oklch(0.65_0.03_55)]">
        <p>
          © {new Date().getFullYear()} · Built with love using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'personal-calculator'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[oklch(0.45_0.08_45)] dark:hover:text-[oklch(0.80_0.04_55)] transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
