import React from "react";
import Arrow from "./images/icon-arrow-down.svg";

export default function Question(props) {
  const [active, setActive] = React.useState(false);
  const [style, setStyle] = React.useState({
    qStyle: {},
    aStyle: { maxHeight: 0, overflow: "hidden" }
  });

  const handleChange = (event) => {
    const type = event._reactName;

    switch (type) {
      case "onClick":
        setActive(!active);
        setStyle((prev) => ({
          aStyle: {
            maxHeight: !active ? 40 : 0,
            overflow: !active ? "none" : "hidden",
          },
          qStyle: {
            color: !active ? "black" : "hsl(14, 88%, 65%)",
            fontWeight: !active ? "900" : "400",
          },
        }));
        break;

      case "onMouseEnter":
        setStyle((prev) => ({
          ...prev,
          qStyle: {
            color: !active && "hsl(14, 88%, 65%)",
            fontWeight: active ? "900" : "400",
          },
        }));
        break;

      case "onMouseLeave":
        setStyle((prev) => ({
          ...prev,
          qStyle: { color: "black", fontWeight: active ? "900" : "400" },
        }));
        break;
    }
  };

  return (
    <section
      className="question"
      style={{ cursor: "pointer" }}
      onMouseLeave={handleChange}
      onMouseEnter={handleChange}
      onClick={handleChange}
    >
      <section className="q">
        <p style={style.qStyle}>{props.question}</p>
        <img
          src={Arrow}
          style={{ transform: active ? "rotate(180deg)" : "none" }}
          alt="arrow-img"
        />
      </section>
      <p className="a" style={style.aStyle}>
        {props.answer}
      </p>
      <hr />
    </section>
  );
}
