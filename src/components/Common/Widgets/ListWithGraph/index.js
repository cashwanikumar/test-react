import React, { useState } from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";
import { Doughnut } from "react-chartjs-2";

import "./index.scss";
import Loading from "../../Loading";

const renderList = (data) => {
  return data && data.length > 0 ? (
    <Table borderless className="no-style-list">
      <tbody>
        {data.map((val, index) => (
          <tr key={index}>
            <td>
              <span
                className="clr-div"
                style={{
                  background: val.clr || "#000",
                }}
              />
            </td>
            <td>{val.title}</td>
            <td className="text-right">
              {val.value}({val.per}%)
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <h4>No record Found</h4>
  );
};

const ListWithGraph = ({ title, data, caller }) => {
  const [dataVal, setData] = useState(
    data || {
      data: [],
      graph: {},
    }
  );
  const [loader, setLoader] = useState(false);
  React.useEffect(() => {
    setLoader(true);
    caller().then((result) => {
      setData(result);
      setLoader(false);
    });
  }, [caller]);
  return (
    <Card className="list-graph-div">
      <CardTitle>
        <strong>{title}</strong>
      </CardTitle>
      <CardBody>
        <Loading active={loader} />
        <div>
          {data ? (
            <>
              <div>
                <Doughnut
                  data={dataVal.graph || {}}
                  options={{
                    legend: {
                      display: false,
                    },
                  }}
                />
              </div>
              <div>{renderList(dataVal.data)}</div>
            </>
          ) : (
            "No record found"
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ListWithGraph;
