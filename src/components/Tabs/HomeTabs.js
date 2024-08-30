import react from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "./Tabs";
import YoutubeChannels from "../../pages/Recommended/YoutubeChannels";
import "../../App.css"
///////////////////////////////
// main function
///////////////////////////////

export default function HomeTabs() {
    return (
        <main sx={{padding: 0}}>
            <Tabs>
                <Tab label={"1"} tabName={"Articles"}>
                    <a href="#/Policy_vs_Principles">Policy VS Principles.</a>
                    <p>What is "The State"?</p>
                </Tab>
                <Tab label={"2"} tabName={"Opinions"}>
                    <p>2</p>
                </Tab>
                <Tab label={"3"} tabName={"Funny"}>
                    <h1>Nothing Serious Just Memes</h1>
                    <p>Leftists being angry</p>
                    <p>Feminists: all mad and hairy.</p>
                    <p>LGBTX-TREME: The Alphabet Mafia</p>
                    <p>Tin foil hat gang: conspiritorial loonatics</p>
                    <p>Climate Extremism</p>
                    <p>Modern Racial Politics</p>
                    <p>Politicians being clowns</p>
                </Tab>
                <Tab label={"4"} tabName={"National Policy"}>
                    <h2>You could call it a manifesto.</h2>
                    <h3>Disclaimer: These are philosophical explorations and opinions which I may or may not believe. Feel free to disagree.</h3>
                    <div>
                        <div className="BoxListItem">
                            <h2>Social</h2>
                            <ul>
                                <li><a>Education</a></li>
                                <li><a>Healthcare</a></li>
                                <li><a>Religion</a></li>
                                <li><a>Family</a></li>
                                <li><a>Substances</a></li>
                                <li><a>Media</a></li>
                            </ul>
                        </div>
                        <div className="BoxListItem">
                            <h2>Economic</h2>
                            <ul>
                                <li><a>Taxation</a></li>
                                <li><a>Debt and Government borrowing</a></li>
                                <li><a>Currency</a></li>
                                <li><a>Soveign Wealth Fund</a></li>
                                <li><a>Privatisation and Decentralisation</a></li>
                                <li><a>Regulation</a></li>
                                <li><a>Welfare State</a></li>
                                <li><a>Private Property</a></li>
                            </ul>
                        </div>
                        <div className="BoxListItem">
                            <h2>Resource Management</h2>
                            <ul>
                                <li><a>Water</a></li>
                                <li><a>Agricultural</a></li>
                                <li><a>Energy</a></li>
                                <li><a>Mineral resources</a></li>
                                <li><a>Waste Management</a></li>
                                <li><a>Transportation</a></li>
                            </ul>
                        </div>
                        <div className="BoxListItem">
                            <h2>Law and Order</h2>
                            <ul>
                                <li><a>Military: Defence and Offence</a></li>
                                <li><a>Policing and security</a></li>
                                <li><a>Border Protection</a></li>
                                <li><a></a></li>
                            </ul>
                        </div>
                        <div className="BoxListItem">
                            <h2>Constitutional</h2>
                            <ul>
                                <li><a>Monarchy</a></li>
                                <li><a></a></li>
                                <li><a></a></li>
                                <li><a></a></li>
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab label={"5"} tabName={"Recommended"}>
                    <a href="#/YoutubeChannels">Recommended Youtube Channels</a>
                </Tab>
                <Tab label={"6"} tabName={"Culture"}>
                    <p>6</p>
                </Tab>
                <Tab label={"7"} tabName={"Organisations"}>
                    <p>7</p>
                </Tab>
                <Tab label={"8"} tabName={"Organisations"}>
                    lol
                </Tab>
            </Tabs>
        </main>
    )
}