import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {
  let [color, setColor] = useState("#ffffff");
  return (
    <div>
      <ClipLoader
        color={color}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="HashLoader"
      />
    </div>
  );
};

export default Spinner;
