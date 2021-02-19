import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  border: 1px;
  margin: auto;
  padding: 20px;
`;

function BlogItem(props) {
  return (
    <Item>{props.value}</Item>
  )
}

export default BlogItem;
