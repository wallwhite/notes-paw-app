import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoot from './AppRoot';
import 'paw-ui/dist/paw-ui.css';
import 'paw-ui/dist/theme.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppRoot />
    </React.StrictMode>,
);
