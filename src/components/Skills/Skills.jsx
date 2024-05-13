import React from 'react'
import '../Skills/Skills.css'



function Skills({ imageSrc , skillText }) { 
  return (
<div id='skillContainer'>
<div id='skillImg'>
<img src={imageSrc} />
</div>
<div id='skillInfo'>
{skillText}
</div>
</div>
  )
}

export default Skills