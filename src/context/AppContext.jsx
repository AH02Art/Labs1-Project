import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const url = "https://hrf-asylum-be-b.herokuapp.com/cases";

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    const fiscalDataRes = testData;
    return fiscalDataRes;
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    const citizenshipRes = testData.citizenshipResults;
    return citizenshipRes;
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    setIsDataLoading(true);
    axios.all([
      axios.get(`${url}/fiscalSummary`),
      axios.get(`${url}/citizenshipSummary`)   
    ])
    .then(axios.spread(function(fiscal, citizen) {
      const fullData = { ... fiscal.data, citizenshipResults: citizen.data };
      setGraphData(fullData);
    }))
    .catch(function(error) {
      console.error("sorry that's not the right answer!: ", error);
    })
    .finally(function() {
      setIsDataLoading(false);
    })
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
