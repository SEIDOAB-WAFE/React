import React from 'react'
import '../../../css/flexbox_5.css';

export function Colorboxes(props) {

  console.log(props.colors);

  return (
    <>
    <div>{props.title}</div>
    <div className="FlexWrap">

      {props.colors.map((color)=><Colorbox color={color}/>)}
	  </div>
    </>
  )
}

export function Colorbox(props)
{

  const c = `FlexItem ${props.color}`;
  return (<div className={c}>{props.color}</div>)
}
