import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SeedCalculatorPage } from './pages/SeedCalculatorPage';
import { WateringSchedulePage } from './pages/WateringSchedulePage';
import { PlantSpacingPage } from './pages/PlantSpacingPage';
import { BlogPostPage } from './pages/blog/[id]';
import { BlogListingPage } from './pages/blog';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { EbookPage } from './pages/EbookPage';

function App() {
  const path = window.location.pathname;

  return (
    <Layout>
      {path === '/' && <Home />}
      {path === '/seed-calculator' && <SeedCalculatorPage />}
      {path === '/watering-schedule' && <WateringSchedulePage />}
      {path === '/plant-spacing' && <PlantSpacingPage />}
      {path === '/blog' && <BlogListingPage />}
      {path.startsWith('/blog/') && <BlogPostPage />}
      {path === '/about' && <AboutPage />}
      {path === '/privacy' && <PrivacyPage />}
      {path === '/free-ebook' && <EbookPage />}
    </Layout>
  );
}

export default App;