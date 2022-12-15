import {
  HistoryEdu,
  Inbox,
  LibraryAdd,
  WorkHistory,
} from "@mui/icons-material";

export const CATEGORIES = [
  { label: "General", icon: <Inbox /> },
  { label: "Professional", icon: <WorkHistory /> },
  { label: "Achievements", icon: <HistoryEdu /> },
  { label: "Additional", icon: <LibraryAdd /> },
];

export const INPUT_TYPES = {
  textField: "textField",
  select: "select",
  file: "file",
  date: "date",
};

export const LAYOUTS = {
  default: "default",
  grid: "grid",
};

export const STEPS_CONFIG = {
  totalQuestions: 7,
  pages: {
    0: {
      name: "Enter your personal details",
      questions: [
        // {
        //   title: "Enter your name",
        //   tag: "name",
        //   elements: [
        //     {
        //       type: INPUT_TYPES.textField,
        //       name: "first_name",
        //       title: "First Name",
        //       required: true,
        //       validators: [
        //         {
        //           type: "EMPTY_CHECK",
        //           text: "Please select two features maximum.",
        //           regEx: "",
        //         },
        //       ],
        //     },
        //     {
        //       type: "textField",
        //       name: "last_name",
        //       visibleIf: "{nps_score} >= 9",
        //       title: "Last Name",
        //       required: true,
        //       validators: [
        //         {
        //           type: "answercount",
        //           text: "Please select two features maximum.",
        //           maxCount: 2,
        //         },
        //       ],
        //       hasOther: true,
        //       options: [
        //         "Performance",
        //         "Stability",
        //         "User Interface",
        //         "Complete Functionality",
        //       ],
        //       otherText: "Other features:",
        //       colCount: 2,
        //     },
        //   ],
        // },
        // {
        //   title: "Provide your contact details",
        //   tag: "contact_details",
        //   elements: [
        //     {
        //       type: INPUT_TYPES.textField,
        //       name: "Email",
        //       title: "Email",
        //       required: true,
        //       rateMin: 0,
        //       rateMax: 10,
        //       minRateDescription: "(Most unlikely)",
        //       maxRateDescription: "(Most likely)",
        //     },
        //     {
        //       type: INPUT_TYPES.textField,
        //       tag: "Phone",
        //       title: "Phone",
        //       required: true,
        //       rateMin: 0,
        //       rateMax: 10,
        //       minRateDescription: "(Most unlikely)",
        //       maxRateDescription: "(Most likely)",
        //     },
        //   ],
        // },
        {
          title: "Select your country",
          tag: "countries",
          elements: [
            // {
            //   type: INPUT_TYPES.textField,
            //   name: "street",
            //   title: "Street",
            //   required: true,
            //   rateMin: 0,
            //   rateMax: 10,
            //   minRateDescription: "(Most unlikely)",
            //   maxRateDescription: "(Most likely)",
            // },
            // {
            //   type: INPUT_TYPES.textField,
            //   name: "city",
            //   title: "City",
            //   required: true,
            //   rateMin: 0,
            //   rateMax: 10,
            //   minRateDescription: "(Most unlikely)",
            //   maxRateDescription: "(Most likely)",
            // },
            {
              type: INPUT_TYPES.select,
              name: "id",
              title: "Country",
              required: true,
              options: [
                { label: "Canada", value: "2" },
                { label: "United States of America", value: "1" },
                { label: "India", value: "3" },
                { label: "China", value: "4" },
              ],
            },
            // {
            //   type: INPUT_TYPES.select,
            //   name: "state",
            //   title: "State / Province",
            //   required: true,
            //   options: [
            //     { label: "Canada", value: "CA" },
            //     { label: "United States of America", value: "USA" },
            //   ],
            // },
            // {
            //   type: INPUT_TYPES.textField,
            //   name: "postal_code",
            //   title: "Postal Code",
            //   required: true,
            // },
          ],
        },
      ],
    },
    2: {
      name: "Enter your achievement details",
      step_type: "ACHIEVEMENTS",
      questions: [
        {
          title: "Attach any certifications",
          layout: "default",
          tag: "certifications",
          elements: [
            {
              type: INPUT_TYPES.textField,
              name: "name",
              title: "Name",
              required: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.textField,
              name: "description",
              title: "Description",
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.date,
              name: "date_received",
              title: "Date Received",
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.file,
              name: "upload_document",
              title: "Upload Certificate",

              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
          ],
        },
        {
          title: "Attach any honors",
          layout: "default",
          tag: "honors",
          elements: [
            {
              type: INPUT_TYPES.textField,

              name: "name",
              title: "Name",
              required: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.textField,
              name: "description",
              title: "Description",
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.date,
              name: "date_received",
              title: "Date Received",
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.file,
              name: "upload_document",
              title: "Upload Certificate",
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
          ],
        },
        {
          title: "Attach any awards",
          layout: "default",
          tag: "awards",
          elements: [
            {
              type: INPUT_TYPES.textField,
              name: "name",
              title: "Name",
              required: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.textField,
              name: "description",
              title: "Description",
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.date,
              name: "date_received",
              title: "Date Received",
              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
            {
              type: INPUT_TYPES.file,
              name: "upload_document",
              title: "Upload Certificate",

              validators: [
                {
                  type: "answercount",
                  text: "Please enter the email",
                  minCount: 1,
                  regEx: "",
                },
              ],
            },
          ],
        },
      ],
    },
    1: {
      name: "Enter your professional details",
      step_type: "PROFESSIONAL",

      questions: [
        {
          title: "Add your work experience",
          layout: "grid",
          tag: "occupations",
          elements: [
            {
              type: INPUT_TYPES.textField,
              name: "name",
              title: "Company Name",
              required: true,
            },
            {
              type: INPUT_TYPES.textField,
              name: "description",
              title: "Position",
              required: true,
            },
            {
              type: "textField",
              name: "city",
              title: "City",
              required: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please select two features maximum.",
                  maxCount: 2,
                },
              ],
            },
            {
              type: "textField",
              name: "region",
              title: "Region",
              required: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please select two features maximum.",
                  maxCount: 2,
                },
              ],
            },
            {
              type: INPUT_TYPES.select,
              name: "country",
              title: "Country",
              required: true,
              options: [
                { label: "Canada", value: "CA" },
                { label: "United States of America", value: "USA" },
              ],
            },

            {
              type: INPUT_TYPES.date,
              name: "start_date",
              title: "Start Date",
              required: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please select two features maximum.",
                  maxCount: 2,
                },
              ],
            },
            {
              type: INPUT_TYPES.date,
              name: "end_date",
              title: "End Date",
              required: true,
              validators: [
                {
                  type: "answercount",
                  text: "Please select two features maximum.",
                  maxCount: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    3: {
      name: "Enter additional details",
      questions: [
        {
          title: "Type your skills",
          tag: "skills",
          elements: [
            {
              type: "textField",
              name: "name",
              title: "Skills (Ex: React JS, Machine Learning etc)",
              required: true,
              adornment: {
                display: true,
                content: "Add",
                type: "endAdornment",
              },
              validators: [
                {
                  type: "answercount",
                  text: "",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  showQuestionNumbers: "off",
};
