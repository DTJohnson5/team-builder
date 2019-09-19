import React from "react";
import "./App.css";
import "./styles.css";

function Form ({member, handleChange, handleSubmit, addMember }) {
  return (
    <section className = "form">
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          <br/>
          Name: {""}
          <input
          name='name'
          type='text'
          value={member.name}
          // onChange={e => handleChange(e)}
          />
          Role: {""}
          <input
          name='role'
          type='text'
          value={member.role}
          // onChange={e => handleChange(e)}
          />
          Contact: {""}
          <input
          name='email'
          type='email'
          value={member.email}
          // onChange={e => handleChange(e)}
          />
        </label>
        <button onClick={addMember}>Add Member</button>
      </form>
    </section>
  )
}

export default Form;
