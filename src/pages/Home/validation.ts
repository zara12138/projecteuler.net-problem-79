import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  digits: Yup.string()
    .matches(/^(?!.*(.).*\1)[0-9]{3}$/, "Must be three different digits")
    .required("Required"),
});