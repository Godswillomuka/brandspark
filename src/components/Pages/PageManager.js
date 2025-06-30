import React from 'react';
import Team from './Team';
import Careers from './Careers';
import Blog from './Blog';
import Help from './Help';
import DesignGuidelines from './DesignGuidelines';
import FilePreparation from './FilePreparation';
import Shipping from './Shipping';
import Returns from './Returns';
import FAQ from './FAQ';
import Privacy from './Privacy';
import Terms from './Terms';
import Cookies from './Cookies';

const PageManager = ({ currentPage, onBack }) => {
  // Scroll to top immediately when any page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'team') {
    return <Team onBack={onBack} />;
  }

  if (currentPage === 'careers') {
    return <Careers onBack={onBack} />;
  }

  if (currentPage === 'blog') {
    return <Blog onBack={onBack} />;
  }

  if (currentPage === 'help') {
    return <Help onBack={onBack} />;
  }

  if (currentPage === 'design-guidelines') {
    return <DesignGuidelines onBack={onBack} />;
  }

  if (currentPage === 'file-preparation') {
    return <FilePreparation onBack={onBack} />;
  }

  if (currentPage === 'shipping') {
    return <Shipping onBack={onBack} />;
  }

  if (currentPage === 'returns') {
    return <Returns onBack={onBack} />;
  }

  if (currentPage === 'faq') {
    return <FAQ onBack={onBack} />;
  }

  if (currentPage === 'privacy') {
    return <Privacy onBack={onBack} />;
  }

  if (currentPage === 'terms') {
    return <Terms onBack={onBack} />;
  }

  if (currentPage === 'cookies') {
    return <Cookies onBack={onBack} />;
  }

  return null;
};

export default PageManager;