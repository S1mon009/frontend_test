import "./third-block.scss";

const ThirdBlock = ({ content }) => {
  return (
    <div className="third-block">
      <h3 className="third-block__heading">{content.title}</h3>
      <div className="third-block__content">{content.content}</div>
    </div>
  );
};

export default ThirdBlock;
