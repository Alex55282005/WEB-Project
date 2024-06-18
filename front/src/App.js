import './App.css';
import { BrowserRouter, Link, Route,Navigate, Routes } from "react-router-dom";
import Main from "./mainPage/main"
import PostLogos from './adminPanel/admin';
import CatalogPage from './pages/CatalogPage';
import DownFooterCatalog from "./catalog/downFooterCatalog";
import AboutUs from './services/aboutUs.jsx';
import Delivery from './services/delivery.jsx';
import Refound from "./services/refound.jsx";
import Distributors from './services/distributors.jsx';
import History from './services/history.jsx';
import Help from './services/help.jsx';
import Zgoda from './services/zgoda.jsx';
import ProfileIndex from './profile/indexProfile.jsx';
import Cart from './cart/Cart.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}>
        </Route>
        <Route path='post_data' element={<PostLogos />}>
        </Route>
        <Route path='catalog' element={<CatalogPage />}>
        </Route>
        <Route path='title-catalog' element={<DownFooterCatalog />}>
        </Route>
        <Route path='about-us' element={<AboutUs />}>
        </Route>
        <Route path='delivery' element={<Delivery />}>
        </Route>
        <Route path='refound' element={<Refound />}>
        </Route>
        <Route path='distributors' element={<Distributors />}>
        </Route>
        <Route path='history' element={<History />}>
        </Route>
        <Route path='help' element={<Help />}>
        </Route>
        <Route path='zgoda' element={<Zgoda />}>
        </Route>
        <Route path='profile' element={<ProfileIndex />}>
        </Route>
        <Route path='cart' element={<Cart />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
