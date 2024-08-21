import { FaBars } from "react-icons/fa";
import "./navbar.css";

export default function Navbar({
  nameWebsite,
  menuItem,
  indexLinkActive,
  contentBtn,
}) {
  function displayNav() {
    document
      .getElementsByClassName("ulSmallSreen")[0]
      .classList.toggle("active");
  }

  const allNavLinks = menuItem.map(function (item, index) {
    return (
      <li key={index}>
        <a className={indexLinkActive === index ? "linkActive" : ""} href="#">
          {item}
        </a>
      </li>
    );
  });

  return (
    <>
      <div className="container">
        <h1>{nameWebsite}</h1>

        <div className="block">
          <div className="ulLargeScreen">
            <ul>
              {allNavLinks}
              <li>
                <button>{contentBtn}</button>
              </li>
            </ul>
          </div>
          <button className="icon" onClick={displayNav}>
            <FaBars />
          </button>
        </div>
      </div>

      <div className="ulSmallSreen">
        <ul>
          {allNavLinks}
          <li>
            <a href="#">{contentBtn}</a>
          </li>
        </ul>
      </div>
    </>
  );
}
