import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import WorkGallery from '../../Components/WorkGallery/Workgallery';
import Footer from '../../Components/Footer/Footer';
import './Graphic.css';
import ImageGrid from './Images';
const GraphicDesignSection = () => {
  return (
    <div>
      <Header />
      <div className="graphic-design-section text-center">
        <h2 className="graphic-title">Graphic Design</h2>
        <div className="nav-Tabs">
          <Link to="/graphic" className="nav-tab">All</Link>
          <Link to="/logos" className="nav-tab">Logos</Link>
          <Link to="/flyers" className="nav-tab">Flyers</Link>
          <Link to="/anual-reports" className="nav-tab">Annual Reports</Link>
          <Link to="/social-media" className="nav-tab">Social Media</Link>
          <Link to="/graphic" className="nav-tab">Others</Link>
        </div>
        <p className="graphic-description">
          From Y Combinator startups to global enterprise FMCGs, our innovative model has allowed us to collaborate
          with cutting-edge tech companies worldwide, serving as their dedicated, on-demand product design and
          front-end team.
        </p>
        <ImageGrid/>
      </div>
      <WorkGallery bgColor={'white'} />
      <Footer />
    </div>
  );
};

export default GraphicDesignSection;
