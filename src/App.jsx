import { useState } from "react";
import { TextArea } from "./TextArea";
import { Checkbox } from "./Checkbox";
import { RadioGroup } from "./RadioGroup";
import { InputField } from "./InputField";
import { SuccessMessage } from "./SuccessMessage";
import { validate } from "./validate";

function App() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    query: "",
    message: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length === 0) {
      setShow(true);
      // Reset form fields
      setFormData({
        fname: "",
        lname: "",
        email: "",
        query: "",
        message: "",
        terms: false,
      });
      setErrors({});
      setTimeout(() => setShow(false), 3000); // Hide success message after 3 seconds
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <main className="min-h-screen w-full bg-stone-100 px-4 py-6 text-lg md:flex md:items-center">
      <div className="mx-auto max-w-[40rem] grow rounded-xl bg-white px-6 py-4">
        <h2 className="mb-4 text-3xl font-bold capitalize text-zinc-700">
          contact us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <InputField
              id="fname"
              label="first name"
              value={formData.fname}
              onChange={handleChange}
              error={errors.fname}
            />
            <InputField
              id="lname"
              label="last name"
              value={formData.lname}
              onChange={handleChange}
              error={errors.lname}
            />
          </div>
          <InputField
            id="email"
            label="email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <RadioGroup
            label="query type"
            name="query"
            options={[
              { label: "general enquiry", value: "general enquiry" },
              { label: "support request", value: "support request" },
            ]}
            value={formData.query}
            onChange={handleChange}
            error={errors.query}
          />
          <TextArea
            id="message"
            label="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <Checkbox
            id="terms"
            label="I consent to being contacted by the team"
            checked={formData.terms}
            onChange={handleChange}
            error={errors.terms}
          />
          <div>
            <button className="mt-4 w-full rounded-md bg-teal-700 py-2 text-white hover:bg-teal-900">
              Submit
            </button>
          </div>
        </form>
      </div>

      {show && <SuccessMessage show={show} />}
    </main>
  );
}

export default App;
