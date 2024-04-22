import { useEffect, useState } from "react";
import Card from "./Card";

const EstateCard = () => {
  const [estateData, setEstateData] = useState([]);

  useEffect(() => {
    fetch(
      "https://arif-islam21.github.io/recidential-json-data/recidential.json"
    )
      .then((res) => res.json())
      .then((data) => setEstateData(data));
  }, []);

  return (
    <div>
      {estateData.map((estate) => (
        <Card key={estate.id} estate={estate}></Card>
      ))}
    </div>
  );
};

export default EstateCard;
