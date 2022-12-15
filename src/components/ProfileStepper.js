import React, { useState, useMemo, useEffect, Fragment } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { STEPS_CONFIG } from "../utils/objects/Frontend";
import ProfileInput from "./ProfileInput";
import {
  setCurrentQuestionInStep,
  setCurrentStep,
  setTotalQuestions,
  setTotalQuestionsCompleted,
} from "../redux/reducers/ProfileReducer";
import { useDispatch, useSelector } from "react-redux";
import * as filestack from "filestack-js";
import { FILESTACK_KEY, PROFILE_API } from "../utils/constants/API";
import { useNavigate } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData.js";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { RESIDENCIES_PATH, SKILLS_PATH } from "../utils/constants/Config";
import ProfileModal from "./ProfileModal";

const ProfileStepper = () => {
  const { makeRequest, tags } = useApplicationData();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [currQues, setCurrQues] = useState(0);
  const [stepsCompleted, setStepsCompleted] = useState([]);
  const [documentUploadData, setDocumentUploadData] = useState({});
  const [skills, setSkills] = useState([]); // For adding qualities
  const [countries, setCountries] = useState([]); // For showing list of countries residencies
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentStep = useSelector((state) => state.profileReducer.currentStep);

  const totalQuestionsCompleted = useSelector(
    (state) => state.profileReducer.totalQuestionsCompleted
  );
  const totalSteps = Object.keys(STEPS_CONFIG.pages).length;
  const questionsInCurrentStep = Object.keys(
    STEPS_CONFIG.pages[currentStep].questions
  ).length;
  const currentQuestion = STEPS_CONFIG.pages[currentStep].questions[currQues];
  const questionTag = currentQuestion.tag;
  const pageTitle = currentQuestion.title;
  const elements = currentQuestion.elements;

  const client = useMemo(() => {
    return filestack.init(FILESTACK_KEY);
  }, [FILESTACK_KEY]);

  useEffect(() => {
    dispatch(setCurrentStep(0));
    dispatch(setTotalQuestions(STEPS_CONFIG.totalQuestions));
    setCurrQues(0);
    setStepsCompleted([...stepsCompleted, { step: 0, question: 0 }]);
  }, []);

  // Getting the countries on loading page
  // useEffect(() => {
  //   if (countries.length === 0)
  //     makeRequest(
  //       "countries",
  //       (res) => {
  //         setCountries(res.data);
  //       },
  //       () => {}
  //     );
  // }, [countries]);

  const handleFieldChange = (e) => {
    const tempData = {
      ...data,
      ...{
        [questionTag]: {
          ...data?.[questionTag],
          ...{ [e.target.name]: e.target.value },
        },
      },
    };
    console.log("test", tempData);
    if (questionTag === "countries")
      sessionStorage.setItem("residence_id", tempData?.["countries"]?.id);
    setData(tempData);
  };

  const handleDocumentUpload = () => {
    client
      .picker({
        onFileUploadFinished: (e) => {
          console.log("uploaded", e);
          setDocumentUploadData(e);
          console.log({
            ...data,
            ...{
              [questionTag]: {
                ...data[questionTag],
                ...{ uploaded_document: e.url },
              },
            },
          });
          setData({
            ...data,
            ...{
              [questionTag]: {
                ...data[questionTag],
                ...{ uploaded_document: e.url },
              },
            },
          });
        },
        uploadConfig: {
          tags: {
            tag: questionTag,
          },
        },
      })
      .open();
  };

  const moveNext = () => {
    // if (currentStep !== totalSteps - 1) {
    console.log("test");
    //   setCurrQues((prevActiveQues) => prevActiveQues + 1);
    //   if (currQues === questionsInCurrentStep - 1) {
    //     dispatch(setCurrentStep(currentStep + 1));
    //     setCurrQues(0);
    //   }
    // } else {
    //
    setOpen(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, "3000");
    // }

    // if (
    //   !checkIfStepsCompleted(
    //     currQues === questionsInCurrentStep - 1 ? currentStep + 1 : currentStep,
    //     currQues + 1
    //   )
    // ) {
    //   setStepsCompleted([
    //     ...stepsCompleted,
    //     {
    //       step:
    //         currQues === questionsInCurrentStep - 1
    //           ? currentStep + 1
    //           : currentStep,
    //       question: currQues + 1,
    //     },
    //   ]);
    //   dispatch(setTotalQuestionsCompleted(totalQuestionsCompleted + 1));
    // }
    // dispatch(
    //   setCurrentQuestionInStep({
    //     step:
    //       currQues === questionsInCurrentStep - 1
    //         ? currentStep + 1
    //         : currentStep,
    //     currentQuestion: currQues + 1,
    //   })
    // );
  };

  const getDynamicURLs = () => {
    const urls = {
      countries: `${PROFILE_API}${RESIDENCIES_PATH}/${data?.["countries"]?.id}/accounts`,
    };
    return urls[questionTag] ?? null;
  };

  const handleNext = () => {
    // if (tags.includes(questionTag))
    //   makeRequest(questionTag, moveNext, () => {}, data, getDynamicURLs());
    //else
    moveNext();
  };

  const handleBack = () => {
    setCurrQues((prevActiveStep) => prevActiveStep - 1);
    if (currQues === 0) {
      dispatch(setCurrentStep(currentStep - 1));
      setCurrQues(0);
    }
    dispatch(
      setCurrentQuestionInStep({
        step: currQues === 0 ? currentStep - 1 : currentStep,
        currentQuestion: currQues - 1,
      })
    );
  };

  const checkIfStepsCompleted = (step, question) => {
    console.log("question", step, question);
    const found = stepsCompleted.some(
      (el) => el.step === step && el.question === question
    );
    return found;
  };

  const getAdornment = (adornment) => {
    if (adornment) {
      let existingAdornmentData = { ...adornment };
      const onClickData = {
        skills: () => {
          if (tags.includes(questionTag))
            makeRequest(
              questionTag,
              (res1) => {
                makeRequest(
                  "skills_account",
                  (res2) => {
                    setSkills((skills) => [...skills, res1.data.name]);
                    const tempData = {
                      ...data,
                      ...{
                        [questionTag]: {
                          ...data[questionTag],
                          ...{ name: "" },
                        },
                      },
                    };
                    setData(tempData);
                  },
                  () => {},
                  null,
                  `${PROFILE_API}${SKILLS_PATH}/${res1.data.id}/accounts`
                );
              },
              () => {},
              data
            );
        },
      };
      existingAdornmentData.onClick = onClickData[questionTag];

      return { adornment: existingAdornmentData };
    }
  };

  const getInputOptions = (options = []) => {
    const dynamicOptions = {
      countries: () => {
        const countriesOptions = [];
        console.log("dfdfdfdf", countries);
        countries.forEach((country) =>
          countriesOptions.push({ label: country, value: country })
        );
        console.log("ertgyh", countriesOptions);
        return countriesOptions;
      },
    };

    return options.length !== 0 ? options : dynamicOptions[questionTag]();
  };

  return (
    <React.Fragment>
      {!open ? (
        <div>
          <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
            <Box sx={{ maxWidth: 800, width: "100%", p: 2 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h4>
                  QUESTION {currQues + 1} / {questionsInCurrentStep}
                </h4>
                <h1
                  style={{
                    color: "darkblue",
                  }}
                >
                  {pageTitle}
                </h1>
              </div>
              {elements.map((element) => {
                return (
                  <Fragment>
                    <ProfileInput
                      key={element.name}
                      type={element.type}
                      title={element.title}
                      onChange={
                        element.name === "upload_document"
                          ? handleDocumentUpload
                          : handleFieldChange
                      }
                      name={element.name}
                      value={
                        data?.[questionTag]?.[element.name]
                          ? data?.[questionTag]?.[element.name]
                          : ""
                      }
                      options={element.options ? element.options : []}
                      required={element.required}
                      {...element}
                      {...getAdornment(element?.adornment)}
                    />

                    {/**To display file names that are uploaded in each step */}
                    {"filename" in documentUploadData &&
                      documentUploadData?.uploadTags?.tag ===
                        STEPS_CONFIG?.pages[currentStep]?.questions[currQues]
                          ?.tag &&
                      element.name === "upload_document" && (
                        <div
                          key={documentUploadData.uploadId}
                          style={{ marginTop: "15px" }}
                        >
                          <a
                            key={documentUploadData.uploadId}
                            href={documentUploadData.url}
                            target="_blank"
                          >
                            {documentUploadData?.filename}
                          </a>
                        </div>
                      )}
                  </Fragment>
                );
              })}

              {/**To display skills in additional step */}
              {STEPS_CONFIG?.pages[currentStep]?.questions[
                currQues
              ]?.tag.toLowerCase() === "skills" &&
                skills.length !== 0 && (
                  <Stack direction="row" spacing={1}>
                    {skills.map((skill, i) => {
                      return <Chip label={skill} onDelete={() => {}} />;
                    })}
                  </Stack>
                )}
            </Box>

            <MobileStepper
              variant="progress"
              steps={questionsInCurrentStep}
              position="static"
              activeStep={currQues}
              nextButton={
                <Button
                  size="small"
                  variant="outlined"
                  onClick={handleNext}
                  style={{
                    textTransform: "none",
                    color: "white",
                    background: "darkblue",
                    fontSize: "14px",
                  }}
                  // disabled={currQues === questionsInCurrentStep - 1}
                >
                  {currQues === questionsInCurrentStep - 1
                    ? "Next section"
                    : "Next"}
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  style={{
                    textTransform: "none",
                    fontSize: "14px",
                    color: "darkblue",
                  }}
                  disabled={currQues === 0 && currentStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  {currQues === 0 && currentStep !== 0
                    ? "Previous section"
                    : "Back"}
                </Button>
              }
            />
          </Box>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                fontSize: "14px",
                background: "darkblue",
                // `position: "absolute",
                // bottom: "2%",
                // left: "53%",`
              }}
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Save and continue later
            </Button>
          </div>
        </div>
      ) : (
        <ProfileModal
          open
          handleOpen={handleOpen}
          handleClose={handleClose}
          title="Finding you matches"
          description="Will be automatically redirected to dashboard page to view your matches"
          loadingIcon={true}
        />
      )}
    </React.Fragment>
  );
};

export default ProfileStepper;
