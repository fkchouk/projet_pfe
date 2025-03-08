import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importation correcte de react-router-dom
import AppLayout from './layout/AppLayout';
import Home from './pages/Admin/Home';
import { ScrollToTop } from "./components/common/ScrollToTop";
import TableUsers from "./pages/Admin/TableUsers";
import SignUpUser from "./pages/Admin/SignUpUser";  // Assure-toi que le fichier a la bonne orthographe
 // Correction ici



function App() {

  return (
    <Router>
      <ScrollToTop />
      {/* Dashboard Layout */}
      <Routes>
      <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/tabUsers" element={<TableUsers />} />
          <Route path="/SingUpUser" element={<SignUpUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
