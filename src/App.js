import logo from "./logo.svg";
import { Route, Router, Routes } from "react-router";
import "./App.css";
import Maindata from "./Component/Maindata";
import Edit from "./Component/Edit";
import ADDdata from "./Component/ADDdata";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Maindata />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/ADD" element={<ADDdata />} />
      </Routes>
    </>
  );
}

export default App;
