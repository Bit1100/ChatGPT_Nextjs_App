import { useAppDispatch, useAppSelector, setFormQuery } from "@/store";
import { useEffect, useState } from "react";
import {
  FormControlWrapper,
  Title,
  Input,
  Textarea,
  FormControl,
} from "./FormController.styles";
import { debounce } from "lodash";

const FormControlWrapperComponent = () => {
  const { inputs } = useAppSelector((state) => state.dcards.card);
  const { formQuery } = useAppSelector((state) => state.query.query);

  const dispatch = useAppDispatch();
  const [queries, setQueries] = useState({});
  const [query, setQuery] = useState({});

  // Initialize the values
  useEffect(() => {
    if (!formQuery) {
      for (const key in queries) {
        setQueries((prevState) => ({
          ...prevState,
          [key]: "",
        }));
      }
      setQuery(formQuery);
    }
  }, [formQuery]);

  const debouncedDispatch = debounce((updateQuery) => {
    dispatch(setFormQuery(updateQuery));
  }, 300);

  const handleInputChange = (e, queryParams) => {
    const { id, value } = e.target;

    setQueries((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setQuery((prevQuery) => {
      const updateQuery = {
        ...prevQuery,
        [queryParams]: value,
      };

      debouncedDispatch(updateQuery);

      return updateQuery;
    });
  };

  return (
    <FormControlWrapper>
      {inputs?.map(
        ({
          name,
          type,
          placeholder,
          maxLength,
          required,
          title,
          id,
          queryParams,
        }) => (
          <FormControl key={id}>
            <Title>{title}</Title>
            {name === "input" ? (
              <Input
                id={id}
                name={name}
                value={queries[id] || ""}
                onChange={(e) => handleInputChange(e, queryParams)}
                type={type}
                placeholder={placeholder}
                required={required}
              />
            ) : (
              <Textarea
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                value={queries[id] || ""}
                onChange={(e) => handleInputChange(e, queryParams)}
                rows={3}
                cols={30}
                maxLength={maxLength}
                required={required}
              />
            )}
          </FormControl>
        )
      )}
    </FormControlWrapper>
  );
};

export default FormControlWrapperComponent;
