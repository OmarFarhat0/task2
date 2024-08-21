import "./featured.css";

export default function Featured({
  questions,
  srcImage,
  nameSection,
  title,
  features,
}) {
  function help(event) {
    let targetClass = event.target.className;
    let number = targetClass[targetClass.length - 1];

    document.getElementById(`answer${number}`).classList.toggle("active");
  }

  return (
    <>
      <div className="image">
        <img src="../../../public/images/featured/featured.jpg" />
      </div>

      <div className="info">
        <div className="introduce">
          <h2>| {nameSection}</h2>
          <h3>{title}</h3>
        </div>

        <ul>
          {questions.map((element, index) => {
            return (
              <div key={index} className="itemQu">
                <button onClick={help}>
                  <li className={`question${index}`}>{element.qusestion}</li>
                </button>
                <li id={index} style={{ display: "none" }}>
                  {element.answer}
                </li>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="fetures">
        {features.map((element, index) => {
          return (
            <div className="item" key={index}>
              <div>
                <img src={element.srcLogo} />
              </div>
              <div>
                <p>{element.whatFeature}</p>
                <p>{element.whatFeature}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
