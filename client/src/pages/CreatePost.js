import React from "react";
import { Formik, Form, Field } from "formik";

function CreatePost() {
  return (
    <div className="createPostPage">
      <h2>Create a Post</h2>
      <Formik initialValues={{ caption: "" }}>
        <Form>
          {/* This is the box */}
          <Field
            as="textarea"
            id="createPostInput"
            name="caption"
            placeholder="Share your thoughts..."
            rows="4"
            cols="50"
          />
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
