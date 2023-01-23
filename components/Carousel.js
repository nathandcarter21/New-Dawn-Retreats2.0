import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-90"
                    src="/mexicoHouse.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-white'>Casa Del Princesa</h3>
                    <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/beach.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-white'>Private Beach</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/cave.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-white'>Caves</h3>
                    <p className='text-white'>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;