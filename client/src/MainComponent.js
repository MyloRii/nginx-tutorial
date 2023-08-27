import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./MainComponent.css";

const MainComponent = () => {
  const [values, setValues] = useState([]);

  const getAllNumbers = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get("/api/random-names");
    console.log(data.data)
    setValues(data.data);
  }, []);

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <div>
      <button onClick={getAllNumbers}>Get all numbers</button>
      <br />
      <span className="title">Values</span>
      <div className="values">
        {values.map(value => (
          <div className="value">{value}</div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
