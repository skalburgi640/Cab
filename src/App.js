import Main from "./component/Main"; 
import whats from "./asset/whats.png";
 

function App() {
  return (
    <>
      <Main />
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

export default App;
