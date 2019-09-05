import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { Header, Segment, Form } from 'semantic-ui-react';

const SavedJobs = props => {
    const [jobLink, setJobLink] = useState('');
    const [savedJobs, setSavedJobs] = useState([]);

    const handleChange = e => {
        setJobLink(e.target.value);
    };

    const handleSubmit = () => {
        axios.post('/api/jobs', { jobLink: jobLink });

        //Just add the job link to the saved jobs so it displays in the list
        setSavedJobs([
            ...savedJobs,
            { link: jobLink, status: 'new', created: new Date() },
        ]);

        setJobLink('');
    };

    useEffect(() => {
        axios
            .get('/api/jobs')
            .then(response => {
                if (!response.status == 200) {
                    throw new Error('Failed to fetch the saved Jobs');
                }
                return response.data;
            })
            .then(data => {
                setSavedJobs(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Header as="h1" content="Add Job" />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Field
                        style={{
                            flex: 1,
                        }}
                    >
                        <input
                            name="jobLink"
                            type="text"
                            value={jobLink}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Button
                        type="submit"
                        color="green"
                        content="Save Job Link"
                    />
                </Form.Group>
            </Form>
            <Header as="h1" content="Saved Jobs" />
            {savedJobs.map(job => {
                return <p>{job.link}</p>;
            })}
        </>
    );
};

export default SavedJobs;
