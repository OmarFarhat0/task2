import "./slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ city, country, text, imagesLinks }) {
  let indexImage = 0;

  //include icons in the left and right
  function changeBackgroundOne(n) {
    indexImage += n;
    if (indexImage < 0) {
      indexImage = imagesLinks.length - 1;
    } else if (indexImage === imagesLinks.length) {
      indexImage = 0;
    }

    document.getElementsByClassName(
      "slider"
    )[0].style.backgroundImage = `url(${imagesLinks[indexImage]})`;
  }

  //include icons in the bottom
  function changeBackgroundTwo(event) {
    //reset all
    document.getElementsByClassName("clickChangeBack0")[0].style.color =
      "white";
    document.getElementsByClassName("clickChangeBack1")[0].style.color =
      "white";
    document.getElementsByClassName("clickChangeBack2")[0].style.color =
      "white";

    let targetClass = event.target.className;
    document.getElementsByClassName(targetClass)[0].style.color = "#f35525";

    let numberChange = Number(targetClass[targetClass.length - 1]);
    document.getElementsByClassName(
      "slider"
    )[0].style.backgroundImage = `url(${imagesLinks[numberChange]})`;
  }

  return (
    <>
      <div className="block">
        <button
          className="leftRightBtn"
          onClick={() => changeBackgroundOne(-1)}
        >
          <FaChevronLeft className="leftRightIcon" />
        </button>

        <div className="introduce">
          <div className="from">
            <p>
              {city}, <span>{country}</span>
            </p>
          </div>

          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="secondButtons">
          <button className="clickChangeBack0" onClick={changeBackgroundTwo}>
            .
          </button>
          <button className="clickChangeBack1" onClick={changeBackgroundTwo}>
            .
          </button>
          <button className="clickChangeBack2" onClick={changeBackgroundTwo}>
            .
          </button>
        </div>
        <button
          className="leftRightBtn"
          onClick={() => changeBackgroundOne(+1)}
        >
          <FaChevronRight className="leftRightIcon" />
        </button>
      </div>
    </>
  );
}
