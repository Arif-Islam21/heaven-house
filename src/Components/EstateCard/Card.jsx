import PropTypes from "prop-types";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    image,
    status,
    location,
    facilities,
  } = estate;

  return (
    <div>
      <div className="card min-h-[70vh] bg-base-100 shadow-xl">
        <figure>
          <img className="h-48 w-full" src={image} alt={estate_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {segment_name}
            <div className="badge bg-lime-500 text-white p-2">{status}</div>
          </h2>
          <p>{estate_title}</p>
          <div className="card-actions my-4">
            {facilities.map((faciliti, idx) => (
              <div
                key={idx}
                className="badge bg-green-200 text-green-900 px-4 py-3 font-semibold badge-outline"
              >
                #{faciliti}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="justify-start flex gap-2 items-center font-semibold">
                <IoLocation /> {location}
              </h2>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/property/${id}`}>
                <button className="relative   overflow-hidden group bg-green-500 text-white px-4 py-2 rounded-md shadow-xl hover:bg-green-600">
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent transform scale-0 group-hover:scale-150 transition-transform"></span>
                  View Property
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  estate: PropTypes.object,
};
