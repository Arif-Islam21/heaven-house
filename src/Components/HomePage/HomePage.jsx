// import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import EstateCard from "../EstateCard/EstateCard";

const HomePage = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Heaven House</title>
      </Helmet> */}
      <div className="mb-12">
        <Banner></Banner>
      </div>
      <EstateCard></EstateCard>
    </div>
  );
};

export default HomePage;
