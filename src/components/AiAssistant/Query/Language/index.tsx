import { useEffect, useMemo, useReducer, useState } from "react";
import aptGptAPI from "@/api/service/languageModel/aptGPT";
import { BiCaretRight } from "react-icons/bi";
import {
  useAppSelector,
  setResponse,
  useAppDispatch,
  setToggle,
  setFormQuery,
  setSettingsQuery,
  setLanguageQuery,
} from "@/store";
import sys_cnf from "@/system/config/config";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

import {
  Language,
  Text,
  Icon,
  Options,
  Selected,
  ListBox,
  List,
  Actions,
  Button,
} from "./Language.styles";
import { handleToast, stringifyQuery } from "@/helpers";
import { useRouter } from "next/router";

const LanguageComponent = () => {
  const sys_config = sys_cnf();
  const dispatch = useAppDispatch();

  const { queryParams, id } = useAppSelector((state) => state.dcards.card);
  const queryObject = useAppSelector((state) => state.query.query);
  const [active, setActive] = useState("English");
  const [isOpen, setIsOpen] = useState(false);
  const [create, setCreate] = useState(false);
  const [btnText, setBtnText] = useState(false);
  const [credits, setCredits] = useState("");

  const router = useRouter();

  const languageOptions = useMemo(
    () => [
      {
        id: "1",
        text: "Albania",
      },
      {
        id: "2",
        text: "Arabic",
      },
      {
        id: "3",
        text: "Bulgarian",
      },
      {
        id: "4",
        text: "Chinese",
      },
      {
        id: "5",
        text: "Dutch",
      },
      {
        id: "6",
        text: "English",
      },
      {
        id: "7",
        text: "Greek",
      },
      {
        id: "8",
        text: "Hindi",
      },
    ],
    []
  );

  const handleSelect = (text) => {
    setActive(text);
    setIsOpen(false);
    dispatch(
      setLanguageQuery({
        Language: text,
      })
    );
  };

  /* Execute on Login Success */
  useEffect(() => {
    Cookies.get("credits") !== undefined &&
      Cookies.get("credits") !== "" &&
      setCredits(Cookies.get("credits"));
  }, [btnText]);

  const handlePostRequest = async (e) => {
    e.preventDefault();

    if (!create) {
      setCreate(true);
      dispatch(setToggle(true));
    } else {
      setBtnText(true);

      /* Checking if user has credits to query */
      try {
        if (credits !== "" && +credits === 0) {
          throw new Error("You don't have enough credits");
        }
      } catch (err) {
        handleToast(err.message, "error");
        setTimeout(() => {
          router.push("/plan");
        }, 3000);
        return;
      }

      /* Check if user has credits to query */
      const query = stringifyQuery(queryParams, queryObject);

      console.log(query);
      dispatch(setResponse({ data: "", status: 0, message: "", code: null }));
      try {
        var gptResponse = await aptGptAPI(query, id);
        if (gptResponse.status == 1) {
          setCreate(false);
          dispatch(setFormQuery(null));
          dispatch(setToggle(false));
          setBtnText(false);
          dispatch(setResponse(gptResponse));
        } else {
          setCreate(false);
          dispatch(setToggle(false));
          dispatch(setResponse(gptResponse));
          setBtnText(false);
        }
      } catch (error) {
        setCreate(false);
        dispatch(setToggle(false));
        dispatch(setResponse(gptResponse));
        setBtnText(false);
        handleToast(sys_config.error_message, "error");
      }
    }
  };

  return (
    <>
      <Language>
        <Options>
          <Selected onClick={() => setIsOpen((prevState) => !prevState)}>
            <Text>{active}</Text>
          </Selected>
          <ListBox isOpen={isOpen}>
            {languageOptions.map(({ id, text }) => (
              <List
                key={id}
                active={active === text}
                onClick={() => handleSelect(text)}
              >
                <Text>{text}</Text>
              </List>
            ))}
          </ListBox>
        </Options>
        <Actions>
          <Button disabled={btnText} onClick={handlePostRequest}>
            <Text>
              {!create ? "Next" : btnText ? "Please Wait.." : "Create"}
            </Text>
            <Icon>
              <BiCaretRight style={{ marginBottom: "-.4rem" }} />
            </Icon>
          </Button>
        </Actions>
      </Language>
      <ToastContainer />
    </>
  );
};

export default LanguageComponent;
