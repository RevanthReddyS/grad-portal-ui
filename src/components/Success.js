import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Success = ({ response }) => {
  const { state } = useLocation();

  return (
    <Fragment>
      <div>Form successfully submitted and response is as follows</div>
      <br />

      <div>{JSON.stringify(state.data)}</div>
    </Fragment>
  );
};

export default Success;
