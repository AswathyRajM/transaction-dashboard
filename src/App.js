import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import TransactionDetailsPage from './pages/TransactionDetails';
import PageNotFoundPage from './pages/PageNotFound';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/transaction/:id' element={<TransactionDetailsPage />} />
        <Route path='*' element={<PageNotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
