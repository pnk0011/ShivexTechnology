import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Bounce bottom>
      <div key={id} style={{ cursor: "pointer" }}>
        <img
          src={image ? image : placeholder}
          alt={name}
          className="hover-zoom"
          height="100%"
          width="100%"
        />
      </div>
    </Bounce>
  );
}

export default SingleProject;
