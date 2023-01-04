import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import LeftNav from './layout/LeftNav/LeftNav';
import Nav from './layout/Nav/Nav';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Observe from './pages/observe/observe';
import ScatterPage from './pages/scatterpage/scatterpage';
import SearchResults from './pages/searchResults/searchResults';
import Loader from './components/Loader/Loader';
import Detail from './pages/detail/detail';
import MultiEntity from './pages/multiEntity/multiEntity';
import ComponentShowcase from './pages/componentShowcase/componentShowcase';
import EditCard from './pages/editCard/editCard';
import Designs from './pages/designs/designs';
import DesignsDetail from './pages/designsDetail/designsDetail';
import { getFigmaFilePages, getFigmaFiles } from './helpers/figma';
import Builder from './pages/builder/builder';
import BuilderOld from './pages/builder-old/builder';

const App = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isLoaded, setIsLoaded] = useState(false);
  const [pathname, setPathname] = useState(
    location.pathname.slice(1, location.pathname.length)
  );
  const [storiesData, setStoriesData] = useState(null);

  const handleSwitchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const getFiles = async () => {
    const files = await getFigmaFiles();

    const res = await Promise.all(
      files.files.map(async (f) => ({
        ...f,
        data: await getFigmaFilePages(f.key),
      }))
    );

    if (res) {
      const fData = res
        .map((r) => r.data?.map((rr) => ({ ...rr, fileKey: r.key })))
        .flat()
        .filter((rr) => rr);
      const filteredFData = fData.filter((f) =>
        f.projectName.includes('Presentation')
      );
      const editedFData = filteredFData.map((f) => ({
        ...f,
        //projectName: f.projectName.split('-')[1],
        projectName: f.config.split(';')[0].split(':')[1]?.trim(),
        config: f.config
          .split(';')
          .filter((f, index) => index > 0)
          .join(';'),
      }));
      setStoriesData(
        editedFData.filter((e) => e.projectName !== 'Example Project Name')
      );
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  useEffect(() => {
    setPathname(location.pathname.slice(1, location.pathname.length));
    setTimeout(() => {}, 500);
  }, [location]);

  if (isLoaded && storiesData) {
    return (
      <div className='app' data-theme={theme}>
        {!pathname.includes('designs') && location.pathname !== '/' && (
          <LeftNav
            theme={theme}
            handleSwitchTheme={handleSwitchTheme}
            pathname={pathname}
          />
        )}

        <div
          className={`content ${
            pathname.includes('designs') || location.pathname === '/'
              ? 'full-width'
              : ''
          }`}
        >
          {!pathname.includes('designs') && location.pathname !== '/' && (
            <Nav theme={theme} pathname={pathname} />
          )}

          <div className='page'>
            <Routes>
              <Route
                exact
                path='/'
                element={<Designs storiesData={storiesData} />}
              />
              <Route exact path='/dashboard' element={<Home />} />
              <Route exact path='/query-builder' element={<Builder />} />
              <Route exact path='/builder' element={<BuilderOld />} />
              <Route
                exact
                path='/observe'
                element={<Observe pathname={pathname} />}
              />
              <Route exact path='/multi-entity' element={<MultiEntity />} />
              <Route exact path='/alert' element={<Observe />} />
              <Route exact path='/scatter' element={<ScatterPage />} />
              <Route exact path='/edit-card' element={<EditCard />} />
              <Route
                exact
                path='/designs'
                element={<Designs storiesData={storiesData} />}
              />
              <Route
                exact
                path='/designs/:id'
                element={<DesignsDetail storiesData={storiesData} />}
              />
              <Route
                exact
                path='/search-results'
                element={<SearchResults theme={theme} />}
              />
              <Route
                exact
                path='/component-showcase'
                element={<ComponentShowcase />}
              />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/detail/:id' element={<Detail />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='center-all'>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '100%' }}>
          <img src='/dtech.svg' alt='DTech' />
        </div>
        <h5 style={{ margin: '10px auto' }}>Loading Data</h5>
        <Loader size='large' />
      </div>
    </div>
  );
};

export default App;
