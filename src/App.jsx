import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ShowAllOffer from './pages/ShowAllOfferForApartment/ShowAllOfferForApartment';
import ShowAllOfferForBorey from './pages/ShowAllOfferForBorey/ShowAllOfferForBorey';
import ShowAllOfferForPropertiesForSale from './pages/ShowAllOfferForPropertiesForSale/ShowAllOfferForPropertiesForSale';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login — full page, no header/footer */}
        <Route path="/login" element={<Login />} />

        {/* Main layout — with Header & Footer */}
        <Route path="/*" element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/offers" element={<ShowAllOffer />} />
              <Route path="/borey-offers" element={<ShowAllOfferForBorey />} />
              <Route path="/sale-offers" element={<ShowAllOfferForPropertiesForSale />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
