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
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default AppRoutes;