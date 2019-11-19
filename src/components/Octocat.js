import React from 'react' //why is there { component } in HelloWorld.js

const Octocat = props => {
  return (
    <li>
      <img src={props.image} />
      <div id="textLine">
        {props.name}
        <span id="boldText">{props.tagdescription}</span>
      </div>
    </li>
  )
}
export default Octocat
