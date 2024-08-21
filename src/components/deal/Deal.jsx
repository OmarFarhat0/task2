import "./deal.css";

export default function Deal({ features, srcImg, info, contentBtn }) {
  return (
    <>
      <div className="fetures">
        {features.map((element, index) => {
          return (
            <div className="item" key={index}>
              <p>
                {element.whatFeature} <span>{element.valFeature}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="image">
        <img src={srcImg} />
      </div>

      <div className="info">
        <h4>{info.title}</h4>
        <p>{info.firstP}</p>
        <p>{info.secondP}</p>
        <button>{contentBtn}</button>
      </div>
    </>
  );
}
