import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import "./Login.scss";
import Image from "../../components/SpanImage/index";
import FormGroupInput from "../../components/FormGroupInput";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../../assets/Logo.png";

export default function Login() {
  const formRef = useRef(null);
  const history = useHistory();
  const { login } = useAuth();
  const handleSubmitForm = (e) => {
    try {
      login(e);
      history.push("/home");
    } catch (error) {}
  };
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="logo">
          <Image endereco={Logo} />
        </div>
        <Form className="mt-1" ref={formRef} onSubmit={handleSubmitForm}>
          <FormGroupInput name="username" placeholder="Username..." />
          <FormGroupInput
            name="password"
            type="password"
            placeholder="Password..."
          />
          <Button type="submit" color="secondary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
