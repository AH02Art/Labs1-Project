import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

import { NavLink } from "react-router-dom"; // imported NavLink to seamlessly switch between pages
import "./styles.css";                    // importing my styles

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
        <div id="title">
          <h1 id="big-text" className="white-text">Asylum Office Grant Rate Tracker</h1>
          <h3 className="white-text small-text">The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions</h3>
        </div>
      <section id="section1">
        <div>
          <img className="images" src={barGraph} alt="barGraph image"/>
          <h3 className="image-text">Search Grant Rates By Office</h3>
        </div>
        <div>
          <img className="images" src={pieChart} alt="pieChart image"/>
          <h3 className="image-text">Search Grant Rates By Nationality</h3>
        </div>
        <div>
          <img className="images" src={lineGraph} alt="lineGraph image"/>
          <h3 className="image-text">Search Grant Rates Over Time</h3>
        </div>
      </section>
      <div id="buttons">
          <NavLink to="/graphs" className="white-text button">View the Data</NavLink>
          <button onClick={downloadCSV} className="white-text button">Download the Data</button>
      </div>
      <section id="section2">
        <img id="big-image" src={paperStack} alt="papers image"/>
        <p id="p">Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p>
      </section>
      <div className="test">{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
    </div>
  );
};
