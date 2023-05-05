const Seeker = (props) => {
    const jobs = props.jobs;
    return (
        <div className="card1">
            {
                jobs && jobs.map(
                    job => (
                        <div className="job-preview">
                            <h3>Location = {job.location}</h3>
                            <h3>Per Day Wage = {job.payPerDay}</h3>
                            <h3>working Hours = {job.workingHours}</h3>
                        </div>
                    )
                )
            }
             
        </div>
    );
}

export default Seeker;