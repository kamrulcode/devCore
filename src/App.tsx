import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TechProvider from "./context/TechProvider";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TechProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </TechProvider>
    </div>
  );
}
