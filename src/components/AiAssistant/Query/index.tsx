import { Query } from "./Query.styles";
import Options from "./Options";
import FormControlWrapper from "./FormControlWrapper";
import Settings from "./Settings";
import Language from "./Language";

const QueryComponent = () => {
  return (
    <Query>
      <Options />
      <FormControlWrapper />
      <Settings />
      <Language />
    </Query>
  );
};

export default QueryComponent;
