import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class Car extends React.Component{
  render(){
    return (<div class="car"></div>
    );
  }
}
ReactDOM.render(
  <Car></Car>,
  document.getElementById('root')
);

