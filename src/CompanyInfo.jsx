import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyInfo = ({ cik }) => {
  const [companyInfo, setCompanyInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("This is the cik:", cik);
        const response = await axios.get(`/search_company_info?query=${cik}`);
        setCompanyInfo(response.data);
        console.log("We have a response:", response.data);
      } catch (error) {
        console.error("Error fetching company info:", error);
      }
    };

    if (cik) {
      fetchData();
    }
  }, [cik]); // Dependency array ensures data is fetched only when cik changes

  return (
    <div className="company-info">
      <h2>Company Information</h2>
      {companyInfo.length > 0 ? (
        <ul>
          {companyInfo.map((info) => (
            <li key={info.tag}>
              {info.tag}: {info.value} ({info.date})
            </li>
          ))}
        </ul>
      ) : (
        <p>No information found for this company.</p>
      )}
    </div>
  );
};

export default CompanyInfo;
