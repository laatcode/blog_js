import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
