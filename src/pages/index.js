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
    "nome": "Villa Cristalda",
    "descrizione":
      "Villa Cristalda is a charming residence in Vieste, ideal for digital nomads and remote workers. Surrounded by a lush Mediterranean garden, it offers a serene and relaxing environment to work and live. With 8 beds and cozy common spaces, it fosters a vibrant community of professionals and travel enthusiasts.",
    "images": [
      "cristalda/1.webp",
      "cristalda/2.webp",
      "cristalda/3.webp",
      "cristalda/4.webp",
      "cristalda/5.webp",
      "cristalda/6.webp",
      "cristalda/7.webp",
      "cristalda/8.webp",
      "cristalda/9.webp",
    ],

    "città": "Vieste",
  },
  {
    "nome": "Villa il Trabucco",
    "descrizione":
      "Situated in Peschici, Villa il Trabucco is an oasis of tranquility for digital nomads and remote workers. With a spacious panoramic garden and 6 comfortable beds, it provides an ideal setting for work and relaxation. The common areas encourage the creation of a community of professionals and travelers.",
    "images": [
      "trabucco/1.webp",
      "trabucco/2.webp",
      "trabucco/3.webp",
      "trabucco/4.webp",
    ],

    "città": "Peschici",
  },
  {
    "nome": "Villa Tremiti",
    "descrizione":
      "Villa Tremiti is an exclusive residence in Vieste, perfect for digital nomads and remote workers. With a stunning garden and 8 beds, it offers an ideal environment to work and live in harmony. The common areas promote the creation of a vibrant community of professionals and travel enthusiasts.",
    "images": [
      "tremiti/1.webp",
      "tremiti/2.webp",
      "tremiti/3.webp",
      "tremiti/4.webp",
      "tremiti/5.webp",
    ],

    "città": "Vieste",
  },
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
            <h2 className='mb-5 font-normal leading-relaxed'>
              Your best coliving experience.
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
      <Why />
      <Vantaggi />
      <VantaggiMobile />
      <Come />
      <Locations />
      <Modal i={0} />
      <Modal i={1} />
      <Modal i={2} />
    </>
  );
};

const Why = () => {
  return (
    <div className='flex justify-center max-lg:flex-col lg:text-2xl gap-16 mt-10 max-lg:px-10 text-lg'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
          Why Gargano?
        </h2>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>🏞️</p>
          <p className='opacity-100 font-medium'>Peace away from city chaos.</p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>☀️</p>
          <p className='opacity-100 font-medium'>277 sunny days per year.</p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>🍝</p>
          <p className='opacity-100 font-medium'>
            Delicious, genuine traditional cuisine.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>💰</p>
          <p className='opacity-100 font-medium'>
            Incredibly low cost of living.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>🔥</p>
          <p className='opacity-100 font-medium'>
            Authentic folklore and traditions.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>👥</p>
          <p className='opacity-100 font-medium'>
            Hospitable people, like a family.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>Why us?</h2>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>🧳</p>
          <p className='opacity-100 font-medium'>
            We organize everything, you just live.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>🤝</p>
          <p className='opacity-100 font-medium'>
            We create a community of people.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>⛰️</p>
          <p className='opacity-100 font-medium'>
            Explore the territory with us.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>💻</p>
          <p className='opacity-100 font-medium'>
            Perfectly equipped work environments.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>🌴</p>
          <p className='opacity-100 font-medium'>
            We know this paradise perfectly
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <p className='opacity-100 font-medium mr-2'>✨</p>
          <p className='opacity-100 font-medium'>
            Live a unique, unforgettable experience.
          </p>
        </div>
      </div>
    </div>
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
              i={i}
              key={i}
              immagine={"/" + c.images[0]}
              nome={c.nome}
              descrizione={c.descrizione}
            ></Location>
          );
        })}
      </div>
    </div>
  );
};

const Location = ({ i, nome, descrizione, immagine }) => {
  return (
    <div className='carousel-item '>
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
            <button
              className='btn btn-primary'
              onClick={() => {
                console.log(i);
                localStorage.setItem("location", nome);
                console.log(document.getElementById(i));
                document.getElementById(i).showModal();
              }}
            >
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ i }) => {
  return (
    <dialog id={i} className='modal'>
      <div className='modal-box max-w-full  lg:px-52'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='font-bold text-lg'>{cities[i].nome}</h3>
        <div className='carousel w-full lg:h-[70vh] h-[40vh] gap-5 lg:gap-28'>
          {cities[i].images.map((img, k) => {
            return (
              <div key={k} className='carousel-item relative w-[80%] '>
                <Image
                  src={"/" + img}
                  alt='Descrizione immagine 1'
                  fill
                  className=' object-cover'
                />
              </div>
            );
          })}
        </div>
        <div className='w-full flex justify-end'>
          <Link className='btn btn-primary btn-md ' href={"plans"}>
            Proceed
          </Link>
        </div>
      </div>
    </dialog>
  );
};

export default Page;
