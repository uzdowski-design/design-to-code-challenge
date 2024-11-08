import ExampleSection from './components/ExampleSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <ExampleSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
