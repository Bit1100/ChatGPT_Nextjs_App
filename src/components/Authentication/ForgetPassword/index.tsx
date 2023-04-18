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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import getUser from "@/api/auth/getUser";
import { handleToast } from "@/helpers";

const ForgetPassword = () => {
  const sys_config = sys_cnf();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpScreen, setOtpScreen] = useState(0);

  const forgotPassword = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      setTimeout(() => {
        setIsLoading(false);
        handleToast("Forget Password is not supported", "error");
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      handleToast(sys_config.error_message, "error");
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
          <Heading>Forget Password</Heading>
          <Span>Enter your Email to reset Account Password</Span>
        </TitleWrapper>

        {/* Forget Password Screen  */}
        {otpScreen != 1 && (
          <Form onSubmit={forgotPassword}>
            {/* Email Reset  */}
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

            <Link href="/login">
              <Span>Back to Login</Span>
            </Link>
            <SubmitButton disabled={isLoading}>
              {isLoading ? "Please Wait.." : "Send OTP"}
            </SubmitButton>
          </Form>
        )}
      </FormWrapper>
      <ToastContainer />
    </>
  );
};

export default ForgetPassword;
