import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Home from './pages/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
