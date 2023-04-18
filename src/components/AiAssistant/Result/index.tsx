import {
  Result,
  Answers,
  Heading,
  Content,
  Span,
  CopyWrapper,
  Description,
  Wrapper,
  Info,
} from "./Ressult.styles";
import { useAppSelector } from "@/store";
import { BeatLoader } from "react-spinners";
import { useState, useEffect, useRef } from "react";
import sysColor from "@/system/config/color";
import Linkify from "react-linkify";
import { MdOutlineContentCopy } from "react-icons/md";

const ResultComponent = () => {
  const response = useAppSelector((state) => state.query.response);
  const [copyName, setCopyName] = useState("Copy");
  const containerRef = useRef(null);

  const [typingResponseText, setTypingResponseText] = useState("");

  let responseText;

  const copyToClipboard = async (text) => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      setCopyName("Copied!");
      navigator.clipboard.writeText(text);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setCopyName("Copy");
          resolve();
        }, 3000);
      });
    }
  };

  const isContainChangeableItems = (text) => {
    // Email pattern
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

    // Phone number pattern
    const phonePattern = /(\+?\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;

    // Link pattern
    const linkPattern = new RegExp(
      "(http|https)://(?:[\\w-]+\\.)+[\\w-]+(?:\\:\\d+)?(?:/[\\w\u{0080}-\u{FFFF}.-])(?:\\?[\\w\u{0080}-\u{FFFF}.=-])?(?:#[\\w\u{0080}-\u{FFFF}.-])?|\\b(?:[\\w-]+\\.)+[\\w-]+(?:\\:\\d+)?\\b|(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})(?::\\d+)?"
    );

    return emailPattern.test(text) ||
      phonePattern.test(text) ||
      linkPattern.test(text)
      ? 1
      : 0;
  };

  const IsContainChangeableItems = isContainChangeableItems(
    response.status == 1 ? response?.data : response?.message
  );

  const responseTextNote =
    IsContainChangeableItems == 1
      ? "\n\nNote: As a large language model trained on 100B+ parameters, I understand that some of the information such as email addresses, phone numbers, or links that I have been trained on may no longer be accurate in today's rapidly changing world."
      : "";

  if (responseText != undefined || responseText != null || responseText != "") {
    responseText =
      (response.status == 1 ? response.data : response.message) +
      responseTextNote;
  }

  /* Initialize the TypingResponseText */
  useEffect(() => {
    if (response?.data == "" && response?.message == "") {
      setTypingResponseText("");
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "center",
      });
    }
  }, [response]);

  /* Scroll the window as content increases */
  useEffect(() => {
    // Total height of the document
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    // InnerWeight of the window
    const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    const scrollTop = Math.ceil(scrollHeight - clientHeight);

    // Scroll window by scrollTop
    window.scrollBy({
      top: scrollTop,
      behavior: "smooth",
    });
  }, [typingResponseText]);

  /* Type the responseText letter by letter */
  useEffect(() => {
    if (response.status == 1) {
      if (
        responseText == undefined ||
        responseText == null ||
        responseText == "" ||
        responseText === typingResponseText
      ) {
        return;
      }

      const timer = setTimeout(() => {
        setTypingResponseText(
          (prevText) => prevText + responseText[prevText.length]
        );
      }, 16);

      return () => clearTimeout(timer);
    }
  }, [typingResponseText, responseText]);

  return (
    <Result>
      <Answers ref={containerRef}>
        <Heading>Choose from the results</Heading>
        <Content>
          {/* Copy to Clipboard */}
          {response?.data.length > 0 &&
            response?.message.length > 0 &&
            response.status == 1 && (
              <CopyWrapper
                onClick={() => {
                  copyToClipboard(response?.data);
                }}
              >
                <Span>{copyName}</Span>
                <MdOutlineContentCopy
                  style={{
                    marginLeft: "5px",
                  }}
                />
              </CopyWrapper>
            )}

          {/* Loader */}
          {response?.data.length <= 0 && response?.message.length <= 0 && (
            <Wrapper style={{ padding: "1.5rem", fontSize: "1.5rem" }}>
              <Info>
                We are getting your result ready in few seconds. Please Wait..
              </Info>
              <BeatLoader
                color={sysColor.primary}
                loading={true}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Wrapper>
          )}

          {/* Response Data */}
          {response.status == 1 ? (
            <Linkify
              componentDecorator={(decoratedHref, decoratedText, key) => (
                <a
                  href={decoratedHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={key}
                >
                  {decoratedText}
                </a>
              )}
            >
              <Description>{typingResponseText}</Description>
            </Linkify>
          ) : (
            <Info>
              {response.status == 2 ? response?.data : response?.message}
            </Info>
          )}
        </Content>
      </Answers>
    </Result>
  );
};

export default ResultComponent;
