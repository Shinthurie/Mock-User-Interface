import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Overview from './pages/Overview';
// ... other imports
import Repository from './pages/Repository';
import Query from './pages/Query';
import Settings from './pages/Settings';
import Document from './pages/Document';
import DeliveryNote from './pages/DeliveryNote';
function App() {
  return (
    <Router>
      <Routes>
        {/* Login is separate from the main layout */}
        <Route path="/" element={<Login />} />
        
        {/* Other pages are inside the Layout (with Bottom Nav) */}
        <Route element={<Layout />}>
          <Route path="/overview" element={<Overview />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/query" element={<Query />} />
        {/* Repository / Archive */}
        <Route path="/archive" element={<Repository />} />
        {/* Document detail and delivery note routes */}
        <Route path="/document/:id" element={<Document />} />
        <Route path="/delivery-note/:id" element={<DeliveryNote />} />
      </Routes>
    </Router>
  );
}

export default App;