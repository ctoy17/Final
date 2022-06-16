import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { PracticePlanContextProvider} from './context/PracticePlanContext'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <PracticePlanContextProvider>
                <App />
            </PracticePlanContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);