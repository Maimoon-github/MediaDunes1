import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Pages/Home/Home";
import { BrowserRouter,useRoutes , Routes, Route, useLocation } from 'react-router-dom';
import Pricing from "./Pages/Pricing/Pricing";
import Ourwork from "./Pages/OurWork/Ourwork";
import Audit from "./Pages/Audit/Audit";
import Blogs from "./Pages/Blogs/Blogs";
import Careers from "./Pages/Careers/Careers";
import Privacy from "./Pages/Privacy/Privacy";
import TermsAndConditions from "./Pages/TermsConditions/TermsCondition";
import Contactus from "./Pages/Contact/Contact";
import Ourteam from '../src/Pages/OurTeam/Team'
import GraphicDesignSection from "./Pages/GraphicDesign/Graphic";
import Uiuxdesign  from './Pages/UIUXdesign/UiUxdesign'
import Flyers from './Pages/GraphicDesign/Flyers'
import Logos  from './Pages/GraphicDesign/Logos'
import { useEffect } from "react";
import AnualReports from "./Pages/GraphicDesign/Anualreports";
import SocialMedia from "./Pages/GraphicDesign/SocialMedia";
import GraphicAA from "./Pages/Graphic-AA/Graphic-AA";
import InfographicDesign from "./Pages/InofgraphicDesign/InfographicDesign";
import PrintDesign from "./Pages/PrintDesign/PrintDesign";
import DigitalDesign from "./Pages/DigitalAdDesign/DigitalDesign";
import ConceptCretion from "./Pages/ConceptCreation/ConceptCretion";
import SocialMediaDesign from "./Pages/SocialMediaDesign/SocialMediaDesign";
import Softwareteam from "./Pages/SoftwaerTeam/Softwareteam";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/price', element: <Pricing /> },
    { path: '/ourwork', element: <Ourwork /> },
    { path: '/audit', element: <Audit /> },
    { path: '/blogs', element: <Blogs/> },
    { path: '/career', element: <Careers/> },
    { path: '/privacy', element: <Privacy/> },
    { path: '/termsconditions', element: <TermsAndConditions/> },
    { path: '/contactus', element: <Contactus/> },
    { path: '/ourteam', element: <Ourteam/> },
    { path: '/graphic', element: <GraphicDesignSection/> },
    { path: '/uiuxdesign', element: <Uiuxdesign/> },
    { path: '/flyers', element: <Flyers/> },
    { path: '/logos', element: <Logos/> },
    { path: '/anual-reports', element: <AnualReports/> },
    { path: '/social-media', element: <SocialMedia/> },
    { path: '/Graphic-Admin-Assistance', element: <GraphicAA/> },
    { path: '/Infographic-Design', element: <InfographicDesign/> },
    { path: '/Print-Design', element: <PrintDesign/> },
    { path: '/Digital-Design', element: <DigitalDesign/> },
    { path: '/Concept-Creation', element: <ConceptCretion/> },
    { path: '/Social-Media-Design', element: <SocialMediaDesign/> },
    { path: '/Software-team', element: <Softwareteam/> },
    
    
    
  

  ]);

  return routes;
};


function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
     <BrowserRouter>
     <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
    </>
      
  );
}

export default App;
