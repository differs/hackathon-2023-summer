import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Elon Musk',
    description: 'It is a good idea to build a global real-time online game, and it is also an important means for future games to attract players. Our star link network can realize game links of less than 50ms for global players.',
    designation: 'Founder of Starlink and SpaceX'
  },
  {
    id: 2,
    name: 'Markus Harder',
    description: 'We have the best translation engine in the world, using advanced artificial intelligence translation, we can provide text translation and real-time voice communication for players in different languages around the world in real time!',
    designation: 'CFO of DeepL'
  },
  {
    id: 3,
    name: 'Timothy Dean Sweeney',
    description: 'The best 3D game engine in the world is the solid backing for your content creation. Web3 games are our future focus. We will provide the adaptation of the game engine to WEB3, and provide services for excellent games to be put on the EPIC GAME STORE .',
    designation: 'Founder and CEO of Epic Games'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Partner testimonials</h2>
          <div className="subtitle">what partner says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;