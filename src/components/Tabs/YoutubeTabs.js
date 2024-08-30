import react from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "./Tabs";
///////////////////////////////
// main function
/////////////////////////////////////
export default function YoutubeTabs() {
  return (
    <main sx={{padding: 0}}>
      <Tabs>
        <Tab label={"1"} tabName={"Organisations"}>
            <ul>
                <li><a href="https://www.youtube.com/user/ReasonTV">ReasonTV</a></li>
                <li><a href="https://www.youtube.com/@PragerU">PragerU</a></li>
                <li><a href="https://www.youtube.com/@TheAtlasSociety">Atlas Society</a></li>
                <li><a href="https://www.youtube.com/@catoinstitutevideo">Cato Institute</a></li>
                <li><a href="https://www.youtube.com/@turningpointusa">Turning Point USA</a></li>
            </ul>
        </Tab>
        <Tab label={"2"} tabName={"Popular Culture"}>
            <div>
                <h2>Popular Culture</h2>
                <h3>General</h3>
                <ul>
                    <li><a href="https://www.youtube.com/channel/UC7bYyWCCCLHDU0ZuNzGNTtg/featured">Comment Section with Brett Cooper</a></li>
                    <li><a href="https://www.youtube.com/@PopCultureCrisis">Pop Culture Crisis</a></li>
                    <li><a href="https://www.youtube.com/@RealAlexClark">Real Alex Clarke</a></li>
                </ul>
                <h3>Film and Gaming</h3>
                <ul>
                    <li><a href="https://www.youtube.com/channel/UCSJPFQdZwrOutnmSFYtbstA">Critical Drinker</a></li>
                    <li><a href="https://www.youtube.com/@DespotofAntrim">Despot of Antrim</a></li>
                    <li><a href="https://www.youtube.com/@nerdrotic">Nerdrotic</a></li>
                    <li><a href="https://www.youtube.com/@disparutoo">Disparu</a></li>
                </ul>
                <h3>Sport</h3>
                <a href="https://www.youtube.com/@CrainAndCompany">Crain and Company</a>
            </div>
        </Tab>
        <Tab label={"3"} tabName={"PodCasts"}>
            <h2>PodCasts</h2>
            <ul>
                <li><a href="#"></a></li>
            </ul>
        </Tab>
        <Tab label={"4"} tabName={"Commentary"}>
          <p>text 7</p>
                
        </Tab>
        <Tab label={"5"} tabName={"Comedy"}>
          <p>text 8</p>
        </Tab>
      </Tabs>
    </main>
  )
}


/*                 <li><a href=""></a></li> */
