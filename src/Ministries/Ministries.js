import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ministries.module.css';
import Nav from 'react-bootstrap/Nav'


const ministries = () => {
    return (
        <div className={styles.mainDiv}>
          <h1>Ministries</h1>
          <div>
            <Container>
              <Nav className={styles.navItems}
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Ministries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </div>

          <br />
            {/* <Container> */}
                <Row>
                    <Col xs={6} md={4}>
                    <div class="c-sidebar c-sidebar-dark c-sidebar-show" className={styles.div}>
                <ul  class="c-sidebar-nav" className={styles.normalLink} >
                  <li class="c-sidebar-nav-item" className={styles.li}  >
                    <a class="c-sidebar-nav-link" href="#"  >
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Children
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}  >
                    <a  class="c-sidebar-nav-link" href="#">
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Youth
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}>
                    <a class="c-sidebar-nav-link" href="#">
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Adults
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}>
                    <a class="c-sidebar-nav-link" href="#">
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Prayer
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}>
                    <a class="c-sidebar-nav-link" href="#" >
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Outreach
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}>
                    <a class="c-sidebar-nav-link" href="#">
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Serve
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}>
                    <a class="c-sidebar-nav-link" href="#">
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Bible Study
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}>
                    <a class="c-sidebar-nav-link" href="#">
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Contact Us
                    </a>
                  </li>
                  <li class="c-sidebar-nav-item" className={styles.li}>
                    <a class="c-sidebar-nav-link" href="#">
                      <i class="c-sidebar-nav-icon cil-speedometer"></i> Family Pre-Registration
                    </a>
                  </li>
                </ul>
            </div>
            </Col>
            <Col xs={12} md={8}>

            <h3 style={{fontWeight: "700"}}>Three Important Steps On Your Journey</h3>
                <p>Everyone "connects" in different ways. Depending on your life stage, personality, and circumstances – we each have different needs. We get it. There’s no one-size-fits-all approach. But, there is always a next step towards Christ. Here are some some important next steps you should consider.</p>
                <div className={styles.paraDiv}>
                    <p>
                        <strong style={{color: "red"}}>Step 1 -</strong> Do you have questions about Jesus? Questions like, "Who is He and Why does He care about me?" Or, "What's the point of knowing Him?" Maybe you want to know how to have a relationship with Him. These are great questions! So, we offer classes for you and your kids called Discovering Christ. 
                    </p>
                </div>
                <div className={styles.paraDiv}>
                    <p>
                    <strong style={{color: "red"}}>Step 2 -</strong> Another important step is joining a Small Group. A Small Group is a group of people who get together regularly to develop some good friends and grow their faith.
                    </p>
                </div>
                <div className={styles.paraDiv}>
                    <p>
                    <strong style={{color: "red"}}>Step 3 -</strong> Serving others is vital step in your journey. Jesus said "Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me." Join a serving team that fits your unique gifts, desires, and passions.
                    </p>
                </div>
                <p>
                We can help you with each of these. Just stop by Starting point after a service this weekend.
                </p>

           
            </Col>
        </Row>
        {/* </Container> */}
        </div>
    );
}

export default ministries;