import Deal from "../deal/Deal";
import "./bestDeal.css";

export default function BestDeal({ nameSection, title, opetions }) {
  return (
    <>
      <h2>| {nameSection}</h2>
      <div className="introduce">
        <div>
          <h3>{title}</h3>
        </div>

        <div>
          {opetions.map((element, index) => {
            return <button key={index}>{element}</button>;
          })}
        </div>
      </div>

      <div className="deal">
        <Deal
          features={[
            { whatFeature: "Total Flat Space", valFeature: "185m" },
            { whatFeature: "Total Flat Space", valFeature: "185m" },
            { whatFeature: "Total Flat Space", valFeature: "185m" },
            { whatFeature: "Total Flat Space", valFeature: "185m" },
            { whatFeature: "Total Flat Space", valFeature: "185m" },
          ]}
          srcImg="../../../public/images/deal/deal-01.jpg"
          info={{
            title: "Extra Info About Property",
            firstP:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
            secondP:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sequi, obcaecati nam quidem corrupti quis accusantium laborum,",
          }}
          contentBtn="Schedule a visit"
        />
      </div>
    </>
  );
}
