import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - TRY NEW EXPERIENCE</title>
      </Helmet>

      <Navbar />
      <Landing />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Education />

      {/* <Experience />

      <Achievement /> */}

      <Testimonials />
      {/* <Blog /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
