import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css'
import Header from './components/Header/Header'
import HomeAndSectionsPage from "./Pages/HomeAndSectionsPage/HomeAndSectionsPage";
import Error from "./Pages/Error/Error";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeAndSectionsPage />} />
          <Route path="/section/:sectionName" element={<HomeAndSectionsPage />} />
          <Route path="/search/:query" element={<SearchResultsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
