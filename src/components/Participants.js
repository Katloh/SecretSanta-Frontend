import React from "react";

export function Participants({participants, onFormChange: onFormChange}) {
    return <>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">EMailAddress</th>
            </tr>
            </thead>
            <tbody>

            {participants.map(participant => {
                return <Participant
                    onFormChange={onFormChange}
                    key={participant.name + participant.email}
                />
            })}

            </tbody>

        </table>
    </>;
}

function Participant({onFormChange}) {
    return <tr>
        <th className="form-group mx-sm-3 mb-2">
            <input type="text" name="name" className="form-control" placeholder="Name" onChange={onFormChange}/>
        </th>
        <th className="form-group mx-sm-3 mb-2">
            <input type="mail" name="eMail" className="form-control" placeholder="EMail" onChange={onFormChange}/>
        </th>
        <th className="form-group mx-sm-3 mb-2">
            <button type="submit" className="btn btn-primary mb-2">Delete</button>
        </th>
    </tr>
}



