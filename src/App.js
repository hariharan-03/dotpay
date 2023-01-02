import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from "./header"

function App() {
  return (
    <>
      <div className="App border-bottom">
        <Header />
        <Container fluid className="about">
          <Row>
            <Col className='align-items-center p-3 p-md-5' sm={6}>
              <p className='fw-bold'>Product Growth Solution in Single Platform.</p>
              <p className='main-head'>Managing business payments has never been easier</p>
              <p>Never at water me might. On formed merits hunted unable <br />merely by mr whence or. Possession the unpleasing simplicity <br />her uncommonly.</p>
              <div className='d-flex justify-content-between align-items-center p-3 mail-input mb-5'>
                <div>
                  <p>Register using email address</p>
                  <p className='fw-bold'>shakir260@gmail.com</p>
                </div>
                <button className="fw-bold">Submit</button>
              </div>
              <ul className="d-flex justify-content-start">
                <li><img className="pe-2" src="./tick.svg" alt="img" />Free Register</li>
                <li className='ms-2 pe-2'><img className="pe-2" src="./tick.svg" alt="img" />Great Service</li>
              </ul>
            </Col>
            <Col className="homegroup" md={6}></Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="border-bottom px-2 py-4">
          <p className='text-center fw-bold pb-3 m-0 mb-md-3'>Over 32k+ software  businesses growing with AR Shakir</p>
          <ul className='row p-5 p-md-0'>
            <li className="col-lg-2 col-md-6 mb-3 mb-lg-0 "><img className="w-100" src="./zeppelin.svg" /></li>
            <li className="col-lg-2 col-md-6 mb-3 mb-lg-0 "><img className="w-100" src="./protonet.svg" /></li>
            <li className="col-lg-2 col-md-6 mb-3 mb-lg-0 "><img className="w-100" src="./marpheus.svg" /></li>
            <li className="col-lg-2 col-md-6 mb-3 mb-lg-0 "><img className="w-100" src="./samsung.svg" /></li>
            <li className="col-lg-2 col-md-6 mb-3 mb-lg-0 "><img className="w-100" src="./monday.svg" /></li>
            <li className="col-lg-2 col-md-6 mb-3 mb-lg-0 "><img className="w-100" src="./segment.svg" /></li>
          </ul>
      </Container>
      <Container fluid className='roadmap'>
        <Row className="timeshape">
          <Col>
            <p className='orange-clr'>Stockie Operation Across the world</p>
            <p className='fw-bold f-800'>We have best team
              and best process</p>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.</p>
            <button className='org-btn btn-pill text-center d-block d-flex justify-content-center align-items-center'>Get started</button>
          </Col>
          <Col className="d-none d-lg-block"></Col>
          {/* <Col sm={12}>
            <div className='img-card mx-auto d-flex flex-column align-items-center justify-content-center'>
              <img src="/samp.svg" />
              <p className='f-800 text-white'>Push your product to next level.</p>
              <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
              <button className='org-btn btn-pill text-center d-block mx-auto d-flex justify-content-center align-items-center'>Get started</button>
            </div>
          </Col> */}
        </Row>
        <Row className="timeline">
          <Col>
          <img className="d-none d-lg-block" src="/timeline.svg"/>
          <Row>
            <Col lg={4} className="timechild"><img src="/timelineone.svg"/></Col>
            <Col lg={4} className="timechild"><img src="/timelinetwo.svg"/></Col>
            <Col lg={4} className="timechild"><img src="/timelinethree.svg"/></Col>
          </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="business mb-4 mb-md-0">
        <p className='text-center fs-2 fw-bold'>We help your business grow faster.</p>
        <p className='text-center'>Why kept very ever home mrs. Considered sympathize ten<br /> uncommonly occasional assistance sufficient.</p>
        <Row className="p-md-5 m-md-5">
          <Col md={4}>
            <Card className='border-0 pt-4 pb-2 px-2 mb-3 mb-md-0'>
              <Card.Body className='pb-0'>
                <img src="./cup.svg" />
                <p className='fw-bold'>Offending belonging</p>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                <p className='green-clr'>Read more <img src="./greenarrrow.svg" /></p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='border-0 pt-4 pb-2 px-2 mb-3 mb-md-0'>
              <Card.Body className='pb-0'>
                <img src="./flower.svg" />
                <p className='fw-bold'>Offending belonging</p>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                <p className='green-clr'>Read more <img src="./greenarrrow.svg" /></p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='border-0 pt-4 pb-2 px-2 mb-3 mb-md-0'>
              <Card.Body className='pb-0'>
                <img src="./sun.svg" />
                <p className='fw-bold'>Offending belonging</p>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                <p className='green-clr'>Read more <img src="./greenarrrow.svg" /></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <button className='org-btn text-center d-block mx-auto d-flex justify-content-center align-items-center'>More About Platform</button>
      </Container>
      <Container fuild className="mb-3 p-3">
        <Card className="p-sm-2 p-md-4 m-md-3 rounded-4" style={{borderRadius:"20px"}}>
          <Card.Body className='p-2'>
            <Row>
              <Col sm={3}>
                <p className='fs-4 m-0'>Amoung leave law build now.</p>
              </Col>
              <Col sm={3}>
              <div className='d-flex'>
                <img src="./star.svg" />
                <p className='m-0'>Village did <br />remov enjoyed</p>
              </div>
              </Col>
              <Col sm={3}>
              <div className='d-flex'>
                <img src="./patch.svg" />
                <p className='m-0'>Nay likely <br /> length sooner</p>
              </div>
              </Col>
              <Col sm={3}>
              <div className='d-flex'>
                <img src="light.svg" />
                <p className='m-0'>Expense windows <br /> adapted </p>
              </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container className='my-3 py-3'>
        <Row className="p-md-4 m-md-3">
          <Col>
            <Card className="text-center border-0 border-none mb-3 mb-lg-0" style={{ backgroundColor: "#F8F9FD" }}>
              <Card.Body>
                <p className='f-800 fw-bold'>Offend belong <br />promote provision</p>
                <p>Wise busy past both park when an ye no. Nay likely her length <br />sooner thrown sex lively income. </p>
                <button className="log-btn selected">Read More</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center border-0 mb-3 mb-lg-0" style={{ backgroundColor: "#F8F9FD" }}>
              <Card.Body>
                <p className='f-800 fw-bold'>Consulted ourselves it <br />blessing welcom</p>
                <p>The expense windows adapted sir. Wrong widen drawn ample eat <br />off doors money.</p>
                <button className="log-btn selected">Read More</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="eagle">
        <Row>
          <Col md={{ span: 6, offset: 3 }} >
            <p className='text-center orange-clr'>PROJECT MANAGEMENT APP</p>
            <p className='text-center f-800'>Download our app and start your free trail to get started today!</p>
            <p className='text-center'>End-to-end payments and financial management in a single solution.</p>
            <div className='d-flex justify-content-center align-items-center'>
              <button className='org-btn btn-pill d-flex align-items-center justify-content-center py-0'><img className="me-2" src="/apple.svg"/> Playstore</button>
              <button className='green-btn btn-pill d-flex align-items-center justify-content-center py-0 ms-3'><img className="me-2" src="/googleplay.svg"/> Google Play</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mx-0 my-4">
          <Col className="ps-0">
            <h3 className='f-800'>Our Latest Blog Posts</h3>
          </Col>
          <Col>
            <button className='log-btn selected float-end'>See All Blog Posts</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src="./person1.svg" />
              <Card.Subtitle className="my-2 text-muted"><span>08-22-20201</span><span className='ps-3'>Category</span></Card.Subtitle>
              <Card.Body className="p-0">
                <p className="fw-bold">Believing neglected so so allowance existence departure.</p>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img variant="top" src="./person2.svg" />
              <Card.Subtitle className="my-2 text-muted"><span>08-22-20201</span><span className='ps-3'>Category</span></Card.Subtitle>
              <Card.Body className="p-0">
                <p className="fw-bold">In design active temper be uneasy. Thirty for remove plenty regard you.</p>
                <p>Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row className="border-bottom pb-2">
              <Col md="auto">
                <img src='./person3.svg' />
              </Col>
              <Col>
                <span>08-11-2021<span className="ps-3">Category</span></span>
                <p className="fw-bold">Partiality on or continuing in particular principles</p>
              </Col>
            </Row>
            <Row className="border-bottom py-2">
              <Col md="auto">
                <img src='./person4.svg' />
              </Col>
              <Col>
                <span>08-11-2021<span className="ps-3">Category</span></span>
                <p className="fw-bold">Partiality on or continuing in particular principles</p>
              </Col>
            </Row>
            <Row className="border-bottom py-2">
              <Col md="auto">
                <img src='./person5.svg' />
              </Col>
              <Col>
                <span>08-11-2021<span className="ps-3">Category</span></span>
                <p className="fw-bold">Partiality on or continuing in particular principles</p>
              </Col>
            </Row>
            <Row className="border-bottom py-2">
              <Col md="auto">
                <img src='./person6.svg' />
              </Col>
              <Col>
                <span>08-11-2021<span className="ps-3">Category</span></span>
                <p className="fw-bold">Partiality on or continuing in particular principles</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="chooseus">
        <Row>
          <Col sm={5}>
            <p className="text-uppercase">Why Choose Us</p>
            <p className='f-800 text-white'>Track your crytpo portfolio on the best way possible</p>
            <p>Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.</p>
          </Col>
          {/* <Col sm={2}></Col> */}
          <Col className="d-flex justify-content-center align-items-center">
            <div className='chooseusinputs'>
            <input className="ps-3" placeholder='Email Address'></input>
            <input className="ps-3" placeholder='Password'></input>
            <button>GET STARTED</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-5 my-3 footer">
        <Row className="pb-3">
        <Col sm={3} className="mb-3 mb-lg-0">
        <p className='footertitle'>AR Shakir</p>
        <p className='blue-clr'>Simple innate summer fat appear basket his desire joy.</p>
        <ul className='d-flex'>
          <li className='pe-3'><img src="/linkedin.svg"/></li>
          <li className='pe-3'><img src="/messenger.svg"/></li>
          <li className='pe-3'><img src="/twitter.svg"/></li>
          <li><img src="/twoo.svg"/></li>
        </ul>
        </Col>
        <Col sm={2} className="mb-3 mb-lg-0">
        <p className='footertitle'>Company</p>
        <ul>
          <li className='pb-1'>About Us</li>
          <li className='pb-1'>Careers</li>
          <li className='pb-1'>Blog</li>
          <li>Pricing</li>
        </ul>
        </Col>
        <Col sm={2} className="mb-3 mb-lg-0">
        <p className='footertitle'>Resources</p>
        <ul>
          <li className='pb-1'>Templates</li>
          <li className='pb-1'>Tutorials</li>
          <li className='pb-1'>Tutorials</li>
          <li>Contract templates</li>
        </ul>
        </Col>
        <Col sm={5} className="mb-3 mb-lg-0">
        <p className='footertitle'>Join Our Newsletter</p>
        <div className='pb-3'>
        <input className="ps-3" placeholder='Your email address'></input>
        <button>Subscribe</button>
        </div>
        <p className='copyright'>*  Will send you weekly updates for your better
finance management.</p>
        </Col>
        </Row>
        <hr/>
        <p className="text-center">Copyright @ AR Shakir 2022. All Rights Reserved.</p>
      </Container>
    </>
  );
}

export default App;
