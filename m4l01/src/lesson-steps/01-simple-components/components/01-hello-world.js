import React from 'react'

//Making Hello World into a component
//https://react.dev/reference/react/createElement

export function HelloWorld01() {

  const myName = "Harry";

  return (
    React.createElement(
    'h1',
     {id: 'my-heading'}, 'text before span tag: ',
     React.createElement(
       'span',
       null,
       `Hello from ${myName} - `,
       React.createElement('em', null, 'Wonderful'),
       ' World'
     ),
     ' :text after span tag',
   )
  )
}

export  function HelloWorld01a() {
  const myName = "Harry";

  return (
    <h1 id = "my-heading">
      text before span tag:
      <span> Hello from {myName} - <em>Wonderful</em> World </span>
      :text after span tag
    </h1>
  );
}

