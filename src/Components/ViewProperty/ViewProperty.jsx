import { useLoaderData, useParams } from "react-router-dom";

const ViewProperty = () => {
  const property = useLoaderData();
  const { id } = useParams();
  const propertyInt = parseInt(id);
  const propertyData = property?.find(
    (singleProperty) => singleProperty.id === propertyInt
  );
  const {
    estate_title,
    segment_name,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = propertyData;

  return (
    <div>
      <section className=" container mx-auto my-12">
        <div className="hero min-h-[85vh] ">
          <div className="hero-content  flex-col lg:flex-row">
            <div className="w-1/2 bg-base-200 py-36 flex min-h-full justify-center items-center">
              <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div className="w-1/2 pl-8">
              <h1 className="text-2xl lg:text-5xl font-bold">bookName</h1>
              <p className="text-md font-medium my-3">By:author</p>
              <hr />
              <p className="my-3 font-medium">category</p>
              <hr />
              <p className="font-medium text-md my-3 text-gray-500">
                <span className="text-xl text-black font-bold">Review : </span>
                review
              </p>
              <p className="flex flex-col lg:flex-row gap-4 items-center my-3">
                <span className="text-xl font-bold">Tag:</span>
                <span className="flex gap-3">
                  {/* {tags.map((tag, idx) => (
                    <span
                      className="text-green-500 font-semibold px-2 py-1 bg-green-100 my-1 rounded-md"
                      key={idx}
                    >
                      #{tag}
                    </span>
                  ))} */}
                  tags map here
                </span>
              </p>
              <hr />
              <div className="flex flex-col lg:flex-row items-center text-start my-3">
                <p className="font-semibold w-full lg:w-1/2 text-gray-500">
                  Number Of Pages:
                </p>
                <p className="font-semibold w-1/2 text-black">totalPages</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center my-3">
                <p className="font-semibold w-1/2 text-gray-500">Publisher:</p>
                <p className="font-semibold w-1/2 text-black">publisher</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center  my-3">
                <p className="font-semibold w-1/2 text-gray-500">
                  Year Of Publication
                </p>
                <p className="font-semibold w-1/2 text-black">
                  yearOfPublishing
                </p>
              </div>
              <div className="flex items-center my-3">
                <p className="font-semibold w-1/2 text-gray-500">Rating</p>
                <p className="font-semibold w-1/2 text-black">rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewProperty;
