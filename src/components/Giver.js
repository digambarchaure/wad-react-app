const Giver = (props) => {  
    const users = props.users;
    return (
        <div className="card1">
            {
                users.map((job) => (
                    <div className="job-preview">
                    <p>Name of Applicant : {job.name}</p>
                    <p>Email : {job.email}</p>
                    <p>Contact No. : {job.phoneno}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Giver;