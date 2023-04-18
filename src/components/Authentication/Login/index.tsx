import Image from "next/image";
import Link from "next/link";
import sys_cnf from "@/system/config/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import getUser from "@/api/auth/getUser";
import loginAPI from "@/api/auth/login";

import {
  FormWrapper,
  Logo,
  ActionWrapper,
  TitleWrapper,
  Heading,
  Span,
  Label,
  SubmitButton,
  FormControlWrapper,
  FormControl,
  Form,
} from "../Authentication.styles";
import { handleToast } from "@/helpers";

const Login = () => {
  const sys_config = sys_cnf();
  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: "surajkeshari@fake.com",
    password: "hello123",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const loginAuth = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      var login = await loginAPI(inputs.email, inputs.password);
      if (login.status == 1) {
        setIsLoading(false);
        router.push("/");
      } else {
        setIsLoading(false);
        handleToast(login.message, "error");
      }
    } catch (error) {
      setIsLoading(false);
      handleToast(sys_config.error_message, "error");
    }
  };

  useEffect(() => {
    let GetUser = getUser();
    if (GetUser.status == 1) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <FormWrapper>
        <Logo>
          <Image
            src={sys_config.site_config.logo}
            alt={sys_config.site_config.name}
            style={{
              maxWidth: "100px",
              maxHeight: "50px",
            }}
          />
        </Logo>
        <TitleWrapper>
          <Heading>LOGIN</Heading>
          <Span>Enter your email and password</Span>
        </TitleWrapper>
        <Form onSubmit={loginAuth}>
          {/* Email */}
          <FormControlWrapper>
            <Label htmlFor="email">Email</Label>
            <FormControl
              id="email"
              type="email"
              name="email"
              defaultValue={inputs.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
          </FormControlWrapper>

          {/* Password */}
          <FormControlWrapper>
            <Label htmlFor="password">Password</Label>
            <FormControl
              id="password"
              type="password"
              name="password"
              defaultValue={inputs.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
          </FormControlWrapper>

          <ActionWrapper>
            <Link href="/recovery">
              <Span>Forget Password?</Span>
            </Link>
            <Link href="/signup">
              <Span>Create New Account</Span>
            </Link>
          </ActionWrapper>
          <SubmitButton disabled={isLoading}>
            {isLoading ? "Please Wait.." : "Login"}
          </SubmitButton>
        </Form>
      </FormWrapper>
      <ToastContainer />
    </>
  );
};

export default Login;
