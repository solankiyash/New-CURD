import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ADDDATA } from "../Redux/action";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ADDdata() {
  const id = useParams();
  const data = useSelector((state) => state.reducer);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  let dispatch = useDispatch();

  useEffect(() => {
    data.forEach((item) => {
      if (item.id == id.id) {
        setTitle(item.title);
        setBody(item.body);
      }
    });
  }, []);

  const onFinish = (values) => {
    dispatch(
      ADDDATA({
        id,
        title,
        body,
      })
    );
    navigate("/");
    toast.success("Your data Added");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="button_back">
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 50,
        }}
        wrapperCol={{
          span: 50,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your Title!",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Body"
          name="Body"
          rules={[
            {
              required: true,
              message: "Please input your Body!",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input value={body} onChange={(e) => setBody(e.target.value)} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ADDdata;
