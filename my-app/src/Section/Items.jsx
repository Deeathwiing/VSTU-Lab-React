import React from "react";

const Item = props => {
  let item = props.state.map(item => {
    return (
      <div key={item.id} className={"card dataId" + item.id}>
        <img src={item.picture} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
          <p className="card-text">{item.tags}</p>
        </div>
      </div>
    );
  });
  return item;
};

const items = props => {
  return (
    <div className="card-columns">
      <Item state={props.state} />
    </div>
  );
};

export default items;
