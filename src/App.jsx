import "./App.css";
import Container from "./components/Container";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <section className="body-conteiner">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="conteiner-info">
          <Container />
        </div>
      </section>
    </>
  );
}

export default App;
