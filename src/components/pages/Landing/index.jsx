import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

import { NavLink } from "react-router-dom"; // imported NavLink to seamlessly switch between pages on the same website
import "./output.css";                      // importing my Landing Page Tailwind styles

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */

export const LandingPage = () => {
  const navigate = useNavigate(); // I used window.open over the useNavigate() hook in handleReadMore() and it worked just fine
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 200; // scrollStep controls how many times it scrolls up (20)
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 5); // Adjust the interval time for smoothness (10)
  };
  
  // I did a quick W3schools search on the windows object and window.open is what I was looking for. 
  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    window.open("https://humanrightsfirst.org");
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      {/* this section is on the top 3 images */}
        <div className='text-white bg-[#666555] pt-4 pb-8'>
          <h1 className='text-6xl mb-8'>Asylum Office Grant Rate Tracker</h1>
          <h3>The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions</h3>
        </div>
      {/* this section is on the top 3 images */}
      <section className='flex justify-center mt-24 mb-12 gap-[80px]'>
          <div>
            <img className='h-[300px] w-[500px]' src={barGraph} alt='Bar Graph'/>
            <h3 className='text-2xl mt-4'>Search Grant Rates By Office</h3>
          </div>
          <div>
            <img className='h-[300px] w-[350px]' src={pieChart} alt='Pie Chart'/>
            <h3 className='text-2xl mt-4'>Search Grant Rates By Nationality</h3>
          </div>
          <div>
            <img className='h-[300px] w-[500px]' src={lineGraph} alt='Line Graph'/>
            <h3 className='text-2xl mt-4'>Search Grant Rates Over Time</h3>
          </div>
      </section>
      <div className='flex justify-center gap-[30px]'>
        {/* the buttons underneith the graph images to view data*/}
          <NavLink className='text-white bg-[#AAAAAA] font-semibold p-2' to='/graphs'>View the Data</NavLink>
          <button className='text-white bg-[#AAAAAA] font-semibold p-2' onClick={downloadCSV}>Download the Data</button>
      </div>
      <section className='flex justify-center'>
        <div className='p-32'>
          <img className='h-[400px] w-[700px] rounded-2xl' src={paperStack} alt='Paper'/>
        </div>
        <div className='p-32 text-center'>
          <p className='text-xl h-[400px] w-[700px] py-[100px]'>Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p>
        </div>
      </section>
      <h3 className='text-5xl'>Systemic Disparity Insights</h3>
      <section className='flex justify-center gap-[64px] mb-16'>
        <div className='max-w-[550px] m-16'>
          <h3 className='text-4xl mb-16'>36%</h3>
          <p className='text-lg'>By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.</p>
        </div>
        <div className='max-w-[550px] m-16'>
          <h3 className='text-4xl mb-16'>5%</h3>
          <p className='text-lg'>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
        </div>
        <div className='max-w-[550px] m-16'>
          <h3 className='text-4xl mb-16'>6x Lower</h3>
          <p className='text-lg'>Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.</p>
        </div>
      </section>
      <div>
          <button className='text-white bg-[#666555] px-4 py-2' onClick={handleReadMore}>Read More</button>
      </div>
      <div>
          <button className='m-16' onClick={scrollToTop}>Back To Top ^</button>
      </div>
      {/* <div className="test">{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div> */}
    </div>
  );
};
