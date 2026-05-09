import React from 'react'

const Skill = ({source, alt, title}) => {
  return (
    <div className="skill-item">
      <img src={source} alt={alt} title={title} />
      <p className="skill-name">{title}</p>
    </div>
  )
}

export default Skill;