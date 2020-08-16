import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Bar } from "react-chartjs-2";

import "./index.scss";
import Loading from "../../Loading";

const Graph = ({ title, caller, data }) => {
  const [dataVal, setData] = useState(data || 0);
  const [loader, setLoader] = useState(false);
  React.useEffect(() => {
    setLoader(true);
    caller().then((result) => {
      setData(result);
      setLoader(false);
    });
  }, [caller]);
  return (
    <Card className="graph-div">
      <Loading active={loader} />
      <CardTitle>
        <strong>{title}</strong>
      </CardTitle>
      <CardBody>
        <Bar
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: dataVal,
          }}
          width={100}
          height={50}
          options={{
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  stacked: true,
                },
              ],
              yAxes: [
                {
                  stacked: true,
                },
              ],
            },
          }}
        />
      </CardBody>
    </Card>
  );
};

export default Graph;
