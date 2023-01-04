import React, { useEffect, useState } from 'react';
import { navRightItems } from '../../helpers/config';
import { useNavigate } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import { getMockData } from '../../helpers/api';
import './Nav.scss';

const Nav = ({ pathname, theme }) => {
  const [data, setData] = useState(null);
  const [toggledSearch, setToggledSearch] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (n) => {
    if (n.name === 'Search') {
      setToggledSearch(!toggledSearch);
    }
  };

  const getData = async () => {
    if (data) return;
    const res = await getMockData();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const callback = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.code === 'Slash') {
        setToggledSearch(true);
      }
    };
    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, []);

  const isNotSearch = (itemName, toggled) => {
    if (itemName === 'Search' && toggled) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <nav className='top-nav'>
      <menu className='nav-left'>
        <img
          src={
            theme === 'dark'
              ? '/appAssets/arrow-left-light.svg'
              : '/appAssets/arrow-left.svg'
          }
          className={pathname.length === 0 ? 'disabled' : ''}
          alt='back'
          onClick={() => navigate(-1)}
        />
        <img
          src={
            theme === 'dark'
              ? '/appAssets/arrow-right-light.svg'
              : '/appAssets/arrow-right.svg'
          }
          alt='forward'
          className='disabled'
          onClick={() => navigate(+1)}
        />
        <h3>{pathname?.replace('-', ' ') || 'Dashboard'}</h3>
      </menu>

      <menu className='nav-right'>
        {toggledSearch && (
          <li>
            <div className='menu-item'>
              <Searchbar
                placeholder='Search...'
                setToggledSearch={setToggledSearch}
                close={true}
                data={data}
              />
            </div>
          </li>
        )}
        {navRightItems.map(
          (n) =>
            isNotSearch(n.name, toggledSearch) && (
              <li key={n.id} onClick={() => handleNavClick(n)}>
                <div className='menu-item'>
                  <img src={n.icon} alt={n.name} />
                  {n.options && (
                    <div className='menu-item-label'>
                      {n.options[n.selectedOptionId].name}
                    </div>
                  )}
                </div>
              </li>
            )
        )}
      </menu>
    </nav>
  );
};

export default Nav;
