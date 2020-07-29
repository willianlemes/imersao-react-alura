import React from 'react';
import '../menu.css';

function ButtonLink(props) {
  console.log(props);

  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
