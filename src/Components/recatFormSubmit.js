// used useSate 

import React, { useState } from 'react';

const RecatFormSubmit = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Object destructuring
  const { username, email, password, confirmPassword } = data;

  // onChange
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // onSubmit
  const submitHandler = e => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(data);
    } else {
      console.log("Passwords are not matching");
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={changeHandler}
          /><br/>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={changeHandler}
          /><br/>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={changeHandler}
          /><br/>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={changeHandler}
          /><br/>
          <input type="submit" value="Submit" /><br/>
        </form>
      </center>
    </div>
  );
};

export default RecatFormSubmit;
