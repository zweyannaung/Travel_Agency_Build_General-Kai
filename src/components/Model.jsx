import React, { useState } from 'react'

const Model = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showModal = () => setIsOpen(true)

  const Modal = ({ src, alt, caption, onClose }) => {
    return (
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img className="modal-content" src={src} alt={alt} />
        {caption.length > 0 && <div className="caption">{caption}</div>}
      </div>
    )
  }
  return (
    <div className="App">
    <h1>Responsive Modal Images with CSS and React Hooks.</h1>
    <p>
      Original example is{" "}
      <a href="https://www.w3schools.com/howto/howto_css_modal_images.asp">
        w3schools - How TO - Modal Images
      </a>
    </p>
    <br />
    <img
      className="image"
      onClick={showModal}
      src="https://source.unsplash.com/NQSWvyVRIJk/800x599"
      alt="Snow"
    />
    {isOpen && (
      <Modal
        src="https://source.unsplash.com/NQSWvyVRIJk/800x599"
        alt="snow"
        caption="caption"
        onClose={() => setIsOpen(false)}
      />
    )}
  </div>
  )
}

export default Model
