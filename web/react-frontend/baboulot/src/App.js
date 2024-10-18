import { Carousel } from 'antd';
import carousel1 from './img/carousel1.jpg'
import carousel2 from './img/carousel2.jpeg'



const contentStyle = {
  width: '100%',
  height: '160px',
  color: '#364d79',
  lineHeight: '160px',
  textAlign: 'center',
  /*background: '#364d79',*/
};

function App() {
  return (
    <Carousel autoplay>      
    <div>
      <img style={contentStyle} src={carousel1} alt="Carousel 1"/>
    </div>
    <div>
    <img style={contentStyle} src={carousel2} alt="Carousel 1"/>
    </div>
   
  </Carousel>
  );
}

export default App;
