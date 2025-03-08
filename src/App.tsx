import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Admin/Home';
import SignIn from './pages/AuthPages/SignIn';  
import TableUsers from './pages/Admin/TableUsers';
import SignUpUser from './pages/Admin/SignUpUser';
import { ScrollToTop } from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/tabUsers" element={<TableUsers />} />
          <Route path="/SignUpUser" element={<SignUpUser />} />
        </Route>
        
        {/* Route pour SignIn */}
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
