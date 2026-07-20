import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ShowAllOffer from './pages/ShowAllOfferForApartment/ShowAllOfferForApartment';
import ShowAllOfferForBorey from './pages/ShowAllOfferForBorey/ShowAllOfferForBorey';
import ShowAllOfferForPropertiesForSale from './pages/ShowAllOfferForPropertiesForSale/ShowAllOfferForPropertiesForSale';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PhnomPenh from './pages/PhnomPenh/PhnomPenh';
import Chamkamorn from './pages/Chamkamorn/Chamkamorn';
import BKK from './pages/BKK/BKK';
import DounPenh from './pages/DounPenh/DounPenh';
import RussianMarket from './pages/RussianMarket/RussianMarket';
import Sihanoukville from './pages/Sihanoukville/Sihanoukville';
import Kampot from './pages/Kampot/Kampot';
import SiemReap from './pages/SiemReap/SiemReap';
import Battambong from './pages/Battambong/Battambong';
import PropertyDetail from './pages/PropertyDetail/PropertyDetail';
import Buy from './pages/Buy/Buy';
import Rent from './pages/Rent/Rent';


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Login & Register — full page, no header/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main layout — with Header & Footer */}
        <Route path="/*" element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/offers" element={<ShowAllOffer />} />
              <Route path="/borey-offers" element={<ShowAllOfferForBorey />} />
              <Route path="/sale-offers" element={<ShowAllOfferForPropertiesForSale />} />
              <Route path="/phnom-penh" element={<PhnomPenh />} />
              <Route path="/chamkamorn" element={<Chamkamorn />} />
              <Route path="/bkk" element={<BKK />} />
              <Route path="/doun-penh" element={<DounPenh />} />
              <Route path="/russian-market" element={<RussianMarket />} />
              <Route path="/sihanoukville" element={<Sihanoukville />} />
              <Route path="/kampot" element={<Kampot />} />
              <Route path="/siem-reap" element={<SiemReap />} />
              <Route path="/battambong" element={<Battambong />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
