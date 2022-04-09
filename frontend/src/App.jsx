import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
