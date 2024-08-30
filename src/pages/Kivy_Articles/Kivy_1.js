import React from 'react';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import CardContent from "@mui/material/CardContent";
import '../Pages.css';
import '../../App.css';

const Kivy_1 = () => {
    return (
        <div >
            <br></br>
            <Paper sx={{bgcolor: '#FEF1E0', textAlign: "center", padding: '2px'}} elevation={24}>
                <h1>Article 1: Project Design.</h1>
                <div style={{ overflow: "auto" }}>
                    <div className="menu">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>
                    </div>
                    <div className="main">
                    <p>This article series includes lots of unnessasary steps if you just want to code a calculator. If thats you find another tutorial. The point of this article is to teach Python/Kivy/KivyMD to a decent level. Mostly for the purpose of my own revision.</p>
                    <h2>What you will learn.</h2>
                    <p>You will learn to use the Kivy Screen Manager, GUI design, important python libraries.</p>
                    <h2>Purpose: What we hope to achive.</h2>
                    <p>We want a working app which can adapt to any new functionality or widgets we add. </p>
        
                    <h2>Rules and good practice of working with kivy.</h2>
                    <h3>This is Python territory, incorrect indentation kills - your code.</h3>
                    <p>Python and kivy will not tolerate messing around with indentation. I learnt this the hard way and had to rewrite pages because of this. <b>USE the TAB for indentation NOT space bar!!!</b></p>
                    <h2>Initial set up.</h2>
                    <p>This assumes that you have python already installed.</p>
                    <h3>Open your terminal</h3>
                    <div className="mycode"><h3>Terminal</h3><p>python3 -m venv name_of_your_project</p></div>
                    <p>This creates your project folder and the necessary files for everything to run. Now change directory with the following command.</p>
                    <div className="mycode"><h3>Terminal</h3><p>cd name_of_your_project</p></div>
                    <p>Activate your virtual environment.</p>
                    <div className="mycode"><h3>Terminal</h3><p>source bin/activate</p></div>
                    <p>Install kivy and kivyMD, run individually!</p>
                    <div className="mycode"><h3>Terminal</h3><p>pip3 install kivy<br/>pip3 install kivymd</p></div>
                    <h2>Here is the starter code.</h2>
                    <p>Using your file editor of choice: Create your main python file with the ".py" file extension, you can name it anything but main.py works as well.</p>
                    <div className="mycode"><h3>main.py</h3>
### This is main.py ###<br/>
import kivy<br/>
from kivymd.app import MDApp<br/>
from kivy.lang import Builder<br/>
from kivy.uix.screenmanager import ScreenManager, Screen, NoTransition<br/>
<br/>
####################################################<br/>
### KIVY FILES                                   ###<br/>
####################################################<br/>
<br/>
Builder.load_file('')<br/>
<br/>
###################################################<br/>
### Screen classes                              ###<br/>
###################################################<br/>
<br/>
class Home(Screen):<br/>
{"    "}pass<br/>
<br/>

class Maths(Screen):<br/>
{"    "}pass<br/>
<br/>
####################################################<br/>
### WindowManager                                ###<br/>
####################################################<br/>
<br/>
class WindowManager(ScreenManager):<br/>
{"    "}pass<br/>
<br/>
#####################################################################<br/>
### VERY IMPORTANT - GO! LEAVE IT ALONE! (UNLESS YOU KNOW WHAT YOUR DOING)  ####<br/>
#####################################################################<br/>
<br/>
class ScreenApp(MDApp):<br/>
{"    "}def build(self):<br/>
{"    "}{"    "}return WindowManager(transition=NoTransition())<br/>
<br/>
if __name__=='__main__':<br/>
{"    "}ScreenApp().run()<br/>
                </div>
                <h3>Inside your project director create a new folder to house your kivy files</h3>
                <div className="mycode"><h3>Terminal</h3>mkdir kivy<br/>cd kivy</div>
                <h3>Now that you are inside the folder, you can create three kivy files by the name of "home.kv", "maths.kv" and "windowmanager.kv".</h3>
                <div className="mycode"><h3>windowmanager.kv</h3>#:kivy 2.3.0<br/><br/>{"<WindowManager>:"}<br/>{"    "}Home:<br/>{"    "}Maths:<br/></div>
                <h4>home.kv</h4>    
                <div className="mycode"><h3>home.kv</h3>#:kivy 2.3.0<br/>{"<Home>:"}<br/>{"    "}name: 'home'<br/>{"    "}Screen:<br/>{"    "}{"    "}MDBoxLayout:<br/>{"    "}{"    "}{"    "}orientation: "vertical"<br/>{"    "}{"    "}{"    "}Button:<br/>{"    "}{"    "}{"    "}{"    "}text: "big red button"<br/>{"    "}{"    "}{"    "}{"    "}background_color: 1, 0, 0, 1</div>
                <h3>In your main python file, create the correct Builder imports.</h3>
                <p>We do not need to use the maths.kv yet.</p>
                <div className="mycode"><h3>main.py</h3>Builder.load_file('./kivy/windowmanager.kv')<br/>Builder.load_file('./kivy/home.kv')</div>
                <h2>In the terminal, Start your Application</h2>
                <div className="mycode"><h3>Terminal</h3>python3 main.py</div>
                </div>
                <div className="right">
                    <h2>About</h2>
                    <p>blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar, blar,blar, blar, blar, blar, blar,blar, blar, blar, blar, blar,blar, blar, blar, blar, blar,blar, blar, blar, blar, blar</p>
                </div>

                </div>
            </Paper>
        </div>
    );
}

export default Kivy_1;