import * as React from 'react';

function Tabgroup() {

return(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <h2>Tabs</h2>
      <p>Click on the x button in the top right corner to close the current tab:</p>
      <div className="tab">
        <button
          className="tablinks"
          onclick="openCity(event, 'London')"
          id="defaultOpen"
        >
          London
        </button>
        <button className="tablinks" onclick="openCity(event, 'Paris')">
          Paris
        </button>
        <button className="tablinks" onclick="openCity(event, 'Tokyo')">
          Tokyo
        </button>
      </div>
      <div id="London" className="tabcontent">
        <span
          onclick="this.parentElement.style.display='none'"
          className="topright"
        >
          ×
        </span>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>
      <div id="Paris" className="tabcontent">
        <span
          onclick="this.parentElement.style.display='none'"
          className="topright"
        >
          ×
        </span>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>
      <div id="Tokyo" className="tabcontent">
        <span
          onclick="this.parentElement.style.display='none'"
          className="topright"
        >
          ×
        </span>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
)
};
export default Tabgroup;