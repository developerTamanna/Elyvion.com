import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

export default function UserLayout({ children }) {
  return (
    <>
      <Header />

      {/* 🔔 Toast Container */}
      <Toaster position="top-right" />

      <main className="min-h-screen">{children}</main>

      <Footer />
      <NavigationBar />
    </>
  );
}
