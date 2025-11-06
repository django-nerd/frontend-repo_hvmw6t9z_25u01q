import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import CompareTrayPlaceholder from "./components/CompareTrayPlaceholder";

import Home from "./pages/Home";
import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import ProductDetail from "./pages/ProductDetail";
import DealsToday from "./pages/DealsToday";
import Search from "./pages/Search";
import BestList from "./pages/BestList";
import Compare from "./pages/Compare";
import Alerts from "./pages/Alerts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/category/:category/:segment" element={<SubCategory />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/deals/today" element={<DealsToday />} />
            <Route path="/search" element={<Search />} />
            <Route path="/best/:topic" element={<BestList />} />
            <Route path="/compare/:items" element={<Compare />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <div className="max-w-screen-xl mx-auto px-4 mt-6 hidden md:block">
            <CompareTrayPlaceholder />
          </div>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </BrowserRouter>
  );
}
