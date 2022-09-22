import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteData, productlist } from "../Redux/action";
import { Table, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";

function Maindata() {
  const confirm = (id) => {
    dispatch(deleteData({ id }));
    message.success("Succesfully deleted");
  };

  const cancel = (e) => {
    message.error("Delete cancelled");
  };
  const data = useSelector((state) => state.reducer);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "id",
    },
    {
      title: "body",
      dataIndex: "body",
      key: "id",
    },
    {
      title: "Action",
      render: (recored) => {
        return (
          <>
            <Button onClick={(id) => handelClick(recored.id)}>Edit</Button>
          </>
        );
      },
    },
    {
      title: "Action",
      render: (recored) => {
        return (
          <>
            <Popconfirm
              title="Are you sure to delete this task ?"
              onConfirm={() => confirm(recored.id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button id={recored.id}>Delete</Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClick = (id) => {
    navigate(`/edit/${id}`);
  };
  const handelChange = () => {
    navigate("/ADD");
  };

  useEffect(() => {
    dispatch(productlist());
  }, []);

  return (
    <div className="App">
      <div>
        <div className="button">
          <Button onClick={handelChange}>ADD</Button>
        </div>
        {data.length > 0 ? (
          <Table
            style={{ width: "80%", margin: "30px 100px" }}
            columns={columns}
            dataSource={data}
            size="middle"
          />
        ) : (
          <Table
            style={{ width: "80%", margin: "30px 100px" }}
            columns={columns}
            size="middle"
          />
        )}
      </div>
    </div>
  );
}

export default Maindata;
