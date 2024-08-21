import "./form.css";

export default function Form({ data, contentSubmit }) {
  return (
    <>
      <ul>
        {data.map((element, index) => {
          return (
            <li key={index}>
              <label>{element.label}</label>

              {element.type != "textarea" ? (
                <input type={element.type} placeholder={element.placeholder} />
              ) : (
                <textarea placeholder={element.placeholder}></textarea>
              )}
            </li>
          );
        })}
      </ul>
      <input type="submit" value={contentSubmit} />
    </>
  );
}
