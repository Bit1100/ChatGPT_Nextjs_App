import { BsCurrencyDollar, BsCurrencyRupee } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { ToastContainer } from "react-toastify";
import sys_cnf from "@/system/config/config";

import {
  Card,
  CardTop,
  CardBottom,
  Heading,
  Span,
  Div,
  Featured,
  PriceWrapper,
  Price,
  Tagline,
  Wrapper,
  Button,
} from "./PlanGPT.styles";
import { useState } from "react";
import { handleToast } from "@/helpers";

const CardItem = ({
  card: {
    uid,
    name,
    tag,
    tagline,
    price,
    featured,
    selling_price,
    currency,
    type,
    duration,
    credit,
  },
}) => {
  const sys_config = sys_cnf();
  const [btnText, setBtnText] = useState(false);

  const handleBuyNow = async (e) => {
    e.preventDefault();
    handleToast("Coming Soon", "loading", 1500);
  };

  return (
    <>
      <Card>
        <CardTop>
          <Heading>{name}</Heading>
          <PriceWrapper>
            {currency == "usd" ? (
              <BsCurrencyDollar size={20} style={{ marginBottom: "2rem" }} />
            ) : (
              <BsCurrencyRupee size={20} style={{ marginBottom: "2rem" }} />
            )}
            <Price>{price}</Price>
            <Span
              style={{
                fontSize: "3rem",
                fontWeight: "600",
                marginLeft: ".4rem",
              }}
            >
              {selling_price}
            </Span>
          </PriceWrapper>
          <Span style={{ fontSize: "2rem", fontWeight: "500" }}>{tag}</Span>
          <Tagline>{tagline}</Tagline>
        </CardTop>
        <CardBottom>
          <Wrapper>
            <Div>
              <TiTick
                color="green"
                size={20}
                style={{ marginBottom: "0rem" }}
              />
              <Span>{duration} days validity</Span>
            </Div>
            <Div>
              <TiTick
                color="green"
                size={20}
                style={{ marginBottom: "0rem" }}
              />
              <Span>{credit} Credits Provided</Span>
            </Div>
            <Div>
              <TiTick
                color="green"
                size={20}
                style={{ marginBottom: "0rem" }}
              />
              <Span>{type ? "Unlimited Validity" : ""} </Span>
            </Div>
          </Wrapper>
          <Button disabled={btnText} onClick={handleBuyNow}>
            {btnText ? "Proceeding..." : "Buy Now"}
          </Button>
        </CardBottom>
        <Featured featured={featured}>Featured</Featured>
      </Card>
      <ToastContainer pauseOnFocusLoss={false} />
    </>
  );
};

export default CardItem;
