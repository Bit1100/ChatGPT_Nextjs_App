import {
  Header,
  BrandWrapper,
  Hamburger,
  NavbarBrand,
  Div1,
  Div2,
  Div3,
  Title,
  Span,
  Warning,
  AvatarWrapper,
  LogoutModal,
  ModalBody,
  List,
  Overlay,
  Button,
  ListWrapper,
  BtnWrapper,
} from "./navbar.styles";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiErrorWarningLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { sidebartoggle, useAppDispatch, useAppSelector } from "@/store";
import logoutAPI from "@/api/auth/logOutUser";
import { ToastContainer } from "react-toastify";
import sys_cnf from "@/system/config/config";
import getUserAPI from "@/api/auth/getUser";
import { useState, useEffect } from "react";
import Avatar from "react-avatar";
import Cookies from "js-cookie";
import { handleToast } from "@/helpers";

const Navbar = () => {
  const sys_config = sys_cnf();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { remainingCredit } = useAppSelector((state) => state.query.response);

  const [isOpen, setIsOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const [GetUser, setUser] = useState(null);
  const [credits, setCredits] = useState("");

  const getCookie = () => {
    Cookies.get("credits") !== undefined &&
      Cookies.get("credits") !== "" &&
      setCredits(Cookies.get("credits"));
  };

  const setCookie = async () => {
    Cookies.set("credits", 500, {
      expires: 30,
      sameSite: "strict",
    });

    getCookie();
  };

  /* Execute on Login Success */
  useEffect(() => {
    setUser(getUserAPI());
    if (Cookies.get("credits") === undefined || Cookies.get("credits") === "") {
      setCookie();
    }
    getCookie();
  }, [getUserAPI()?.status]);

  /* Execute on Query */
  useEffect(() => {
    if (remainingCredit === null || remainingCredit === "") {
      getCookie();
      return;
    }

    Cookies.set("credits", remainingCredit, {
      expires: 30,
      sameSite: "strict",
    });
    getCookie();
  }, [remainingCredit]);

  const userFirstLatter = (
    GetUser?.status == 1 ? GetUser.data.user.fname : "User"
  ).slice(0, 1);

  const handleCancel = () => {
    setIsLogout(false);
    setIsOpen(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    setIsLogout(false);
    setIsOpen(false);

    if (GetUser.status == 1) {
      try {
        const logout = await logoutAPI();
        if (logout.status == 1) {
          setCredits("");
          router.push("/login");
        } else {
          handleToast(logout.message, "error");
        }
      } catch (error) {
        handleToast(sys_config.error_message, "error");
      }
    }
  };

  return (
    <>
      <Header>
        <BrandWrapper>
          <Hamburger
            onClick={() => {
              dispatch(sidebartoggle());
            }}
          >
            <GiHamburgerMenu size="2.8rem" />
          </Hamburger>
          <NavbarBrand onClick={() => router.push("/")}>
            <Image
              src={sys_config.site_config.shortLogo}
              alt="Brand Logo"
              width={35}
              height={35}
            />
          </NavbarBrand>
        </BrandWrapper>
        <Div1>
          <Title>Dashboard</Title>
          <span>
            <small>Home | Dashboard</small>
          </span>
        </Div1>
        <Div2 credits={!!GetUser?.data?.lid && credits !== "" ? +credits : ""}>
          <Warning>
            <RiErrorWarningLine
              size="3rem"
              fill={
                +credits < 100
                  ? "#F1416C"
                  : +credits < 500
                  ? "#FFC700"
                  : "#50CD89"
              }
            />
            <p>
              <Span credits={+credits}>{!!credits ? credits : "0"}</Span>{" "}
              Credits Remaining
              <Span>
                <Link href="/plan">Buy Credits</Link>
              </Span>
            </p>
          </Warning>
        </Div2>
        <Div3>
          {GetUser?.status == 1 ? (
            <AvatarWrapper
              onClick={() => {
                if (!!GetUser?.data?.lid) {
                  setIsOpen((prevState) => !prevState);
                }
              }}
            >
              <Avatar name={userFirstLatter} size="40" round={true} />
            </AvatarWrapper>
          ) : (
            <></>
          )}
          <ListWrapper isOpen={isOpen}>
            <List
              onClick={() => {
                router.push("/plan");
                setIsOpen(false);
              }}
            >
              Buy Credits
            </List>
            <List onClick={() => setIsLogout(true)}>Logout</List>
          </ListWrapper>
          <Overlay
            isLogout={isLogout}
            onClick={() => {
              setIsOpen(false);
              setIsLogout(false);
            }}
          >
            <LogoutModal isLogout={isLogout}>
              <ModalBody>
                <Span style={{ marginLeft: "unset" }}>
                  Do you want to Logout?
                </Span>
                <BtnWrapper>
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button onClick={handleLogout}>Ok</Button>
                </BtnWrapper>
              </ModalBody>
            </LogoutModal>
          </Overlay>
        </Div3>
      </Header>
      <ToastContainer />
    </>
  );
};

export default Navbar;
