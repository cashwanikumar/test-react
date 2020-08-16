import React, { useState } from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

import "./index.scss";
import Loading from "../../Loading";

const renderList = (data, onRowClick) => {
  return data && data.length > 0 ? (
    <Table borderless hover className="no-style-list">
      <tbody>
        {data.map((val, index) => (
          <tr key={index} onClick={() => onRowClick(val)}>
            <td className="img-div">
              {val.img ? (
                <img src={val.img} width={40} height={40} />
              ) : (
                <img
                  src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg"
                  width={40}
                  height={40}
                />
              )}
            </td>
            <td>{val.name}</td>
            <td className="text-right">{val.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <h4>No record Found</h4>
  );
};

const List = ({ title, data, caller, onRowClick }) => {
  const [dataVal, setData] = useState(data || []);
  const [loader, setLoader] = useState(false);
  React.useEffect(() => {
    setLoader(true);
    caller().then((result) => {
      setData(result);
      setLoader(false);
    });
  }, [caller]);
  return (
    <>
      <Loading active={loader} />
      <Card className="list-div">
        <CardTitle>
          <strong>{title}</strong>
        </CardTitle>
        <CardBody>{renderList(dataVal, onRowClick)}</CardBody>
      </Card>
    </>
  );
};

export default List;
