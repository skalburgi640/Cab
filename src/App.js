import Header from "./component/Header";
import Main from "./component/Main";
import Footer from './component/Footer';
import whats from './asset/whats.png';
import phone from './asset/phone.png';

function App() {
  return (
    <>
      <Main />
      <a class="fixedButton" href="https://wa.me/9960869689/?text=Hi" target="_blank">
 				<div class="roundedFixedBtn">
        <img src={whats} style={{borderRadius : '34px'}} />           
         </div>
	  	</a>
    {/* <a class="fixedButton" href="https://wa.me/9960536327" target="_blank"> */}
    {/* <a className="fixedButton"  href="8882192787">
 				<div className="roundedFixedBtn">
        <img src={phone} style={{borderRadius : '34px'}} />           
         </div>
		</a> */}
    </>
  );
}

export default App;
