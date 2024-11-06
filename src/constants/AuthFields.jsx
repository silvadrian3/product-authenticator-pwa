export const AuthFields = {
  signup: [
    {
      type: "name",
      label: "Complete Name",
      placeholder: "",
      required: false,
    },
    {
      type: "custom:business_name",
      key: "custom:business_name",
      label: "Business Name *",
      placeholder: "",
      required: true,
    },
    {
      type: "email",
      label: "Email Address *",
      autoComplete: "off",
      placeholder: "",
      required: true,
    },
    {
      type: "password",
      label: "Password *",
      autoComplete: "off",
      placeholder: "",
      required: true,
    },
  ],
  login: [
    {
      type: "email",
      label: "Email Address *",
      placeholder: "",
      required: true,
    },
    {
      type: "password",
      label: "Password *",
      placeholder: "",
      required: true,
    },
  ],
  forgotpassword: [
    {
      type: "email",
      label: "Email Address *",
      placeholder: "",
      required: true,
    },
  ],
};
