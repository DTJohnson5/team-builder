import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import './styles.css';

function App() {

  const [member, setMember] = useState ({
    Member: "",
    Role: "",
    Contact: ""
  });

const [team, setTeam] = useState([]);

function handleChange(e) {
  e.preventDefault();
  setMember({...member, [e.target.name]:e.target.value});
}

function handleSubmit(e) {
  e.preventDefault();
  setMember({Member: "", Role: "", Contact: ""});
}

function addMember(e) {
  if (member.name === "" || member.role === "" || member.email === "" || !member.email.includes("@")) {
    e.preventDefault();
  } else {
    setTeam([...team, member]);
  }
}

  return (
    <div className="App">
      <h1>Come join our team!</h1>
      <Form team={team}
      member={member}
      Submit={handleSubmit}
      Change={handleChange}
      Add={addMember}
      />
      {team.map((member, i) => (
        <section className="memberCard" key={i}>
          <h1>{member.name}</h1>
          <h1>{member.role}</h1>
          <h1>{member.email}</h1>
        </section>
      ))}
      
    </div>
  );
}

export default App;