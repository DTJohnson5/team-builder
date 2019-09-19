import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({ Member: "", Role: "", Contact: "" });

  const update = event => {
    setMember({ ...member, [event.target.field]: event.target.value });
  };

  const formSubmit = event => {
    event.preventDefault();

    const newMember = {
      ...member
    };
    props.addMember(newMember);
    setMember({ Member: "", Role: "", Content: "" });
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="info">
        <label htmlFor="name">Member</label>
        <input field="name" type="text" onChange={update} value={member.name} />
      </div>

      <div className="info">
        <label htmlFor="role">Role</label>
        <input field="role" type="text" onChange={update} value={member.role} />
      </div>

      <div className="info">
        <label htmlFor="email">Contact</label>
        <input
          field="email"
          type="text"
          onChange={update}
          value={member.email}
        />
      </div>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;
