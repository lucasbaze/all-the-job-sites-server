import React from 'react';
import { useStateValue } from '../state';
import _ from 'lodash';

import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const UserProfile = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div>
            {_.isEmpty(user) ? (
                <Header as="h1" content="Please Login" />
            ) : (
                <>
                    <img src={user.photo} width="200" height="200" />
                    <h1>{user.displayname}</h1>
                    <p>{user.email}</p>
                </>
            )}
        </div>
    );
};

export default UserProfile;
