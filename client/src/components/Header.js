import React, { useEffect } from 'react';
import { useStateValue } from '../state';
import * as actions from '../actions';
import { FETCH_USER } from '../actions/types.js';
import axios from 'axios';
import _ from 'lodash';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        axios.get('/api/current_user').then(response => {
            console.log(response.data);
            dispatch({ type: FETCH_USER, payload: response.data });
        });
    }, []);

    return (
        <>
            <h1>Hello World!</h1>
            <p>{user.email || 'not logged in'}</p>
            {!_.isEmpty(user) ? (
                <a href="/api/logout">Log out</a>
            ) : (
                <a href="/auth/google">Login with google</a>
            )}
        </>
    );
};

export default Header;
