import React from "react";
function Bodycomp(props) {
  const { data, Decrement, Increment } = props;
  const Dec = () => {
    Decrement(data);
  };
  const Inc = () => {
    Increment(data);
  };
  return (
    <>
      <h1>Body</h1>
      <br />
      <button onClick={Dec}>Decrement</button>
      {data}
      <button onClick={Inc}>Increament</button>
    </>
  );
}

export default Bodycomp;
