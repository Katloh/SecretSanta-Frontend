import React from 'react';
import './App.css';
import {ParticipantForm} from "./components/ParticipantForm";

function App() {

    return (

        <div className="App">

            <Header/>

            <div className="container">
                <ParticipantForm onEntryAdded={() => {
                }}/>
            </div>
        </div>
    );

}

function Header() {
    return <div className="jumbotron">
        <div className="container">
            <h2>SecretSanta</h2>
        </div>
    </div>;
}

export default App;
