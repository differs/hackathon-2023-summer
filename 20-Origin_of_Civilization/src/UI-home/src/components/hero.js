import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/hero2.png'),
    title: 'Start an interesting GameFi journey',
    description: 'Register in our DAPP in advance, and get the priority experience right and free novice gift package first! Before the game starts, form your forces and always be one step ahead!',
    link: 'https://etherscan.io'
  },
  {
    id: 2,
    image: require('../assets/images/hero2.png'),
    title: 'Start an interesting GameFi journey',
    description: 'Register in our DAPP in advance, and get the priority experience right and free novice gift package first! Before the game starts, form your forces and always be one step ahead!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/hero2.png'),
    title: 'Start an interesting GameFi journey',
    description: 'Register in our DAPP in advance, and get the priority experience right and free novice gift package first! Before the game starts, form your forces and always be one step ahead!',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                    // width={1024}
                    // height={1024}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Register Now <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;