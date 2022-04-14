import React, { useState } from "react";
import PageLayout from "../PageLayout";
import { Input } from "../common/Input";
import { PasswordInput } from "../common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

export const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  function handleInputChange(e) {
    e.preventDefault();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="Username"
          value={formFields.username}
          onChange={handleInputChange}
          type="text"
        />
        <PasswordInput
          name="password"
          value={formFields.password}
          onChange={handleInputChange}
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
