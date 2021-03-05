import React from 'react';

function Item (props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return <li>{item}</li>
  })
  return (
    <ul>{listItems}</ul>
  )
}
export default Item;