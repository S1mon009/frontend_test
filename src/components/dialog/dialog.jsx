import { useState, useEffect } from "react";

import "./dialog.scss";

const Dialog = ({ show, hide, handleSubmit, data }) => {
  const [formData, setFormData] = useState({
    id: data?.id || "",
    title: data?.title || "",
    content: data?.content || "",
  });

  useEffect(() => {
    setFormData({
      id: data?.id || "",
      title: data?.title || "",
      content: data?.content || "",
    });
  }, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div
      className={`dialog ${show ? "dialog--visible" : "dialog--hidden"}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDescription"
    >
      <form className="dialog__form" onSubmit={handleSubmit}>
        <input
          type="number"
          id="id"
          value={formData.id}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <button
          type="button"
          className="dialog__form__close"
          aria-label="Close"
          onClick={hide}
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="dialog__form__input">
          <label htmlFor="title" id="dialogTitle">
            Tytuł
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="dialog__form__input">
          <label htmlFor="content" id="dialogContent">
            Treść
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="dialog__form__submit">
          Zapisz
        </button>
      </form>
    </div>
  );
};

export default Dialog;
