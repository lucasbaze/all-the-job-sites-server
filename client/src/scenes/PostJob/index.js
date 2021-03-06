import React, { useEffect } from 'react';

import { Container, Header } from 'semantic-ui-react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import FeaturedJob from '../../components/FeaturedJob';

import { StyledTypeFormContainer } from './Styled';

const PostJob = () => {
    useEffect(() => {
        window.gtag('event', 'navigate', {
            event_category: 'navigation',
            event_label: 'post job',
        });
    }, []);

    return (
        <Container fluid style={{ padding: 15 }}>
            <Header as="h1" content="Post a Job" style={{ marginTop: 15 }} />
            <Header
                as="h3"
                content="How Your Job Listing Will Look"
                style={{ marginTop: 15 }}
            />
            <FeaturedJob
                logo="https://t0jnhu9fw1-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/12743742_799537270151613_7802811979984674555_n1.png"
                url="https://jobspresso.co/job/data-science-subject-matter-expert-3-2/"
                company="Udacity"
                location="Remote, US"
                title="Software Engineer, Devop"
                tags={['devops', 'python', 'AWS', 'postgreSQL']}
            />
            <StyledTypeFormContainer>
                <ReactTypeformEmbed
                    url="https://lucasbazemore.typeform.com/to/xu9lJZ"
                    popup={false}
                    style={{ borderRadius: 20 }}
                />
            </StyledTypeFormContainer>
        </Container>
    );
};

export default PostJob;
