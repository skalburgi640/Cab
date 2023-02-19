import {
  NavLink,
  Link,
  Routes,
  Route,
  useParams,
  useNavigate
} from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Booking from './component/Booking';
import App from './App';


function AppRoutes() {
  let bookingUrl = `${process.env.REACT_APP_URL}/booking`;
  if (window.origin === 'http://localhost:3000') {
    bookingUrl = '/booking';
  }
  console.log('bookingUrl ::::::::::::;', bookingUrl);
  console.log('process.env.REACT_APP_URL ::::::::::::;', process.env.REACT_APP_URL);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={bookingUrl} element={<Booking />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default AppRoutes;