// import React from "react";
// import images from "../Components/images/carte.jpg";


// export function About() {
//   return (
//     <div>
//       <div>
//         <h1>Ce este o carte?</h1>
//       </div>
//       <div className="what">
//         <div className="hartii">
//           O carte este o colecție de hârtii, pergamente sau alte astfel de
//           materiale, în formă de coli sau foi de cele mai multe ori egale între
//           ele și legate sau broșate într-un volum. Cărțile sunt de obicei
//           tipărite (rareori scrise și de mână) și conțin diverse lucrări scrise,
//           pe cea mai mare diversitate de teme. O carte este de asemenea o operă
//           literară sau științifică sau o parte semnificativă dintr-o astfel de
//           operă.
//         </div>
//         <div className="imgAbout">
//           <img src={images} alt="carte" />
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import amintiri from "../Components/images/amintiri.jpg";
import dumbrava from "../Components/images/dumbrava.jpg";
import fram from "../Components/images/fram.jpg";

const images = [amintiri, dumbrava, fram];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div>
        <h1>Ce este o carte?</h1>
      </div>
      <div>
        <div className="what">
            <div className="hartii">
            O carte este o colecție de hârtii, pergamente sau alte astfel de
            materiale, în formă de coli sau foi de cele mai multe ori egale între
            ele și legate sau broșate într-un volum. Cărțile sunt de obicei
            tipărite (rareori scrise și de mână) și conțin diverse lucrări scrise,
            pe cea mai mare diversitate de teme. O carte este de asemenea o operă
            literară sau științifică sau o parte semnificativă dintr-o astfel de
            operă.
            </div>
            <div className="slideshow">
            <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
            />
            </div>
            </div>
      </div>
    </div>
  );
};

export default Slideshow;
