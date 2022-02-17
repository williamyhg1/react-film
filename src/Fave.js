import React from "react";

const Fave = () => {
  const handleClick =(event)=>{
console.log('handling Fave click!')
  }
  
    return (
    <div className="film-row-fave add_to_queue" onClick={handleClick}>
      <p className="material-icons">add_to_queue</p>
    </div>
  );
};

export default Fave;
