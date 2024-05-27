import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const vantaggi = [
  {
    "Titolo": {
      "it": "La vita che hai sempre sognato",
      "en": "The life you've always dreamed of",
    },
    "Descrizione": {
      "it": "Scopri il segreto per vivere un'avventura senza fine, unendo lavoro e piacere come mai prima d'ora.",
      "en": "Discover the secret to living an endless adventure, blending work and pleasure like never before.",
    },
    "Immagine": "workinglaptop.webp",
  },
  {
    "Titolo": {
      "it": "Benvenuti nel paradiso naturale",
      "en": "Welcome to nature's paradise",
    },
    "Descrizione": {
      "it": "Respira la purezza dell'aria del Gargano e lasciati avvolgere dal clima perfetto durante gran parte dell'anno. Immergiti nella bellezza incontaminata del mare cristallino e delle montagne verdeggianti, a due passi dal tuo ufficio.",
      "en": "Breathe the pure air of Gargano and let yourself be embraced by the perfect climate for most of the year. Immerse yourself in the unspoiled beauty of the crystal-clear sea and lush green mountains, just a stone's throw away from your office.",
    },
    "Immagine": "baiadellezagare.webp",
  },
  {
    "Titolo": {
      "it": "Avventure ed emozioni che lasciano il segno",
      "en": "Adventures and emotions that leave their mark",
    },
    "Descrizione": {
      "it": "Esplora paesaggi mozzafiato a cavallo, in elicottero o in barca, scoprendo angoli remoti della Puglia. Dedica le serate a deliziose cene tradizionali e attività conviviali con la tua nuova comunità.",
      "en": "Explore breathtaking landscapes on horseback, by helicopter or boat, discovering remote corners of Puglia. Dedicate your evenings to delicious traditional dinners and convivial activities with your new community.",
    },
    "Immagine": "helicopter.webp",
  },
  {
    "Titolo": {
      "it": "Il segreto per un lavoro d'eccellenza",
      "en": "The secret to excellent work",
    },
    "Descrizione": {
      "it": "Aumenta la tua produttività lavorando in spazi comodi e attrezzati, circondato da un ambiente di ispirazione. Approfitta del basso costo della vita per ottimizzare il tuo budget e concentrarti sul lavoro.",
      "en": "Increase your productivity by working in comfortable and well-equipped spaces, surrounded by an inspiring environment. Take advantage of the low cost of living to optimize your budget and focus on your work.",
    },
    "Immagine": "coworking.webp",
  },
  {
    "Titolo": {
      "it": "Connessioni che contano",
      "en": "Connections that matter",
    },
    "Descrizione": {
      "it": "Entra a far parte di una vivace rete di professionisti e menti brillanti, pronte a collaborare e crescere insieme.",
      "en": "Join a vibrant network of professionals and brilliant minds, ready to collaborate and grow together.",
    },
    "Immagine": "people.webp",
  },
  {
    "Titolo": {
      "it": "Il gusto della vera Puglia",
      "en": "The taste of authentic Puglia",
    },
    "Descrizione": {
      "it": "Delizia il tuo palato con l'autentica cucina pugliese, preparata con ingredienti freschi e genuini.",
      "en": "Delight your palate with authentic Pugliese cuisine, prepared with fresh and genuine ingredients.",
    },
    "Immagine": "food.webp",
  },
  {
    "Titolo": {
      "it": "Libertà senza confini",
      "en": "Freedom without boundaries",
    },
    "Descrizione": {
      "it": "Dimenticati dei vincoli di un contratto di affitto tradizionale. Il coliving ti offre la libertà di vivere e lavorare ovunque, a tuo piacimento.",
      "en": "Forget the constraints of a traditional rental contract. Coliving offers you the freedom to live and work wherever you choose.",
    },
    "Immagine": "freedom.webp",
  },
];

const cities = [
  {
    "nome": "Vieste",
    "descrizione":
      "Vieste, the pearl of Gargano, offers a breathtaking spectacle with its crystal-clear waters and unspoiled beaches. Explore its picturesque alleys and savor the true Apulian hospitality.",
    "immagine": "baiadellezagare.webp",
    "url": "https://google.com",
  },
  {
    "nome": "Peschici",
    "descrizione":
      "Peschici, a gem nestled between the sea and mountains, enchants you with its medieval historic center and stunning panoramic views of the Gargano coast. Immerse yourself in its timeless atmosphere.",
    "immagine": "baiadellezagare.webp",
    "url": "https://google.com",
  },
  // {
  //   "nome": "Mattinata",
  //   "descrizione":
  //     "Mattinata, a delightful seaside town, will captivate you with its stunning golden beaches and authentic culinary traditions. Discover the true flavors of Gargano.",
  //   "immagine": "baiadellezagare.webp",
  //   "url": "https://google.com",
  // },
  {
    "nome": "San Severo",
    "descrizione":
      "San Severo, a crossroads of culture and traditions, will welcome you with its warm hospitality and architectural treasures. Explore its Baroque churches and extraordinary museums.",
    "immagine": "baiadellezagare.webp",
    "url": "https://google.com",
  },
  // {
  //   "nome": "Vico del Gargano",
  //   "descrizione":
  //     "Vico del Gargano, a peaceful corner immersed in the unspoiled nature of the Gargano National Park. Discover panoramic trails, crystal-clear waterfalls, and an oasis of tranquility.",
  //   "immagine": "baiadellezagare.webp",
  //   "url": "https://google.com",
  // },
  // {
  //   "nome": "Rodi Garganico",
  //   "descrizione":
  //     "Rodi Garganico, a city rich in history and traditions, will welcome you with its golden beaches and ancient monuments. Immerse yourself in its Mediterranean atmosphere and let its charm captivate you.",
  //   "immagine": "baiadellezagare.webp",
  //   "url": "https://google.com",
  // },
];

const Page = () => {
  return (
    <>
      <Navbar />
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: "url(../gargano.webp)", // or 'url(myImage)'
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className=' h-fit  '>
            <h1 data-translate className='mb-5  lg:leading-normal leading-none'>
              Gargano<br className='lg:hidden'></br>Connect
            </h1>
            <h2 className='mb-5 font-bold leading-relaxed'>
              Your office.<br className='lg:hidden'></br> A paradise.
            </h2>
            <a
              href='#features'
              className='max-lg:hidden btn btn-primary btn-lg font-bold'
            >
              Find out how
            </a>
            <a
              href='#featuresmobile'
              className='lg:hidden btn btn-primary btn-lg font-bold'
            >
              Find out how
            </a>
          </div>
        </div>
      </div>
      <Vantaggi />
      <VantaggiMobile />
      <Come />
      <Locations />
    </>
  );
};

const Vantaggi = () => {
  return (
    <div className='min-h-screen max-lg:hidden' id='features'>
      {vantaggi.map((v, i) => {
        return (
          <Vantaggio
            key={i}
            Title={v.Titolo.en}
            Description={v.Descrizione.en}
            i={i}
            Immagine={v.Immagine}
          />
        );
      })}
    </div>
  );
};

const Vantaggio = ({ i, Title, Description, Immagine }) => {
  return (
    <div className='py-12 flex flex-col  lg:mx-24 mx-7 '>
      <div
        className={
          i % 2 != 0
            ? "self-end lg:flex items-center lg:space-x-10 w-full "
            : "self-start lg:flex items-center space-x-10  w-full"
        }
      >
        <div
          className={
            i % 2 == 0
              ? "hidden "
              : " flex justify-center items-center space-x-4 max-lg:hidden w-full"
          }
        >
          <div className='w-[40rem] h-80 overflow-hidden rounded-lg shadow-lg relative'>
            <Image
              src={"/" + Immagine}
              alt='Descrizione immagine 1'
              fill
              className='rounded-lg shadow-lg object-cover'
            />
          </div>
        </div>
        <div
          className={
            i % 2 != 0
              ? "max-w-2xl mx-auto text-right "
              : "max-w-2xl mx-auto text-left "
          }
        >
          <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
            {Title}
          </h2>
          <p className='text-lg text-gray-600 mb-8'>{Description}</p>
        </div>
        <div
          className={
            i % 2 != 0
              ? "hidden "
              : " flex justify-center items-center space-x-4 max-lg:hidden "
          }
        >
          <div className='w-[40rem] h-80 overflow-hidden rounded-lg shadow-lg relative '>
            <Image
              src={"/" + Immagine}
              alt='Descrizione immagine 1'
              fill
              className='rounded-lg shadow-lg object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const VantaggiMobile = () => {
  return (
    <div className=' px-10 lg:hidden' id='featuresmobile'>
      {vantaggi.map((v, i) => {
        return (
          <VantaggioMobile
            key={i}
            Title={v.Titolo.en}
            Description={v.Descrizione.en}
            Immagine={v.Immagine}
          ></VantaggioMobile>
        );
      })}
    </div>
  );
};

const VantaggioMobile = ({ Title, Description, Immagine }) => {
  return (
    <div className='w-full flex flex-col  carousel-item h-fit my-24 '>
      <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>{Title}</h2>
      <p className='text-lg text-gray-600 mb-8'>{Description}</p>
      <div className='w-full h-60 overflow-hidden  relative '>
        <Image
          src={"/" + Immagine}
          alt='Descrizione immagine 1'
          fill
          className=' object-cover'
        />
      </div>
    </div>
  );
};

const Come = () => {
  return (
    <div className='flex flex-col items-center h-fit my-24'>
      <h2 className='font-bold mb-10'>How does it work?</h2>
      <ul className='timeline timeline-vertical mb-10'>
        <li>
          <div className='timeline-start timeline-box'>Choose the location</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-end timeline-box'>Choose the package</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-start timeline-box'>
            We contact you <br></br>to confirm your details
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-end timeline-box'>
            Pay securely with Stripe
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-start timeline-box'>Live your dream</div>
        </li>
      </ul>
      <h2 className='font-medium lg:text-3xl text-2xl'>
        {"Couldn't be easier, right?"}
      </h2>
    </div>
  );
};

const Locations = () => {
  return (
    <div className='flex flex-col items-center' id='locations'>
      <h2 className='font-bold mb-10'>Our locations</h2>
      <div className='carousel carousel-center max-lg:w-[95%] max-w-4/5 p-4 space-x-4 bg-slate-200 rounded-box'>
        {cities.map((c, i) => {
          return (
            <Location
              key={i}
              immagine={"/" + c.immagine}
              nome={c.nome}
              descrizione={c.descrizione}
              url={c.url}
            ></Location>
          );
        })}
      </div>
    </div>
  );
};

const Location = ({ nome, descrizione, immagine }) => {
  return (
    <button className='carousel-item '>
      <div className='card card-compact lg:w-80 w-72 bg-base-100 shadow-xl  h-full'>
        <div className='w-full h-64 overflow-hidden rounded-lg shadow-lg relative'>
          <Image
            src={immagine}
            alt='Descrizione immagine 1'
            fill
            className='rounded-lg shadow-lg object-cover'
          />
        </div>
        <div className='card-body'>
          <h2 className='card-title'>{nome}</h2>
          <p>{descrizione}</p>
          <div className='card-actions justify-end'>
            <Link className='btn btn-primary' href='/plans'>
              Discover
            </Link>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Page;
