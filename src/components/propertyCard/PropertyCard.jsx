import "./propertyCard.css";
export default function PropertyCard({
  src,
  type,
  price,
  street,
  bedrooms,
  bathrooms,
  area,
  floor,
  parking,
  textButton,
}) {
  return (
    <>
      <img src={src} />

      <div className="simpleInformation">
        <p>{type}</p>
        <p>{price}</p>
      </div>

      <p className="street">{street}</p>

      <div className="deepInformation">
        <p>
          Bedrooms: <span>{bedrooms}</span>
        </p>
        <p>
          Bathrooms: <span>{bathrooms}</span>
        </p>
        <p>
          Area: <span>{area}</span>
        </p>
        <p>
          Floor: <span>{floor}</span>
        </p>
        <p>
          Parking: <span>{parking}</span>
        </p>
      </div>

      <hr />
      <div style={{ textAlign: "center" }}>
        <button>{textButton}</button>
      </div>
    </>
  );
}
