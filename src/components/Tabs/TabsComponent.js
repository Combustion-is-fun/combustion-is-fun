
import React from "react";
import { Tabs, Tab } from "./Tabs";
import HomePage from "../../pages/Homepage";
import { Link } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////
// import pages
////////////////////////////////////////////////////////////

import Recommended from "../../pages/Recommended/Recommended";



///////////////////////////////
// main function
///////////////////////////////
export default function TabsComponent() {
    return (
        <div>
            <Tabs>
                <Tab label={"1"} tabName={"Interesting Bytes"}>
                    <p>Hello, this is the Interesting Bytes blog, just cool things I have learnt and written about. Scroll through the Tabs and find something interesting.</p>
                </Tab>
                <Tab label={"5"} tabName={"Software"}>
                    <p>How to use Proton</p>
                    <p>How to use Aegis for second factor authentication.</p>
                    <p>Obsidian: a review and how to add cool plugins.</p>
                    <p>Chrome Remote Desktop: using a touch screen on an incompatable device.</p>
                </Tab>
                <Tab label={"6"} tabName={"Coding"}>
                    <h3>Python and Derivatives</h3>
                    <h4>Series: Kivy and KivyMD for Stem Students</h4>
                    <a href="#/kivy_article_1">Article 1: Project Design.</a>
                    <p>Article 2: Basic Calculator.</p>
                    <p>Article 3: Advanced Calculator using Numpy.</p>
                    <p>Article 4: Integrating Matplotlib into kivy for ploting functions.</p>
                    <p>Article 5: Adding symbolic mathematics using sympy. </p>
                    <p>Article 6: Adding further functionality with Scipy </p>
                    <h4>other</h4>
                    <p>Basic two factor authenticator app using kivy, kivyMD and Python.</p>
                    <h3>Web Development</h3>
                    <p>Web apps vs native apps</p>
                    <div>
                        <p>Github Website</p>
                    </div>
                </Tab>
                <Tab label={"7"} tabName={"stuff"}>
                    <p>text 7</p>
                </Tab>
                <Tab label={"8"} tabName={"Comedy"}>
                    <p>text 8</p>
                </Tab>
                <Tab label={"9"} tabName={"tab nine"}>
                    <p>text 9</p>
                </Tab>
                <Tab label={"10"} tabName={"tab ten"}>
                    <p>text 10</p>
                </Tab>
                <Tab label={"2"} tabName={"Mathematics"}>
                    <h3>Calculus</h3><p>Algebra</p><p>Geometry</p>
                </Tab>
                <Tab label={"3"} tabName={"Physics"}>
                    <p>Understanding Feynman diagrams</p>
                </Tab>
                <Tab label={"4"} tabName={"Chemistry"}>
                    <h3>Organic</h3>
                    <h3>Inorganic</h3>
                    <p>Geology: an introduction.</p>
                    <h3>Physical</h3>
                    <p>Mass Spectroscopy</p>
                </Tab>
            </Tabs>
        </div>
    )
}