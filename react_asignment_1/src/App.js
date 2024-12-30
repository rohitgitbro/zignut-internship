
import React from 'react';
import './app.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import OurTeam from './component/OurTeam';
import OurProject from './component/OurProject';
import OurClients from './component/OurClients';
import ContactUs from './component/ContactUs';
import Copyright from './component/Copyright';

const App = () => {
  return (
    <div className="h-fit  w-full flex flex-col items-center overflow-x-hidden max-w-full">
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <OurTeam />
      <OurProject />
      <OurClients />
      <ContactUs />
      <Copyright />
    </div>
  );
};

export default App;












