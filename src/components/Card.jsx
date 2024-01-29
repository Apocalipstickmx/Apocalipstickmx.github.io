import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/Card.css'


const Card = () => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <div className="item" >
            <img src="/thisIsYoga.jpg" onDragStart={handleDragStart}/>
            <h4>This is Yoga</h4>
            <p>Lululemon - 2017</p>
        </div>,
        <div className="item" >
            <img src="/chilango.png" onDragStart={handleDragStart}/>
            <h4>Voguing: danza, fantasía y activismo</h4>
            <p>Chilango - 2018</p>
        </div>,
        <div className="item" >
            <img src="/mercedes.png" onDragStart={handleDragStart}/>
            <h4>Vogueando Pride</h4>
            <p>Mercedes-Benz Fashion Week - 2020</p>
        </div>,
        <div className="item" >
            <img src="/hbo.png" onDragStart={handleDragStart}/>
            <h4>Fiesta Pride</h4>
            <p>HBO - 2022</p>
        </div>,
        <div className="item" >
            <img src="/calvin.png" onDragStart={handleDragStart} /> 
            <h4>Fiesta Pride</h4>
            <p>Calvin Klein - 2022</p>
        </div>
     ];
    
      const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3,
        itemsFit: 'contain' },
    };

    return (
        <div className='carrusel'>
         <AliceCarousel
        mouseTracking
        disableDotsControls
        items={items}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
        controlsStrategy='responsive'
    />
     </div>

    )
}

export default Card