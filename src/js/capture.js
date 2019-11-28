import React, { Component, Fragment } from 'react';
import html2canvas from 'html2canvas';
import JQuery from 'jquery';

function Title(props) {
  return (
    <div>
      <h1>pdqwodopwqdopwqodp</h1>
    </div>
  );
}
function Subtitle(props) {
  return (
    <div>
      <h1>pdqwodopwqdopwqodp</h1>
    </div>
  );
}

class Componente extends Component {
  componentDidMount() {
    html2canvas(JQuery('#capture')[0]).then(function(canvas) {
      JQuery('#element-out').append(canvas);
      const dataURL = canvas.toDataURL();
      console.log(dataURL);
    });
  }

  render() {
    return (
      <Fragment>
        <div ref={this.myRef} id="capture" style={{ padding: '10px', background: '#f5da55' }}>
          <h4 style={{ color: '#000' }}>Hello world!</h4>
          <Title />
          <Subtitle />
        </div>
        <div id="element-out"></div>
      </Fragment>
    );
  }
}

export default Componente;
