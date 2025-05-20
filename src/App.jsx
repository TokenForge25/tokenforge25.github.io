import TokenForm from './TokenForm';
import TxVisualizer from './components/TxVisualizer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">TokenForge</h1>
      <TokenForm />
      <TxVisualizer />
    </div>
  );
}
