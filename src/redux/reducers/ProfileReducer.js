import { createSlice } from "@reduxjs/toolkit";
import { STEPS_CONFIG } from "../../utils/objects/Frontend";

const slice = createSlice({
  name: "ProfileReducer",
  initialState: {
    totalSteps: 1,
    totalQuestions: STEPS_CONFIG.totalQuestions,
    currentStep: 0,
    questionsPerStep: { step: 0, questions: 1 },
    questionsCompletedPerStep: { step: 0, questions: 1 },
    totalQuestionsCompleted: 0,
    currentQuestionInStep: { step: 0, currentQuestion: 1 },
  },
  reducers: {
    setTotalSteps: (state, action) => {
      state.totalSteps = action.payload;
    },
    setTotalQuestions: (state, action) => {
      state.totalQuestions = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setQuestionsPerStep: (state, action) => {
      state.questionsPerStep = action.payload;
    },
    setQuestionsCompletedPerStep: (state, action) => {
      state.questionsCompletedPerStep = action.payload;
    },
    setTotalQuestionsCompleted: (state, action) => {
      state.totalQuestionsCompleted = action.payload;
    },
    setCurrentQuestionInStep: (state, action) => {
      state.currentQuestionInStep = action.payload;
    },
  },
});

export const {
  setTotalSteps,
  setTotalQuestions,
  setCurrentStep,
  setQuestionsPerStep,
  setQuestionsCompletedPerStep,
  setTotalQuestionsCompleted,
  setCurrentQuestionInStep,
} = slice.actions;

export default slice.reducer;
