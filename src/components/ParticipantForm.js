import React, {useState} from "react";
import {putEntry} from "../services/SecretsantaAPI";
import {Participants} from "./Participants";

export function ParticipantForm({onEntryAdded: onRoundStartet}) {

    const initialParticipants = []

    const [formState, setFormState] = useState(initialParticipants)
    const [isSent, setSended] = useState(false)

    function handleChange(event) {
        const target = event.target;
        const value = target.name
    }

    function addParticipant(event) {
        event.preventDefault()

        let newState = Array.from(formState)
        newState.push({})
        setFormState(newState)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await putEntry(formState)
        setSended(true)
        onRoundStartet()

    }

    function handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;

        let newState = formState
        newState[id] = value

        setFormState(newState);
    }

    if (isSent === true) {
        return <div className="alert alert-success" role="alert">
            Hat alles gut funktioniert!
        </div>

    } else {

        return <form className="form-vertical">

            <Participants participants={formState}
                          onFormChange={handleChange}
            />
            <button className="btn btn-success" id="addrow" value="Add Participant" onClick={addParticipant}>Add
                Participant
            </button>
            <hr/>

            <div className="rows">


                <div className="col-sm-12 col-sm-offset-2">
                    <button disabled className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Create Secret Santa
                        Round
                    </button>
                </div>
            </div>
        </form>
    }
}