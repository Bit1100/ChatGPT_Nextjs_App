import PlanGPT from "@/components/PlanGPT";
import { withAuth } from "@/utils/withAuth";

const PlanGPTPage = () => {
  return <PlanGPT />;
};

export default withAuth(PlanGPTPage);
