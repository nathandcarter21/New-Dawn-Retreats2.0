import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src="/mexicoHouse.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/beach.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/table.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/massage.png" alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/welcome.jpg" alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/anothersunset.png"
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/room.png" alt="8th slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/kitchen.png" alt="Seventh slide" />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src="/cave.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-white">Caves</h3>
          <p className="text-white">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> 
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselComponent;
