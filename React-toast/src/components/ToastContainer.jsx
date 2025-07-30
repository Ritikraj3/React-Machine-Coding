import React, { useRef, useState } from "react";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({})

  const handleClose = (id) => {
    clearTimeout(timerRef.current[id])
    delete timerRef.current[id]
    setToasts((prevToasts) => {const filteredArr = prevToasts.filter((toast) => {
        return toast.id !== id;
      });
      return filteredArr
    })
  };

  const handleAdd = (message, type) => {
    const id = crypto.randomUUID();
    const newToasts = [...toasts, { id,message, type }];
    setToasts(newToasts);
    timerRef.current[id] = setTimeout(() => {
      handleClose(id);
    }, 8000);
  };
  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>X</span>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button onClick={() => handleAdd("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handleAdd("Info", "info")}>Info Toast</button>
        <button onClick={() => handleAdd("Error", "error")}>Error Toast</button>
        <button onClick={() => handleAdd("Warning", "warning")}>Warning Toast</button>
      </div>
    </div>
  );
};

export default ToastContainer;
