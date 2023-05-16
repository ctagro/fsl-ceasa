import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WeeklyReport1 from './Pages/reports/WeeklyReport';

function App() {
    return (
      <div className="App">
       <BrowserRouter>
          <Routes>
  
            <Route path= '/' element={<WeeklyReport1 />} />
  
          </Routes>
       </BrowserRouter>
      </div>
    );
  }
  
  export default App;
