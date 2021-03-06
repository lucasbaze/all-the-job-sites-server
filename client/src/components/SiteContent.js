import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

import ExternalLink from './ExternalLink';
import { sitesBySlug } from '../sites';

import { useStateValue } from '../state';

//console.log(sitesBySlug);

const StyledLoaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`;

const StyledCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SiteContent = props => {
    const [visible, setVisible] = useState(true);
    const { categorySlug, nameSlug } = props.match.params;
    const site = sitesBySlug[categorySlug][nameSlug]; // grab the site we want

    const [{ searchValue }, dispatch] = useStateValue();

    // fancy shit
    useEffect(() => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 1000);
    }, [site]);

    return (
        <StyledLoaderContainer>
            {visible ? (
                <StyledCover>
                    <Loader inline active inverted size="large" />
                </StyledCover>
            ) : null}
            {site.iframe_able ? (
                <iframe
                    title="currentSite"
                    src={
                        searchValue != ''
                            ? site.search_url.replace(/%q/g, searchValue)
                            : site.site_url
                    }
                />
            ) : (
                <ExternalLink site={site} />
            )}
        </StyledLoaderContainer>
    );
};

export default SiteContent;
