import Image from "next/image";
import Link from "next/link";
import {
  FormWrapper,
  Logo,
  TitleWrapper,
  Heading,
  Span,
  Label,
  SubmitButton,
  FormControlWrapper,
  FormControl,
  Form,
} from "../Authentication.styles";
import sys_cnf from "@/system/config/config";
import getUser from "@/api/auth/getUser";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { handleToast } from "@/helpers";

const Signup = () => {
  const router = useRouter();
  const sys_config = sys_cnf();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [otpScreen, setOtpScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  const signupInit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      if (!!isChecked) {
        setTimeout(() => {
          setIsLoading(false);
          handleToast("Signup is not Acceptable", "error");
        }, 1000);
      } else {
        setIsLoading(false);
        handleToast(
          "Please accept the terms and conditions to proceed.",
          "error"
        );
      }
    } catch (error) {
      setIsLoading(false);
      handleToast("Oops! Something went wrong", "error");
    }
  };

  useEffect(() => {
    var GetUser = getUser();
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
          <Heading>SIGNUP</Heading>
          <Span>Enter your Email and Password</Span>
        </TitleWrapper>
        {otpScreen != 1 && (
          <Form onSubmit={signupInit}>
            <FormControlWrapper>
              <Label htmlFor="name">Name</Label>
              <FormControl
                id="name"
                type="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <Label htmlFor="email">Email</Label>
              <FormControl
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <Label htmlFor="password">Password</Label>
              <FormControl
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControlWrapper>

            <FormControlWrapper style={{ flexDirection: "row" }}>
              <FormControl
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ width: "unset" }}
              />
              <Span>
                I accept the
                <Link href="#" target="_blank">
                  <span> terms & conditions</span>
                </Link>
              </Span>
            </FormControlWrapper>
            <Link href="/login">
              <Span>Already Have an Account?</Span>
            </Link>
            <SubmitButton disabled={isLoading}>
              {isLoading ? "Please Wait.." : "Signup"}
            </SubmitButton>
          </Form>
        )}
      </FormWrapper>
      <ToastContainer />
    </>
  );
};

export default Signup;
