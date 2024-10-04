import React, { useState } from 'react';
import './sidebar.css';
import Select from 'react-select';
import { GrRestroomWomen } from 'react-icons/gr';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Sample sports list
const sportsOptions = [
  { value: 'football', label: 'Football' },
  { value: 'cricket', label: 'Cricket' },
  { value: 'tennis', label: 'Tennis' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'hockey', label: 'Hockey' }
];

const Sidebar = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  return (
    <div className='sidebar'>
      <h1><img className="anti-doping" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Anti-doping_logo.png?20221027170111" alt="" /> WinClean</h1>
      <div className="filter-box">
        <h3 style={{ color: "gray", fontSize: "25px", fontWeight: "bold", marginBottom: "5px" }}>Advanced Filters</h3>
        <form>
          {/* Autocomplete Sport Name */}
          <div className="form-group">
            <label htmlFor="sportName" style={{color:"black", fontWeight:"bold"}}>Sport Name:</label>
            <Select
              id="sportName"
              options={sportsOptions}
              value={selectedSport}
              onChange={(selectedOption) => setSelectedSport(selectedOption)}
              placeholder="Search Sport"
              isSearchable
              style={{width:"100px"}}
            />
          </div>

          {/* Duration */}
          <div className="form-group">
            <label style={{color:"black", fontWeight:"bold"}}>Duration:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="duration" value="7days" />
                Last 7 Days
              </label>
              <label>
                <input type="checkbox" name="duration" value="14days" />
                Last 14 Days
              </label>
              <label>
                <input type="checkbox" name="duration" value="30days" />
                Last 30 Days
              </label>
            </div>
          </div>

          {/* Case Severity */}
          <div className="form-group">
            <label style={{color:"black", fontWeight:"bold"}}>Case Severity:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="severity" value="low" />
                Low
              </label>
              <label>
                <input type="checkbox" name="severity" value="moderate" />
                Moderate
              </label>
              <label>
                <input type="checkbox" name="severity" value="high" />
                High
              </label>
            </div>
          </div>

          {/* Graph Type
          <div className="form-group">
            <label>Preferred Graph Type:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="graphType" value="line" />
                Line Graph
              </label>
              <label>
                <input type="checkbox" name="graphType" value="pie" />
                Pie Chart
              </label>
              <label>
                <input type="checkbox" name="graphType" value="bar" />
                Bar Chart
              </label>
            </div>
          </div> */}

          {/* Apply Filters Button */}
          <button type="submit" className='apply-btn'>Apply Filters</button>
        </form>
      </div>

      {/* Contact Section */}
      {/* <div className="contact">
        <h3 style={{ color: "gray", fontSize: "15px", fontWeight: "bold", marginBottom: "5px" }}>Contact Lead Developer</h3>
        <p><FaPhone /> 8957298885</p>
        <p><MdEmail /> kuldeepagrahari9103@gmail.com</p>
      </div> */}

      {/* Footer Section */}
      <div className="footer">
        <p>&copy; 2024 Antidoping Intelligence System</p>
      </div>
    </div>
  );
}

export default Sidebar;
