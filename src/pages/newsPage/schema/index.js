import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  companyName: Yup.string()
    .required("Required")

    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  contactTitle: Yup.string()
    .required("Required")

    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  contactName: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
});
