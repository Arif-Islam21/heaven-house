import { useEffect, useState } from "react";

const EstateCard = () => {
  const [estateData, setEstateData] = useState([]);

  useEffect(() => {
    fetch(
      "https://arif-islam21.github.io/recidential-json-data/recidential.json"
    )
      .then((res) => res.json())
      .then((data) => setEstateData(data));
  }, []);

  console.log(estateData);

  return <div></div>;
};

export default EstateCard;
