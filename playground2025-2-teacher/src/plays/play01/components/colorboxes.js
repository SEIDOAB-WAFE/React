import React from 'react'
import '../../../css/flexbox_5.css';

export function Colorboxes() {
  return (
    <>
    <div>colorboxes</div>
    <div className="FlexWrap">
        <Colorbox color="Red"/>
        <Colorbox color="Orange"/>
        <Colorbox color="Green"/>
        <Colorbox color="Yellow"/>
        <Colorbox color="Blue"/>
	</div>
    </>
  )
}

export function Colorbox(props)
{

  const c = `FlexItem ${props.color}`;
  return (<div className={c}>Red box</div>)
}
