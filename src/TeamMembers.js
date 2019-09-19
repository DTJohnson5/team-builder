import React, { useState } from 'react';

const TeamMember = props => {

    return (
    <div>
      {props.team.map(member => (
        <div key={member.id}>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
          <p>{member.email}</p>
          <button>Apply Changes</button>
        </div>
      ))}
    </div>
  );
};

export default TeamMember; 