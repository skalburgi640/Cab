import Header from "./component/Header";
import Main from "./component/Main";
import Footer from './component/Footer';
import whats from './asset/whats.png';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
      <a class="fixedButton" href="https://wa.me/9960536327" target="_blank">
 				<div class="roundedFixedBtn">
        <img src={whats} style={{borderRadius : '34px'}} />           
         </div>
		</a>
    </>
  );
}

export default App;
