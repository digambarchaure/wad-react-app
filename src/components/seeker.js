const Seeker = (props) => {
    const jobs = props.jobs;
    return (
        <div className="card1">
            {
                jobs.map(
                    job => (
                        <div className="job-preview">
                            <h5>Location = {job.location}</h5>
                            <h5>Per Day Wage = {job.payPerDay}</h5>
                            <h5>working Hours = {job.workingHours}</h5>
                        </div>
                    )
                )
            }
             
        </div>
    );
}

export default Seeker;