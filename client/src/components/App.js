import React from 'react';
import './App.css';
import { Responsive } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from './HomePage';
import SideBar from './SideBar';
import SiteContent from './SiteContent';
import PostJob from './PostJob';
import ContactUs from './ContactUs';
import UserProfile from './UserProfile';

import { StateProvider } from '../state';

import Header from './Header';
import { FETCH_USER } from '../actions/types.js';

const MainContainer = styled.div`
    display: Flex;
    flex-direction: row;
    align-items: stretch;
`;

const MainContentContainer = styled.div`
    flex: 3;
    overflow: scroll;
`;

const App = props => {
    const initialState = {
        searchValue: '',
        user: {},
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'updateSearch':
                let cleanedSearch = action.payload.replace(
                    /[^a-zA-Z 0-9]/g,
                    ''
                );

                return {
                    ...state,
                    searchValue: cleanedSearch,
                };

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
            <BrowserRouter>
                <MainContainer>
                    <SideBar />
                    <Responsive as={MainContentContainer} minWidth={768}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/contact-us" component={ContactUs} />
                        <Route exact path="/post-job" component={PostJob} />
                        <Route
                            exact
                            path="/:categorySlug/:nameSlug"
                            component={SiteContent}
                        />
                        <Route
                            exact
                            path="/user-profile"
                            component={UserProfile}
                        />
                    </Responsive>
                </MainContainer>
            </BrowserRouter>
        </StateProvider>
    );
};

export default App;
