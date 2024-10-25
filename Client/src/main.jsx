import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Import without destructuring
import reducers from './reducers';
import App from './App.jsx';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);
