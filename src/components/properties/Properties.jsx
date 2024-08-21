import PropertyCard from "../propertyCard/PropertyCard";
import "./propertie.css";

export default function Properties({ nameSection, title }) {
  return (
    <>
      <h2>| {nameSection}</h2>
      <h3>{title}</h3>
      <div className="items">
        <div className="item">
          <div className="propertyCard">
            <PropertyCard
              src="../../../public/images/property/property-01.jpg"
              type="Luxury Villa"
              price="$1.180.000"
              street="54 Mid Street Florida, OR 27001"
              bedrooms="6"
              bathrooms="5"
              area="450m²"
              floor="3"
              parking="8 spots"
              textButton="Schedule a visit"
            />
          </div>
        </div>

        <div className="item">
          <div className="propertyCard">
            <PropertyCard
              src="../../../public/images/property/property-02.jpg"
              type="Luxury Villa"
              price="$1.180.000"
              street="54 Mid Street Florida, OR 27001"
              bedrooms="6"
              bathrooms="5"
              area="450m²"
              floor="3"
              parking="8 spots"
              textButton="Schedule a visit"
            />
          </div>
        </div>

        <div className="item">
          <div className="propertyCard">
            <PropertyCard
              src="../../../public/images/property/property-03.jpg"
              type="Luxury Villa"
              price="$1.180.000"
              street="54 Mid Street Florida, OR 27001"
              bedrooms="6"
              bathrooms="5"
              area="450m²"
              floor="3"
              parking="8 spots"
              textButton="Schedule a visit"
            />
          </div>
        </div>

        <div className="item">
          <div className="propertyCard">
            <PropertyCard
              src="../../../public/images/property/property-04.jpg"
              type="Luxury Villa"
              price="$1.180.000"
              street="54 Mid Street Florida, OR 27001"
              bedrooms="6"
              bathrooms="5"
              area="450m²"
              floor="3"
              parking="8 spots"
              textButton="Schedule a visit"
            />
          </div>
        </div>

        <div className="item">
          <div className="propertyCard">
            <PropertyCard
              src="../../../public/images/property/property-05.jpg"
              type="Luxury Villa"
              price="$1.180.000"
              street="54 Mid Street Florida, OR 27001"
              bedrooms="6"
              bathrooms="5"
              area="450m²"
              floor="3"
              parking="8 spots"
              textButton="Schedule a visit"
            />
          </div>
        </div>

        <div className="item">
          <div className="propertyCard">
            <PropertyCard
              src="../../../public/images/property/property-06.jpg"
              type="Luxury Villa"
              price="$1.180.000"
              street="54 Mid Street Florida, OR 27001"
              bedrooms="6"
              bathrooms="5"
              area="450m²"
              floor="3"
              parking="8 spots"
              textButton="Schedule a visit"
            />
          </div>
        </div>
      </div>
    </>
  );
}
