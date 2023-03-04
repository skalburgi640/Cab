import {
  NavLink,
  Link,
  Routes,
  Route,
  useParams,
  useNavigate
} from "react-router-dom";
import Header from "./component/Header";
import Quotation from "./component/Quotation";
import Footer from "./component/Footer";
import Booking from './component/Booking';
import App from './App';
import whats from "./asset/whats.png";


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
        <Route path='/booking' element={<Booking />} />
        <Route path='/quotation' element={<Quotation />} />
      </Routes>
      <Footer />
      <a
        class="fixedButton"
        href="https://wa.me/919960869689/?text=Hello, %0aI am looking car on rent."
        target="_blank"
      >
        <div class="roundedFixedBtn">
          <img src={whats} style={{ borderRadius: "34px" }} />
        </div>
      </a>
    </>
  );
}

export default AppRoutes;