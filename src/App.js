import React, {useState} from 'react';
import './App.css';
import TeamMember from "./TeamMembers";
import Form from "./Form";
import './styles.css';

function App() {

  const [team, setTeam] = useState ([{
    Member: 'DT Johnson',
    Role: "Unknown",
    Contact: "i❤u@3000.com"
  }
]);

  const addMember = person => {
    const newMember = {
      Member: person.name,
      Role: person.role,
      Contact: person.email
    };
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <h1>Come join our team!</h1>
      <Form addMember = {addMember}/>
      <TeamMember team = {team}/>
    </div>
  );
}

export default App;