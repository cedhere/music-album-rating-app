import React from "react";
import { Formik, Form, Field } from "formik";

function CreatePost() {
  return (
    <div className="createPostPage">
      <Formik> 
        <Form>
          <label>Caption: </label>
          <Field 
            id="createPostInput" 
            name="caption" 
            placeholder="Share your opinions..."
          />

          <button type="submit"> Post!</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
