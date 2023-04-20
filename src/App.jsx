import Navibar from "./Components/Navibar";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navibar />
      <main>
        <Container>
          <h1 className="my-5 font-effect-neon">Mech Market by Juno</h1>
          <h2 className="font-effect-neon">Open 24hrs</h2>
          <Routes>
            <Route
              path="/"
              element={<HomeScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
