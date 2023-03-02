import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "../src/components/MainPage/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
