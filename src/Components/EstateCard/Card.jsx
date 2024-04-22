import PropTypes from "prop-types";

const Card = ({ estate }) => {
  const {
    estate_title,
    segment_name,
    image,
    price,
    status,
    location,
    facilities,
  } = estate;

  console.log(estate);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-48 w-full" src={image} alt={estate_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {segment_name}
            <div className="badge badge-secondary">{status}</div>
          </h2>
          <p>{estate_title}</p>
          <div className="card-actions my-4">
            {facilities.map((faciliti, idx) => (
              <div
                key={idx}
                className="badge px-4 py-3 font-semibold badge-outline"
              >
                #{faciliti}
              </div>
            ))}
          </div>
          <div className="justify-end card-actions">
            <button className="relative overflow-hidden group bg-green-500 text-white px-4 py-2 rounded-md shadow-xl hover:bg-green-600">
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent transform scale-0 group-hover:scale-150 transition-transform"></span>
              View Property
            </button>
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
