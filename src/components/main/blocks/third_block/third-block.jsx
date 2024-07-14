import { Fragment } from "react";
import "./third-block.scss";

const ThirdBlock = ({ content }) => {
  return (
    <div className="third-block">
      {content
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((item) => {
          return (
            <Fragment key={item.id}>
              <h3 className="third-block__heading">{item.title}</h3>
              <div className="third-block__content">{item.content}</div>
            </Fragment>
          );
        })}
    </div>
  );
};

export default ThirdBlock;
