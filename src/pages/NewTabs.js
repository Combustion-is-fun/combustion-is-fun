import React from 'react';







const NewTabs = () => {
  return (
    <div class="tabs">
        <nav class="tab-nav">
            <ul class="tab-list" role="tablist" aria-orientation="horizontal">
            </ul>
        </nav>
        <div role="tabpanel" id="panel-1" aria-labelledby="tab-1" class="tab-panel">
            <p>Content of Tab #1</p>
        </div>
        <div role="tabpanel" id="panel-1" aria-labelledby="tab-2" class="tab-panel">
            <p>Content of Tab #2</p>
        </div>
        <div role="tabpanel" id="panel-3" aria-labelledby="tab-3" class="tab-panel">
            <p>Content of Tab #3</p>
        /div>
    </div>

export default NewTabs;