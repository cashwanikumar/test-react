import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";

import "./index.scss";
import Loading from "../../Loading";

const Metric = ({ name, icon, value, color, iconClr, caller }) => {
  const [num, setNum] = useState(value || 0);
  const [loader, setLoader] = useState(false);
  React.useEffect(() => {
    setLoader(true);
    caller().then((result) => {
      setNum(result);
      setLoader(false);
    });
  }, [caller]);
  return (
    <Card className="metric-div">
      <CardBody>
        <Loading active={loader} />
        <div className="main-div">
          <div
            className="icon"
            style={{
              backgroundColor: color || "inherit",
            }}
          >
            {icon &&
              icon({
                color: iconClr,
                fontSize: "2em",
              })}
          </div>
          <div className="details">
            <h3>{num}</h3>
            <small>{name}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Metric;
