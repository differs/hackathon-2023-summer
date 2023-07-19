import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 12;
  const photoshop = 60;
  const Solidity = 50;
  const UnrealEngine = 70;
  const Blender_C4D = 40;
  const DeepL = 66;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Origin of Civilization</h2>
          <div className="subtitle">learn more about the game.</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Origins of Civilization is a game!</p>
            <p>Developed on Unreal Engine.</p>
            <div className='progress-block'>
              <h4>C++ / Rust / Solidity</h4>
              <ProgressBar now={Solidity} label={`${Solidity}%`} />
            </div>
            <div className='progress-block'>
              <h4>Unreal Engine / React Native</h4>
              <ProgressBar now={UnrealEngine} label={`${UnrealEngine}%`} />
            </div>
            <div className='progress-block'>
              <h4>Blender / C4D</h4>
              <ProgressBar now={Blender_C4D} label={`${Blender_C4D}%`} />
            </div>

            <div className='progress-block'>
              <h4>DeepL</h4>
              <ProgressBar now={DeepL} label={`${DeepL}%`} />
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;