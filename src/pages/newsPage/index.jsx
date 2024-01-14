import React from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./schema";
import "./index.scss";
import { Helmet } from "react-helmet";
const NewsPage = () => {
  return (
    <div className=" news">
      <Helmet>
        <meta charSet="utf-8" />
        <title>News |Blogger</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="This is News" />
      </Helmet>

      <Formik
        initialValues={{
          companyName: "",
          contactTitle: "",
          contactName: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await axios.post(
              "https://northwind.vercel.app/api/suppliers",
              values
            );
            resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field type="text" name="companyName" placeholder="companyName" />
            {errors.companyName && <p>{errors.companyName}</p>}
            <Field type="text" name="contactTitle" placeholder="contactTitle" />
            {errors.contactTitle && touched.contactTitle && (
              <p>{errors.contactTitle}</p>
            )}

            <Field type="text" name="contactName" placeholder="contactName" />
            {errors.contactName && touched.contactName && (
              <p>{errors.contactName}</p>
            )}

            <button className="submit" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewsPage;
