import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

// Modified
import Particles from "react-particles-js";

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.tertiary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.tertiary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing" style={{ backgroundColor: "rgb(233, 173, 53)" }}>
      <div>
        <Particles
          height="100vh"
          width="100%"
          params={{
            particles: {
              color: {
                value: "#FFFFFF",
              },
              line_linked: {
                color: {
                  value: "#FFFFFF",
                },
              },
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
          }}
        />
      </div>
      <div className="intro" style={{ position: "absolute" }}>
        Powering Enterprises and Startups by building amazing digital products
        and experiences.
      </div>
      <div
        className="subIntro"
        style={{ position: "absolute", marginTop: "250px" }}
      >
        We can compromise anything...except Customer satisfaction.
      </div>

      <div
        className="lcr-buttonContainer"
        style={{ position: "absolute", marginTop: "350px" }}
      >
        <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
          <Button className={classes.contactBtn}>Let's Talk</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Landing;
