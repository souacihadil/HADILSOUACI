import React from "react";
import '../pages/whyMe.css';

const WhyMeCard = ({ title, content, isPrimary, Icon }) => {
  return (
    <div className={`whyme-card ${isPrimary ? "primary" : ""}`}>
      <h3 className="card-title">
        {title}
        {Icon && <Icon className="card-icon-inline" />} {/* الأيقونة على يمين العنوان */}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default WhyMeCard;



