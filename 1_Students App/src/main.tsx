import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/authProvider';
import StateProvider from './providers/stateProvider';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </AuthProvider>
  </BrowserRouter>
)
