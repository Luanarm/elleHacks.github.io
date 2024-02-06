import React from 'react';
import test from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./MeetTheTeam.css"

//Headshot Images
import img1Chair from '../assets/meettheteam/headshots/Visali_Thirukeswaran.png';
import img2Chair from '../assets/meettheteam/headshots/Danielle_Grajnar.jpg';
import img3Chair from '../assets/meettheteam/headshots/Erika_Grandy_Headshot.jpg';
import img4Chair from '../assets/meettheteam/headshots/Mariam_Javeed.JPG';

//Logistic
import img1Logistic from '../assets/meettheteam/headshots/Aditi_headshot.jpeg';
import img2Logistic from '../assets/meettheteam/headshots/Bohina_Manochehrzadeh.jpg';
import img3Logistic from '../assets/meettheteam/headshots/Faiza_headshot.jpg';
import img4Logistic from '../assets/meettheteam/headshots/Huiling_tang_headshot.jpg';
import img5Logistic from '../assets/meettheteam/headshots/ilwad_headshot.jpg';
import img6Logistic from '../assets/meettheteam/headshots/Lavanaya Headshot.jpg';
import img7Logistic from '../assets/meettheteam/headshots/Najwa_Waqar_Headshot.jpg';
import img8Logistic from '../assets/meettheteam/headshots/Rodiat Adeoye.jpg';
import img9Logistic from '../assets/meettheteam/headshots/Sabriha_Amin.JPG';
import img10Logistic from '../assets/meettheteam/headshots/Sidney_Liu.jpg';
import img11Logistic from '../assets/meettheteam/headshots/Triya Augustine.jpg';
import img12Logistic from '../assets/meettheteam/headshots/Ellia_Headshot.jpg';
import img13Logistic from '../assets/meettheteam/headshots/shalomi_herman.png';
//IT
import img1IT from '../assets/meettheteam/headshots/Dimitra_Headshot.jpg';
import img2IT from '../assets/meettheteam/headshots/Hejitha_Weera_Headshot.jpeg';
import img3IT from '../assets/meettheteam/headshots/Hulya_Yasar_Headshot.jpg';
import img4IT from '../assets/meettheteam/headshots/Julia_Da_Silva_Headshot.jpg';
import img5IT from '../assets/meettheteam/headshots/maher kazi.jpg';
import img6IT from '../assets/meettheteam/headshots/Steeve-Johan Otoka-Eyota.jpg';
import img7IT from '../assets/meettheteam/headshots/Zaina Awad.png';
import img8IT from '../assets/meettheteam/headshots/Zijing_Wang.jpeg';
import img9IT from '../assets/meettheteam/headshots/Nanziba_Headshot.jpg';
import img10IT from '../assets/meettheteam/headshots/Pritumi_Patel.jpeg';
import img11IT from '../assets/meettheteam/headshots/Luana_Headshot.jpeg';
//Sponsorship
import img1Sponsorship from '../assets/meettheteam/headshots/Batul_Ismail.jpg';
import img2Sponsorship from '../assets/meettheteam/headshots/sayed_mohammed.jpg';
import img3Sponsorship from '../assets/meettheteam/headshots/Wan_Ning_Ma.jpg';
import img4Sponsorship from '../assets/meettheteam/headshots/Rumaisa_Nawar_Headshot .jpg';

function Member({ name, role, img, link }) {
  // Split the role into two lines if it contains a hyphen
  const [line1, line2] = role.split('-');

  return (
    <div className="team-member">
      <div className="image">
        <a href={link} target="_blank" rel="noreferrer">
          <img className="team-img" src={img} alt={name} />
        </a>
      </div>
      <h4 className="team-name text-center">{name}</h4>
      <p className="team-title text-center">
        {line1 && <span className="role-line">{line1}<br /></span>}
        {line2 && <span className="role-line">{line2}</span>}
      </p>
    </div>
  );
}



function MeetTheTeam() {

  return (
    <div className="App">
    <header className="App-header">
      <div className="container-fluid-xl" id="about-us-section"></div>
      <div className="team" />

      <h2 className="text-white text-left sm:text-4xl md:text-3xl lg:text-6xl p-4">Meet Our Team</h2>

     
          <div class=" flex items-center justify-center">
            <div class="flex grid-cols-12 gap-2 place-items-center place-content-center justify-center">
              <Member name="Visali Thirukeswaran" role="ElleHacks Co-Chair" img={img1Chair} link="https://www.linkedin.com/in/visalithiru" />
              <Member name="Danielle Grajnar" role="ElleHacks Co-Chair" img={img2Chair} link="https://www.linkedin.com/in/danielle-grajnar/" />
              <Member name="Erika Grandy" role="ElleHacks Co-Chair" img={img3Chair} link="https://www.linkedin.com/in/erikagrandy/" />
              <Member name="Mariam Javeed" role="ElleHacks Co-Chair" img={img4Chair} link="https://www.linkedin.com/in/mariamjaveed/" />
            </div>
          </div>

          <div class=" flex items-center justify-center">
            <div class="flex grid-cols-14 gap-2 place-items-center place-content-center justify-center">
                <Member name="Triya Augustine" role="Logistics Director" img={img11Logistic} link="https://www.linkedin.com/in/triya-augustine/" />
                <Member name="Aditi Patel" role="Logistics Executive" img={img1Logistic} link="https://www.linkedin.com/in/aditi-patel-43452927a" />
                <Member name="Bohina Manochehrzadeh" role="Logistics Executive" img={img2Logistic} link="https://www.linkedin.com/in/bohina-m/" />
                <Member name="Faiza Sidin" role="Logistics Executive" img={img3Logistic} link="" />
               
              </div>
            </div>

            <div class=" flex items-center justify-center">
            <div class="flex grid-cols-14 gap-2 place-items-center place-content-center justify-center">
                <Member name="Huiling Tang" role="Logistics Executive" img={img4Logistic} link="https://www.linkedin.com/in/huiling-tang/" /> 
                <Member name="Ilwad Abdulle" role="Logistics Executive" img={img5Logistic} link="https://www.linkedin.com/in/ilwad-abdulle-1a0920223/" />  
                <Member name="Lavanaya Bajaj" role="Logistics Executive" img={img6Logistic} link="https://www.linkedin.com/in/lavanaya-bajaj111/" /> 
                <Member name="Najwa Waqar" role="Logistics Executive" img={img7Logistic} link="https://www.linkedin.com/in/najwa-waqar-b17010284" />
                <Member name="Rodiat Adeoye" role="Logistics Executive" img={img8Logistic} link="https://www.linkedin.com/in/rodiat-adeoye-0a7b31257/" />
              </div>
            </div>


            <div class=" flex items-center justify-center">
            <div class="flex grid-cols-14 gap-2 place-items-center place-content-center justify-center">
                <Member name="Sabriha Amin" role="Logistics Executive" img={img9Logistic} link="https://www.linkedin.com/in/sabriha-amin-b695b8216" />
                <Member name="Sidney Liu" role="Logistics Executive" img={img10Logistic} link="https://www.linkedin.com/in/sidney-liu-8b41a9265" />
                <Member name="Ellia Godbout" role="Logistics Executive" img={img12Logistic} link="https://www.linkedin.com/in/ellia-godbout/" />
                <Member name="Shalomi Herman" role="Logistics Executive" img={img13Logistic} link="https://www.linkedin.com/in/shalomi-herman" />
                <Member name="Katsa Bejemil" role="Logistics Executive" img={test} link="https://www.linkedin.com/in/shalomi-herman" />
                <Member name="Asma Hashar" role="Logistics Executive" img={test} link="https://www.linkedin.com/in/shalomi-herman" />
              </div>
            </div>

          <div class=" flex items-center justify-center">
            <div class="flex grid-cols-12 gap-2 place-items-center place-content-center justify-center">
              <Member name="Luana Madeira" role="IT Director" img={img11IT} link="https://www.linkedin.com/in/luanamadeira/" />
              <Member name="Dimitra Balasingam" role="IT Executive" img={img1IT} link="https://www.linkedin.com/in/dimitra-balasingam-116684239" />
              <Member name="Thanuj Hejitha Karunadhipathi Weera" role="IT Executive" img={img2IT} link="https://www.linkedin.com/in/hejithaw/" />
              <Member name="Hulya Yasar" role="IT Executive" img={img3IT} link="https://www.linkedin.com/in/hulyayasar/" />
              <Member name="Julia Da Silva" role="IT Executive" img={img4IT} link="https://www.linkedin.com/in/julia-da-silva-9a2b25242/" />
             
              
            </div>
          </div>

          <div class=" flex items-center justify-center">
            <div class="flex grid-cols-12 gap-2 place-items-center place-content-center justify-center">        
            <Member name="Maher Kazi" role="IT Executive" img={img5IT} link="https://www.linkedin.com/in/maher-kazi/" />
              
            <Member name="Steeve-Johan Otoka-Eyota" role="IT Executive" img={img6IT} link="https://www.linkedin.com/in/johanotoka/" />
              <Member name="Zaina Awad" role="IT Executive" img={img7IT} link="https://www.linkedin.com/in/zaina-awad/" />
              <Member name="Zijing Wang" role="IT Executive" img={img8IT} link="https://www.linkedin.com/in/zijing-wang-78812a253/" />
              <Member name="Nanziba Naul Khan" role="IT Executive" img={img9IT} link="http://www.linkedin.com/in/nanziba-khan" />
              <Member name="Pritumi Patel" role="IT Executive" img={img10IT} link="" />
              <Member name="Fiorella Russi" role="IT Executive" img={test} link="https://www.linkedin.com/in/fiorella-russi/" />
            </div>
          </div>

          <div class=" flex items-center justify-center">
            <div class="flex grid-cols-12 gap-2 place-items-center place-content-center justify-center pb-8">
              <Member name="Wan Ning Ma" role="Sponsorship Director" img={img3Sponsorship} link="https://www.linkedin.com/in/wnmwnm" />
              <Member name="Batul Ismail" role="Sponsorship Executive" img={img1Sponsorship} link="https://www.linkedin.com/in/batul-ismail-24b4a6226" />
              <Member name="Sayed Mohammed" role="Sponsorship Executive" img={img2Sponsorship} link="https://www.linkedin.com/in/sayed-mohammed/" />
              <Member name="Rumaisa Nawar" role="Sponsorship Executive" img={img4Sponsorship} link="https://www.linkedin.com/in/rumaisanawar" />
            </div>
          </div>

          <div class=" flex items-center justify-center">
            <div class="flex grid-cols-12 gap-2 place-items-center place-content-center justify-center pb-8">
              <Member name="ELLE '23" role="Hacker #1" img={test} link="" />
              <Member name="ELLE '23" role="Hacker #2" img={test} link="" />
              <Member name="ELLE '23" role="Hacker #3" img={test} link="" />
              <Member name="Shanza Farrukh" role="Marketing Executive" img={test} link="" />
              <Member name="Sumaiya Chalya" role="Marketing Executive" img={test} link="" />
            </div>
          </div>
      </header>
  


</div>


 );
 }

export default MeetTheTeam;
