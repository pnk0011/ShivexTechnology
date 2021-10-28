import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { servicesData } from "../../data/servicesData";

import "./Services.css";
import SingleService from "./SingleService/SingleService";

function Services() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {servicesData.length > 0 && (
        <div
          className="services"
          id="services"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="services-header">
            <h1 style={{ color: theme.primary }}>Our Services</h1>
          </div>
          <div className="services-body">
            <p style={{ color: theme.tertiary80 }}>
              we offer you a comprehensive range of web and mobile development
              services that are best-in-class, cost-effective and flexible.
            </p>
            <div className="services-bodycontainer">
              {servicesData.map((services) => (
                <SingleService
                  key={services.id}
                  id={services.id}
                  title={services.title}
                  icon={services.icon}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
