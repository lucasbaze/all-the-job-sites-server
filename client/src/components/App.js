import React from 'react';

import { StateProvider } from '../state';
import Header from './Header';
import { FETCH_USER } from '../actions/types.js';

function App() {
    const initialState = { user: {} };

    const reducer = (state = null, action) => {
        switch (action.type) {
            case FETCH_USER:
                return {
                    ...state,
                    user: action.payload || false,
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Header />
        </StateProvider>
    );
}

export default App;
