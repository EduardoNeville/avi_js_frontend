import React, { useState } from 'react';
import axios from 'axios';
import CompanyInfo from './CompanyInfo';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [queryCompanyInfo, setQueryCompanyInfo] = useState('');

  const handleSearchCompany = async () => {
    try {
      const response = await axios.get(`/search_company?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSearchCompanyInfo = async (cik) => {
    try {
      // Update query state with the selected company's CIK
      console.log("Company CIK:", cik);
      setQueryCompanyInfo(cik);
    } catch (error) {
      console.error("Error fetching company info: ", error);
    }
  };

  return (
    <div className='bg-bg_col'>
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-mkt_h1 font-primary_col font-bold">Algorithmic Value Investing</h1>
      </header>
      <section className="hero mb-4">
        <p className="text-mkt_h3 font-txt_col">Investing in the future, one algorithm at a time.</p>
      </section>
      <section className="search bg-primary_col font-bg_col mb-4">
        <input
          type="text"
          className=" px-4 py-2 border rounded w-3/4"
          placeholder="Search by CIK, Company Name, Industry, or Office"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded ml-2"
          onClick={handleSearchCompany}
        >
          Search
        </button>
      </section>

      <section className="results mb-4">
        <table className="min-w-full text-txt_col">
          <thead>
            <tr>
              <th className="text-prod_h3 py-2">Name</th>
              <th className="text-prod_h3 py-2">Industry Title</th>
              <th className="text-prod_h3 py-2">Office</th>
            </tr>
          </thead>
          <tbody>
            {results.map(result => (
              <tr
                className="text-center"
                key={result.cik}
                onClick={() => handleSearchCompanyInfo(result.cik)}
              >
                <td className="text-prod_p py-2">{result.name}</td>
                <td className="text-prod_p py-2">{result.industry_title}</td>
                <td className="text-prod_p py-2">{result.office}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {queryCompanyInfo && <CompanyInfo cik={queryCompanyInfo} />}
    </div>
    </div>
  );
};

export default App;
