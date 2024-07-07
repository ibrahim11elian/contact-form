export const validate = (data) => {
  const fields = ["fname", "lname", "email", "query", "message"];
  const newErrors = {};
  fields.forEach((field) => {
    if (!data[field]) newErrors[field] = "This field is required";
  });
  if (!data.terms)
    newErrors.terms = "To submit this form, please consent to being contacted";

  if (
    data.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
  )
    newErrors.email = "Please enter a valid email address";
  return newErrors;
};
