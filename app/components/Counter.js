import React from 'react';


export default({
    value,
    onInc,
    onDe
  }) => (
    <div className="myDiv">
    Devices Connected -

    <button id="increment" onClick={onInc}>Up</button>
    <button id="decrement" onClick={onDe}>Down</button>

    </div>
);
