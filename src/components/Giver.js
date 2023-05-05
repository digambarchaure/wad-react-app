const Giver = (props) => {  
    const users = props.users;
    return (
        <div className="card1">
            {
                users && users.map((job) => (
                    <div className="job-preview">
                    <h3>Name of Applicant : {job.name}</h3>
                    <h3>Email : {job.email}</h3>
                    <h3>Contact No. : {job.phoneno}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default Giver;