import bar from "./bar";
import _ from 'lodash'
import printMe from './print'
import moment from 'moment';
// import React from 'react';
// import ReactDOM from 'react-dom'

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 App
//             </div>
//         )
//     }
// }

// ReactDOM.render(<App/>, document.getElementById('root'))

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack1", " "]);
  btn.innerHTML = "Click";
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

bar();
