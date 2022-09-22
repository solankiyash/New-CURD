import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Editdata } from "../Redux/action";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Edit() {
  const id = useParams();
  const data = useSelector((state) => state.reducer);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [alldata, setAlldata] = useState(data);

  const onFinish = (values) => {
    dispatch(
      Editdata({
        id,
        title,
        body,
      })
    );
    navigate("/");
    toast.success("Your data Edited");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="button_back">
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>

      <Form
        name="basic"
        labelCol={{
          span: 100,
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
          <Input
            value={title}
            defaultValue={alldata[id.id - 1].title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
          <Input
            value={body}
            defaultValue={alldata[id.id - 1].body}
            onChange={(e) => setBody(e.target.value)}
          />
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

export default Edit;
