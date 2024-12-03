import { useState, useEffect } from "react";
import "./App.css";
import api from "./axios";

function App() {
  const [msg, setMsg] = useState("Nothing");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/");
        setMsg(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  });

  return (
    <>
      <h1>{msg}</h1>
    </>
  );
}

export default App;
