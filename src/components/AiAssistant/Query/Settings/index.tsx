import { useMemo, useState, useEffect, useCallback } from "react";

import { BiCaretDown } from "react-icons/bi";
import {
  useAppDispatch,
  useAppSelector,
  setSettingsQuery,
  setCreativityQuery,
} from "@/store";
import { debounce } from "lodash";

import {
  Settings,
  Head,
  Text,
  Label,
  Title,
  Icon,
  Body,
  Creativity,
  Options,
  Selected,
  ListBox,
  List,
  Progress,
  ProgressBar,
  FormControlProgress,
  Tone,
  Audience,
  FormControl,
} from "./Settings.styles";

const SettingComponent = () => {
  const dispatch = useAppDispatch();
  const { outputs: numOfOutputs } = useAppSelector(
    (state) => state.dcards.card
  );
  const { settingsQuery } = useAppSelector((state) => state.query.query);

  const toggle = useAppSelector((state) => state.query.toggle);

  const [active, setActive] = useState("Optimal");
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [queries, setQueries] = useState({
    outputs: "",
    toneOfVoice: "",
    targetAudience: "",
  });
  const [query, setQuery] = useState({});

  const creativityOptions = useMemo(
    () => [
      {
        id: "1",
        text: "Optimal",
      },
      {
        id: "2",
        text: "None",
      },
      {
        id: "3",
        text: "Low",
      },
      {
        id: "4",
        text: "Medium",
      },
      {
        id: "5",
        text: "High",
      },
      {
        id: "6",
        text: "Max",
      },
    ],
    []
  );

  // Execute on query
  useEffect(() => {
    if (!settingsQuery) {
      setQuery(settingsQuery);
      setQueries({
        outputs: "",
        toneOfVoice: "",
        targetAudience: "",
      });
    }
  }, [settingsQuery]);

  useEffect(() => {
    setIsOpenSettings(toggle);
  }, [toggle]);

  const debouncedDispatch = useCallback(
    debounce((updateQuery) => {
      dispatch(setSettingsQuery(updateQuery));
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setQueries((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setQuery((prevState) => {
      const queryObj = {
        outputs: queries?.outputs,
        toneOfVoice: queries?.toneOfVoice,
        targetAudience: queries?.targetAudience,
      };

      if (!!value) {
        switch (name) {
          case "outputs":
            queryObj["outputs"] = value;
            break;

          case "toneOfVoice":
            queryObj["toneOfVoice"] = value;
            break;

          case "targetAudience":
            queryObj["targetAudience"] = value;
            break;

          default:
            break;
        }

        const updateQuery = {
          ...prevState,
          ...(!!queryObj["outputs"] && {
            "Show in pointers": queryObj["outputs"],
          }),
          ...(!!queryObj["toneOfVoice"] && {
            "Tone of Voice": queryObj["toneOfVoice"],
          }),
          ...(!!queryObj["targetAudience"] && {
            "Target Audience": queryObj["targetAudience"],
          }),
        };

        /* Minimizing load on Redux Store */
        debouncedDispatch(updateQuery);

        return updateQuery;
      }
    });
  };

  const handleSelect = (text) => {
    setActive(text);
    setIsOpen(false);

    dispatch(
      setCreativityQuery({
        "Using Your Creativity Level": text,
      })
    );
  };

  return (
    <Settings>
      <Head onClick={() => setIsOpenSettings((prevState) => !prevState)}>
        <Title>Settings</Title>
        <Icon isOpenSettings={isOpenSettings}>
          <BiCaretDown />
        </Icon>
      </Head>
      <Body isOpenSettings={isOpenSettings}>
        <Creativity>
          <Text>Creativity:</Text>
          <Options>
            <Selected onClick={() => setIsOpen((prevState) => !prevState)}>
              <Text>{active}</Text>
            </Selected>
            <ListBox isOpen={isOpen}>
              {creativityOptions.map(({ id, text }) => (
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
        </Creativity>
        <Progress>
          <Label htmlFor="progress-bar">Outputs:</Label>
          <ProgressBar>
            <FormControlProgress
              id="progress-bar"
              type="range"
              name="outputs"
              min="1"
              max="10"
              value={queries.outputs || `${numOfOutputs}`}
              onChange={handleInputChange}
            />
            <Text>{queries.outputs}</Text>
          </ProgressBar>
        </Progress>
        <Tone>
          <Label htmlFor="tone-of-voice">Tone of Voice:</Label>
          <FormControl
            id="tone-of-voice"
            type="text"
            name="toneOfVoice"
            value={queries.toneOfVoice}
            onChange={handleInputChange}
            placeholder="eg: friendly"
          />
        </Tone>
        <Audience>
          <Label htmlFor="target-audience">Target Audience:</Label>
          <FormControl
            id="target-audience"
            type="text"
            name="targetAudience"
            value={queries.targetAudience}
            onChange={handleInputChange}
            placeholder="eg: a six year old child"
          />
        </Audience>
      </Body>
    </Settings>
  );
};

export default SettingComponent;
