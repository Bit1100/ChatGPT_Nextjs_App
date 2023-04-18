import { PlanSection, Cards } from "./PlanGPT.styles";
import CardItem from "./Card";
import { useMemo } from "react";
import { planCards } from "@/data";

const PlanGPT = () => {
  const reorderArr = useMemo(() => {
    if (!planCards) return [];

    let newArr = planCards.slice().reverse();
    newArr = [newArr[0], newArr[newArr.length - 1], newArr[1]];
    return newArr;
  }, [planCards]);

  return (
    <>
      <PlanSection>
        <Cards>
          {planCards.length ? (
            <>
              {reorderArr?.map((card) => (
                <CardItem key={card?.id} card={card} />
              ))}
            </>
          ) : (
            /* Add Section Showing You're Offline */
            <></>
          )}
        </Cards>
      </PlanSection>
    </>
  );
};

export default PlanGPT;
function usememo(arg0: (arr: any) => any[], arg1: any[]) {
  throw new Error("Function not implemented.");
}
