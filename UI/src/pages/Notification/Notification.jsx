import React from 'react';
import "./notification.css";
import NotificationCard from '../../components/notification-card/NotificationCard';

const Notification = () => {
  
  const notifications = [
    {
      timestamp: "2024-09-30 10:00",
      location: "Mumbai",
      message: "Suspicious behavior detected during testing of athlete Neeraj Chopra."
    },
    {
      timestamp: "2024-09-29 15:45",
      location: "Delhi",
      message: "Anomaly detected in blood sample for athlete P.V. Sindhu."
    },
    {
      timestamp: "2024-09-28 08:30",
      location: "Chennai",
      message: "Alert: Athlete Bajrang Punia missed a scheduled test."
    },
    {
      timestamp: "2024-09-27 11:15",
      location: "Bangalore",
      message: "Positive result reported for banned substance in athlete Mary Kom."
    },
    {
      timestamp: "2024-09-26 16:50",
      location: "Hyderabad",
      message: "Suspicious pattern detected in training regimen of athlete Hima Das."
    },
    {
      timestamp: "2024-09-25 09:00",
      location: "Kolkata",
      message: "Urgent: Athlete Virat Kohli reported using a banned substance."
    },
    {
      timestamp: "2024-09-24 14:30",
      location: "Patiala",
      message: "Unusual performance enhancement detected in athlete Anju Bobby George."
    },
    {
      timestamp: "2024-09-23 17:20",
      location: "Guwahati",
      message: "Alert: Athlete Saina Nehwal reported a missed drug test."
    },
    {
      timestamp: "2024-09-22 12:45",
      location: "Jaipur",
      message: "Suspicious behavior flagged for wrestler Vinesh Phogat during competition."
    },
    {
      timestamp: "2024-09-21 09:55",
      location: "Ahmedabad",
      message: "High-risk alert: swimmer Sushil Kumar showed irregularities in tests."
    },
    {
      timestamp: "2024-09-20 13:10",
      location: "Indore",
      message: "Positive test results for athlete Deepa Malik, further investigation needed."
    }
  ];

  return (
    <div className='notification'>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Notifications & Alerts</h1>
      <div className="not-box">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            timestamp={notification.timestamp}
            location={notification.location}
            message={notification.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
