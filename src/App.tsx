import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css'
import Header from './components/Header/Header'
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
