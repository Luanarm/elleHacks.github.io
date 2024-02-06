import React from "react";
import Red from "../assets/Red.png";
import StickerMule from "../assets/sponsors/sticker-mule-logo-light.png";
import Scotiabank from "../assets/sponsors/Scotiabank.png";
import EnvironicsAnalytics from "../assets/sponsors/EnvironicsAnalytics.jpg";
import CSE from "../assets/sponsors/CSE.jpeg";
import Accenture from "../assets/sponsors/accenture.png";
import Brampton from "../assets/sponsors/Brampton.jpg";
import Card from "react-bootstrap/Card";
import "./MeetOurSponsors.css";

function MeetTheTeam() {

const styles ={
  backgroundColor: "#712323",
}
  const golden = {
    border: "10px solid #ffd700", /* #ffd700 is the hexadecimal color code for gold */
    padding: "10px",
    color: "#ffd700",
    //  backgroundColor: "white"
    };

    const bronze = {
      border: "10px solid #cd7f32", /* #cd7f32 is the hexadecimal color code for bronze */
      padding: "10px",
      color: "#cd7f32"
      };
      const community = {
        border: "10px solid #fff", /* #cd7f32 is the hexadecimal color code for bronze */
        padding: "10px",
        color: "#cd7f32"
        };
  return (
    <div className="App text-white text-left sm:text-4xl md:text-3xl lg:text-6xl p-4" id="meet-our-sponsors-section" style={styles}>
      <div class="container-fluid-xl"></div>
      <h2 class="text-white text-left sm:text-4xl md:text-3xl lg:text-6xl p-4">Meet Our Sponsors</h2>

        <div id="sponsors">
         <div class="sponsors-container">
 {/* Golden Sponsors */}
            <div class="golden-sponsors" >
              <h3 class="text-center sm:text-4xl md:text-3xl lg:text-6xl p-4">Gold Sponsors</h3>
                <div>
                  <div class="flex items-center justify-center" >
                    <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center" >
                      <a href="https://www.scotiabank.com/ca/en/personal.html" target="_blank" rel="noreferrer" >
                        <Card className="custom-card justify-center">
                          <Card.Img variant="top" src={Scotiabank} />
                        </Card>
                      </a>
                    </div>
                  </div>
                  <div class=" flex items-center justify-center">
                    <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                      <a href="https://environicsanalytics.com/en-ca" target="_blank" rel="noreferrer">
                      <Card className="custom-card justify-center">
                        <Card.Img variant="top" src={EnvironicsAnalytics} />
                      </Card>
                      </a>
                    </div>
                  </div>
                </div>
          </div>

  {/* Bronze Sponsors */}
          <div class="bronze-sponsors" id="Bsponsors">
             <h3 class="text-center sm:text-4xl md:text-3xl lg:text-6xl p-4">Bronze Sponsors</h3>
              <div>
                <div class="flex items-center justify-center" >
                  <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center" >
                    <a href="https://www.pg.ca/en-ca/" target="_blank" rel="noreferrer" >
                      <h1>P&G</h1>
                      <Card className="custom-card justify-center">
                        <Card.Img variant="top" />
                      </Card>
                    </a>
                  </div>
                </div>
                <div class=" flex items-center justify-center">
                  <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                    <a href="https://www.kpmpower.com/" target="_blank" rel="noreferrer">
                    <h1>KPM Power</h1>
                    <Card className="custom-card justify-center">
                      <Card.Img variant="top"/>
                     </Card>
                     </a>
                  </div>
                </div>
        
                  <div class=" flex items-center justify-center">
                    <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                      <a href="https://www.accenture.com/ca-en" target="_blank" rel="noreferrer">
                      <Card className="custom-card justify-center">
                        <Card.Img variant="top" src={Accenture}/>
                      </Card>
                      </a>
                    </div>
                  </div>


                  <div class=" flex items-center justify-center">
                    <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                      <a href="https://www.cse-cst.gc.ca/en" target="_blank" rel="noreferrer">
                      <Card className="custom-card justify-center">
                        <Card.Img variant="top" src={CSE}/>
                      </Card>
                      </a>
                    </div>
                  </div>


                  <div class=" flex items-center justify-center">
                    <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                      <a href="https://www.cse-cst.gc.ca/en" target="_blank" rel="noreferrer">
                      <h1>CGI</h1>
                      <Card className="custom-card justify-center">
                        <Card.Img variant="top"/>
                      </Card>
                      </a>
                    </div>
                  </div>


              </div>
          </div>
 {/* Community Sponsors */}
              <div class="community-sponsors " id="communityS" >
                <h3 class="text-white text-center sm:text-4xl md:text-3xl lg:text-6xl p-4">Community Sponsors</h3>
                  <div>
                    <div class=" flex items-center justify-center">
                      <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                        <a href="https://mule.to/p5it" target="_blank" rel="noreferrer">
                        <h1>Microsoft Reactor</h1>
                        {/* <Card className="custom-card justify-center">
                          <Card.Img variant="top" src={StickerMule} />
                        </Card> */}
                        </a>
                      </div>
                  </div>

                  <div>
                    <div class=" flex items-center justify-center">
                      <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                        <a href="https://investbrampton.ca/locate-here/innovation-district/" target="_blank" rel="noreferrer">
                        <Card className="custom-card justify-center">
                          <Card.Img variant="top" src={Brampton} />
                        </Card>
                        </a>
                      </div>
                  </div>

                  

                  <div>
                    <div class=" flex items-center justify-center">
                      <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                        <a href="https://investbrampton.ca/locate-here/innovation-district/" target="_blank" rel="noreferrer">
                        {/* <Card className="custom-card justify-center">
                          <Card.Img variant="top" src={Brampton} />
                        </Card> */}
                        </a>
                        <h1>Redbull</h1>
                      </div>
                  </div>
                  <div>
                    <div class=" flex items-center justify-center">
                      <div class="flex grid-cols-4 gap-5 place-items-center place-content-center justify-center">
                        <a href="https://mule.to/p5it" target="_blank" rel="noreferrer">
                        <Card className="custom-card justify-center">
                          <Card.Img variant="top" src={StickerMule} />
                        </Card>
                        </a>
                      </div>
                  </div>
                  </div>
                </div>            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
