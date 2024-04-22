import Banner from "../Banner/Banner";
import EstateCard from "../EstateCard/EstateCard";

const HomePage = () => {
  return (
    <div>
      <div className="mb-12">
        <Banner></Banner>
      </div>
      <EstateCard></EstateCard>
    </div>
  );
};

export default HomePage;
