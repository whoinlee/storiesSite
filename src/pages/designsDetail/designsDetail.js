import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Select from '../../components/Select/Select';
import Slideshow from '../../components/Slideshow/Slideshow';
import DesignsDetailDropdown from './DesignsDetailDropdown';
import { storiesDisplaySelect } from '../../helpers/componentShowcase';
import './designsDetail.scss';

const items = [
  {
    id: 0,
    name: 'Slideshow View',
    callback: 'handleView',
  },
  {
    id: 1,
    name: 'Vertical View',
    callback: 'handleView',
  },
];

function DesignsDetail({ storiesData }) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const fileKey = searchParams.get('fileKey');

  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState(items[0].name);

  const getFiles = async () => {
    const res = storiesData.filter((s) => s.fileKey === fileKey);
    const project = res.find((r) => r.projectId === id);

    //preload images
    project.slides.forEach((s) => {
      const image = s.slideImage?.images[s.slideImageDataId];

      if (image) {
        const img = new Image();
        img.src = image;
      }
    });
    console.log('project', project);
    setData(project);
    setIsLoaded(true);
  };

  const handleSetView = (view) => {
    if (view.callback) {
      setView(view.name);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div className={`designs-detail ${!isLoaded ? 'center-all' : ''}`}>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          <div className='header'>
            <Link to='/designs'>
              <img src='/appAssets/arrow-left-light.svg' alt='back' />
            </Link>
            <div className='meta'>
              {data.projectName}
              {/* 
              {formatEmail(data.config).map((f, index) => (
                <span key={`${f}${index}`}>{f}</span>
              ))} */}
            </div>
            {/* <Select
              items={storiesDisplaySelect}
              selectedItem={view}
              callback={handleSetView}
            /> */}
            <DesignsDetailDropdown
              items={items}
              config={data.config}
              callback={handleSetView}
            />
          </div>
          {view === 'Slideshow View' && <Slideshow slides={data.slides} />}

          {view !== 'Slideshow View' && (
            <div className={`slides ${view}`}>
              {data.slides.map((d) => (
                <div className='slide' key={d.slideId}>
                  <img src={Object.values(d.slideImage.images)} alt={d.name} />
                  {d.slideCaption && (
                    <div className='caption'>{d.slideCaption}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default DesignsDetail;
