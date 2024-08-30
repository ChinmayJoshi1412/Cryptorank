import React from 'react'
import {ClipLoader} from 'react-spinners'
const Spinner = ({isFetching}) => {
    const override = {
        display: "block",
        margin: "300px auto",
        padding: "20px"
      };
  return (
    <ClipLoader
        color="#001529"
        loading={isFetching}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner