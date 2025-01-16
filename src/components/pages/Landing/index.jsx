import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */

const styles = {
  landingTop: {
    backgroundColor: "#666555",
    padding: "1rem"
  },
  landingContent: {
    margin: "auto"
  },
  title: {
    fontSize: 60,
    color: "white"
  },
  whiteWords: {
    color: "white",
    padding: "15px"
  },
  blackWords: {
    fontSize: 24,
    color: "black",
    padding: "1.5rem"
  },
  images: {
    float: "center",
    width: "500px",
    height: "auto",
    align: "box"
  }
};

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
      <section style={styles.landingTop}>
        <h1 style={styles.title}>Asylum Office Grant Rate Tracker</h1>
        <h3 style={styles.whiteWords}>The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions</h3>
      </section>
      <section style={{display: "block", margin: "auto"}}>
        <div>
          <img style={styles.images} src={barGraph} alt="barGraph image" />
          <h3 style={styles.blackWords}>Search Grant Rates By Office</h3>
        </div>
        <div>
          <img style={styles.images} src={pieChart} alt="pieChart image" />
          <h3 style={styles.blackWords}>Search Grant Rates By Nationality</h3>
        </div>
        <div>
          <img style={styles.images} src={lineGraph} alt="lineGraph image" />
          <h3 style={styles.blackWords}>Search Grant Rates Over Time</h3>
        </div>
      </section>
      <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
    </div>
  );
};
