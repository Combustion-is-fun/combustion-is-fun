import logo from './logo.svg';
import './App.css';
import * as React from 'react';


// My components
import Header from './components/Header';

// Material User Interface components (widgets)
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// its better to put in another file and import as it makes management easier

function App() {
  return (
    <div className="App">
        <header>
            <Header />
        </header>
        <br />
        <br />
        <br />
        <h1>Hello World!</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <p> How to Train Your Dragon (abbreviated HTTYD) is an American media franchise from DreamWorks Animation and loosely based on the eponymous series of children's books by British author Cressida Cowell. It consists of three feature films: How to Train Your Dragon (2010), How to Train Your Dragon 2 (2014), and How to Train Your Dragon: The Hidden World (2019). The franchise also contains five short films: Legend of the Boneknapper Dragon (2010), Book of Dragons (2010), Gift of the Night Fury (2011), Dawn of the Dragon Racers (2014), and How to Train Your Dragon: Homecoming (2019). A live-action reboot from Universal Pictures is in development and scheduled for release on June 13, 2025.[1][2]

The television series based on the events of the first film, DreamWorks Dragons, began airing on Cartoon Network in September 2012. The first and second seasons were titled Dragon: Riders of Berk and Dragons: Defenders of Berk respectively. After the two seasons on Cartoon Network, the series was given the new title Dragons: Race to the Edge. The characters are older and it served as a prequel to the second film, running from June 2015 to February 2018.[3] A second series, titled Dragons: Rescue Riders, began airing on Netflix in 2019 and features a completely different cast and locale than the original series of films and TV shows, but is set in the same universe. A third series, Dragons: The Nine Realms, began streaming on Hulu and Peacock in December 2021, with Rescue Riders transferring to Peacock beginning with the third season under the Heroes of the Sky subtitle. Unlike past entries in the franchise, The Nine Realms is set in the 21st century, specifically 1,300 years after the events of The Hidden World.

The franchise primarily follows the adventures of a young Viking named Hiccup Horrendous Haddock III (voiced by Jay Baruchel), son of Stoick the Vast, leader of the Viking island of Berk. Although initially dismissed as a clumsy and underweight misfit, he soon becomes renowned as a courageous expert in dragons, alongside Toothless, a member of the rare Night Fury breed as his flying mount and his closest companion. Together with his friends, he manages the village's allied dragon population in defense of his home as leader of a flying corps of dragon riders. Upon becoming leaders of their kind, Hiccup and Toothless are forced to make choices that will truly ensure peace between people and dragons. Dean DeBlois, the director of the film trilogy, described its story as "Hiccup's coming of age", taking place across a span of five years between the first and second film, and a year between the second and third film.[4]

The film series has been highly acclaimed, with each film nominated for the Academy Award for Best Animated Feature, in addition to the first film's nomination for the Academy Award for Best Original Score.Original animated trilogy
How to Train Your Dragon (2010)
Main article: How to Train Your Dragon (2010 film)
How to Train Your Dragon, the first film in the series, was released on March 26, 2010. It was written and directed by Chris Sanders and Dean DeBlois, and is inspired by the 2003 book of the same name by Cressida Cowell. The story takes place in a mythical Fantasy Viking world where a young Viking teenager named Hiccup aspires to follow his tribe's tradition of becoming a dragon slayer. After finally capturing his first dragon, and with his chance of finally gaining the tribe's acceptance, he finds that he no longer has the desire to kill the dragon and instead befriends it. The film grossed nearly $500 million worldwide, and was nominated for the Academy Award for Best Animated Feature.

How to Train Your Dragon 2 (2014)
Main article: How to Train Your Dragon 2
A sequel, How to Train Your Dragon 2, was confirmed on April 27, 2010.[5] The film was written and directed by DeBlois, the co-director of the first film. Bonnie Arnold, the producer of the first film, also returned, with Sanders, who co-directed the first film, only exec-producing this time due to his involvement with The Croods and its sequel until the latter was delayed.[6] The film was released on June 13, 2014.[7] It was announced that the entire original voice cast – Baruchel, Butler, Ferguson, Ferrera, Hill, Mintz-Plasse, Miller and Wiig – would return for the sequel.[8] New cast includes Kit Harington as Eret, Cate Blanchett as Valka, and Djimon Hounsou as Drago Bludvist.[9] John Powell, the composer of the first film's score, returned for the second and third film.[10] Set five years after the events of the original film, Hiccup and Toothless have successfully united dragons and Vikings. Now 20 years old, Hiccup is pressed to succeed his father as chieftain. When he discovers a group of dragon trappers led by Drago Bludvist, he goes on a quest to find Drago, while also coming across his long-lost mother Valka.

How to Train Your Dragon: The Hidden World (2019)
Main article: How to Train Your Dragon: The Hidden World
In December 2010, DreamWorks CEO Jeffrey Katzenberg confirmed that there would also be a third film in the series: "How To Train Your Dragon is at least three: maybe more, but we know there are at least three chapters to that story."[11] DeBlois, the writer, and director of the second and the third film, said that How to Train Your Dragon 2 is being intentionally designed as the second act of the trilogy: "There are certain characters and situations that come into play in the second film that will have to become much more crucial to the story by the third."[12]

The film's release date was changed several times. In September 2012, 20th Century Fox and DreamWorks Animation announced an initial release date of June 18, 2016,[13] which was later changed to June 16, 2016.[14][15] It was then moved to June 9, 2017,[16] and later to May 18, 2018, taking over the release date of Warner Animation Group's The Lego Movie 2: The Second Part.[17] On December 5, 2016, the release date was pushed back again to March 2, 2019.[18] This was the first DreamWorks Animation film to be distributed by Universal Pictures, after NBCUniversal's acquisition of the company in 2016,[19] and followed DreamWorks' departure from 20th Century Fox after 2017's Captain Underpants: The First Epic Movie. The film was produced by Arnold, and exec-produced by DeBlois and Sanders.[13] Baruchel, Butler, Blanchett, Ferguson, Ferrera, Hill, Mintz-Plasse, Harington and Wiig reprised their roles from previous films.[13] F. Murray Abraham joined the cast as the film's main villain, Grimmel.[20]

Set one year after the events of the second film, Hiccup had become the new chieftain of Berk for dragons and Vikings. His late father had told a younger Hiccup to seek out the haven of dragons, known as "the Hidden World". Upon discovering a female Night Fury dragon, Toothless initiates a new bond with her. The Night Fury killer, Grimmel the Grisly, sets out to find and kill Toothless, prompting Hiccup to choose between keeping the dragons or setting them all free.

Live-action reboot
Main article: How to Train Your Dragon (2025 film)
In February 2023, a live-action reboot film was announced to be in development, to be produced by Marc Platt Productions and distributed by Universal Pictures, with Dean DeBlois set to return to write and direct, and John Powell set to return to write the score. It was originally scheduled for release on March 14, 2025, but was delayed to June 13 of that year due to the 2023 SAG-AFTRA strike.[1][21][22][23]

In May 2023, Mason Thames and Nico Parker were announced to have been cast as Hiccup and Astrid, respectively.[24] Filming began in January 15, 2024. </p>
    </div>
  );
}
export default App;


