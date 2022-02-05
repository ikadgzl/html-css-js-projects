import './Header.css';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolore
        quasi ducimus aliquam quo iure doloribus itaque quis.
      </p>
      <button className='custom__button' type='button'>
        Explore Menu
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcome' />
    </div>
  </div>
);

export default Header;
