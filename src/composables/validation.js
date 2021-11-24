import vIsEmail from "validator/lib/isEmail";

export function useValidation() {
  const required = (value, message) => !!value || (message ?? "Required field");

  const isEmail = (value, message) =>
    vIsEmail(value + "") || (message ?? "Please enter a valid email adress");

  return {
    required,
    isEmail,
  };
}
