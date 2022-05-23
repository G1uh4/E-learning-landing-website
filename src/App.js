import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PartOneBlock from "./pageParts/partOne";
import PartTwoBlock from "./pageParts/partTwo";
import CardOne from "./components/cardOne";
import CardTwo from "./components/cardTwo";
import {faBriefcase,
   faPersonRunning,
    faPalette,
     faCamera, 
     faBitcoinSign} from "@fortawesome/free-solid-svg-icons"



function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="displayFirstPagePart">
       <PartOneBlock />
       <PartTwoBlock />
     </div>

     <div className="displayCards">
      <CardOne />

<CardTwo 
      icon={faPersonRunning}
      text="
      Learn the latest animation tehniques to create stunning motion design and captivate your audience
      "
      startBtn="Start"
      />

<CardTwo 
      icon={faPalette}
      text="
      Create beautiful, usable interfaces to help shape the future of how the web looks and works
      "
      startBtn="Start"
      />

<CardTwo 
      icon={faCamera}
      text="
      Explore critical fundamentals like lighting, compositions, and focus to
      capture exceptional photos.
      "
      startBtn="Start"
      />

<CardTwo 
      icon={faBitcoinSign}
      text="
      All you need to know to get started investing in crypto. Go from begginer to
      advanced with this 54 hours course.
      "
      startBtn="Start"
      />

<CardTwo 
      icon={faBriefcase}
      text="
      A step-by-step playbook to help you start, scale, and sustain your business without outside
      investment
      "
      startBtn="Start"
      />
    <Footer />
     </div>
    </div>
  );
}

export default App;
