import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TimelineNodePage from './views/TimelineNodePage/TimelineNodePage'
import ArticlesPage from './views/ArticlesPage/ArticlesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<TimelineNodePage />} />
          <Route path='/module/:id' element={ <ArticlesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
