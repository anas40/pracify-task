import './foodmenu.css';
import leaf from '../../assets/Group 114.png';
import invertDish from '../../assets/Group 205.png';
import dish from '../../assets/Group 207.png';

const boxes = [{isInvert:false},{isInvert:true},{isInvert:false},{isInvert:false}]

function Foodmenu() {
  return (
    <section className='full-viewport'>
      <div className='container'>
        <div className='text-center mb-4'>
          <img src={leaf} alt='leaf image' />
        </div>
        <h3 className='text-center mb-4'>Welcome to Nature</h3>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <section className='d-flex my-5 py-5 menu-container'>
         {boxes.map((box)=><Box isInvert={box.isInvert} />)}
        </section>
      </div>
    </section>
  );
}
function Box(props) {
  return (
    <div className='my-4'>
      <img src={props.isInvert?invertDish:dish} alt='meal box available' />
    </div>
  );
}

export default Foodmenu;
