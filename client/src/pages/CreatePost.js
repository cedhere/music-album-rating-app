import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    caption: Yup.string(), // optional for now
  });

  const onSubmit = (data, { resetForm }) => {
    // Add placeholder values to the payload
    const payload = {
      ...data,
      user_id: 1, // PLACEHOLDER
      album_id: 1, // PLACEHOLDER
      rating: 5, // PLACEHOLDER
    };

    axios.post("http://localhost:3000/posts", payload).then((response) => {
      navigate("/")
      resetForm();
    }).catch((err) => {
      console.error("Post failed", err);
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={{ caption: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <label>Caption: </label>
          <Field
            id="createPostInput"
            name="caption"
            placeholder="Share your opinions..."
          />
          <button type="submit">Post!</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
