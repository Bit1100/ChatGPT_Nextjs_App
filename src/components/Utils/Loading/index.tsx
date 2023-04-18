import { ClipLoader } from "react-spinners";
import sysColor from "@/system/config/color";
import { LoaderWrapper } from "./Loading.styles";

const PageLoading = () => {
  return (
    <>
      <LoaderWrapper>
        <ClipLoader
          color={sysColor.primary}
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </LoaderWrapper>
    </>
  );
};

export default PageLoading;
