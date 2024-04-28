import { useLoaderData, useParams } from "react-router-dom";

const ViewProperty = () => {
  const property = useLoaderData();
  const { id } = useParams();
  const propertyInt = parseInt(id);
  const propertyData = property?.find(
    (singleProperty) => singleProperty.id === propertyInt
  );
  const { segment_name, image, description } = propertyData;

  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-4xl md:text-4xl  font-bold">
              {segment_name}
            </h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
