import React, { useState } from 'react';
import UserFetchJobs from './UseFetchJobs';
import Job from './Job';
import JobPagination from './JobPagination';
import { Container } from 'react-bootstrap';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = UserFetchJobs(params, page);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Github Jobs</h1>
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error. try refreshing</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
