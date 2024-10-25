import React from 'react'

function Avatar({
    children,
    backgroundcolor,
    px,
    py,
    color,
    borderRadius,fontsize,cursor
}) {
    const style={
        backgroundcolor,
        padding:`${px}${py}`,
        color:color||"black",
        borderRadius,
        fontsize,
        textAlign:"center",
        cursor:cursor||null,
        textDecoration:"none"
    };

  return (
    <div style={style} >
        {children}</div>
  )
}

export default Avatar
