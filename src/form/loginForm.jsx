import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const validationSchema = z.object({
  username: z.string().min(4, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Values:", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-3 max-w-md p-4 bg-white rounded shadow">
          <div>
            <label>Username</label>
            <Field
              type="text"
              name="username"
              placeholder="Enter username"
              className="border border-gray-400 rounded-md px-2 py-1 w-full"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label>Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-gray-400 rounded-md px-2 py-1 w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
