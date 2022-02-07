import './AboutUs.css';

import { images } from '../../constants/';

const AboutUs = () => (
  <div
    className='app__aboutus app__bg  flex__center section__padding'
    id='about'
  >
    <div className='app__aboutus-overlay flex__center '>
      <img src={images.G} alt='background G letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img className='spoon__img' src={images.spoon} alt='spoon' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et
          repellendus vitae sint saepe odio facilis doloribus accusamus laborum
          assumenda!
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img className='spoon__img' src={images.spoon} alt='spoon' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et
          repellendus vitae sint saepe odio facilis doloribus accusamus laborum
          assumenda!
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
