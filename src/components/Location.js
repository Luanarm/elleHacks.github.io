// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import berg from  "../assets/berg.jpg";


// function Location() {
    
//     return (
//         <div >
//             <div>
//                 <h2 className="text-white text-left sm:text-4xl md:text-3xl lg:text-6xl p-4">Location</h2>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <div style={{ flex: '50%', padding: '10px' }}>
//                     <Image src={berg} fluid className="mx-auto my-4" />
//                 </div>
//                 <div style={{ flex: '50%', padding: '10px' }}>
//                     <Image src={berg} fluid className="mx-auto my-4" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Location;



import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import berg from  "../assets/berg.jpg";


function Location() {
    
    return (
        <div id="location">
            <div>
                <h2 className="text-white text-left sm:text-4xl md:text-3xl lg:text-6xl p-4">Location</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: '50%', padding: '10px' }}>
                   
                    <a href='https://www.google.com/maps/dir//11+Arboretum+Ln,+North+York,+ON+M3J+2S5/@43.7722033,-79.5890895,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b2f83ec72aef9:0x5fc298e10a6b0d11!2m2!1d-79.5066888!2d43.7722329?hl=en-US&entry=ttu'> <Image src={berg} fluid className="mx-auto my-4" /></a>
                </div>
                <div className="text-white sm:text-4xl md:text-3xl lg:text-2xl p-4" style={{ flex: '50%', padding: '10px' }}>
                   <p>York University Bergeron Centre for Engineering Excellence</p>
                   <p>11 Arboretum Ln, North York, ON M3J 2S5</p>
                </div>
            </div>
        </div>
    );
}

export default Location;