const Seeker = (props) => {
    const jobs = props.jobs;
    return (
        <div className="card1">
            {
                jobs && jobs.map(
                    job => (
                        <div className="job-preview">
                            <p>Location = {job.location}</p>
                            <p>Per Day Wage = {job.payPerDay}</p>
                            <p>working Hours = {job.workingHours}</p>
                        </div>
                    )
                )
            }
             
        </div>
    );
}

export default Seeker;