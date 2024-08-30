

import React from 'react';
import "../../pages/Pages.css";

const Meh = () => {
    const responsive = {}
    return (
<div>
    
    <div style={{ backgroundColor: "#e5e5e5", padding: 15, textAlign: "center" }}>
        <h1>Hello World</h1>
    </div>
    <div style={{ overflow: "auto" }}>
        <div className="menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
        </div>
        <div className="main">
            <h2>Lorum Ipsum</h2>
            <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </p>
        </div>
        <div className="right">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
    </div>
</div>
    );
}
export default Meh;