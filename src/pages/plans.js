import React, { use, useEffect, useState } from "react";

import { IoArrowBackOutline } from "react-icons/io5";

const piani = [
  {
    "duration": "1-3 weeks",
    "advantages": [
      "Explore the Gargano flexibly",
      "Opportunities for networking and socializing",
      "Access to included activities and experiences",
    ],
    "oldprice": "300/week",
    "price": "240/week",
  },
  {
    "duration": "1-3 months",
    "advantages": [
      "Immerse yourself in the local life and culture",
      "More time to explore the region",
      "Greater opportunities for networking and collaboration",
    ],
    "oldprice": "800 / month",
    "price": "640 / month",
  },
  {
    "duration": "4-6 months or more",
    "advantages": [
      "Long-term living experience in the Gargano",
      "Maximize networking and collaboration opportunities",
      "Discover the true essence of the region",
    ],
    "oldprice": "700 / month",
    "price": "560 / month",
  },
];

const Plans = () => {
  const [open, setIsOpen] = useState(false);
  const [plan, setPlan] = useState(0);
  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <div className='flex-col flex items-center lg:h-screen gap-7 mt-10 '>
      <h2 className='bg-error p-4 font-bold'>
        {"Don't miss your chance to save 20%!"}
      </h2>
      <div className='flex items-center gap-5'>
        <IoArrowBackOutline
          size={30}
          className={open ? "block" : "hidden"}
          onClick={() => {
            setIsOpen(false);
          }}
        ></IoArrowBackOutline>
        <h2 className='font-bold lg:text-7xl'>
          {open ? "Good choice" : "Choose your plan"}
        </h2>
      </div>

      <div
        className={
          open
            ? "hidden"
            : "flex w-full justify-center gap-10 lg:h-screen items-center max-lg:flex-col"
        }
      >
        {piani.map((p, i) => {
          return (
            <Plan
              plan={plan}
              key={i}
              nome={p.duration}
              prezzo={p.price}
              oldprice={p.oldprice}
              vantaggi={p.advantages}
              func={() => {
                setIsOpen(!open);
                setPlan(i);
              }}
            />
          );
        })}
      </div>
      <Form open={open} plan={plan} />
    </div>
  );
};

const Plan = ({ nome, oldprice, prezzo, vantaggi, func }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl max-lg:w-[80vw] min-h-[60vh]'>
      <div className='card-body justify-between'>
        <h2 className='card-title'>{nome}</h2>
        <ul>
          {vantaggi.map((v, i) => {
            return (
              <li key={i} className='mb-3'>
                {v}
              </li>
            );
          })}
        </ul>
        <div className='card-actions flex-col justify-between '>
          <p className='text-left'>
            starting from <br></br>
            <span className='font-bold text-2xl strike'>{"€" + oldprice}</span>
          </p>
          <p className='text-left'>
            <span className='font-black text-3xl text-red-800'>
              {"€" + prezzo}
            </span>
          </p>
          <div className='w-full flex justify-center'>
            <button
              className='btn btn-primary self-end w-full'
              onClick={() => {
                func();
              }}
            >
              I like it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = ({ open, plan }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    ruolo: "",
    email: "",
    telefono: "",
    nazionalità: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Qui puoi aggiungere la logica per inviare i dati del form a un server
  };

  console.log();

  return (
    <div className={open ? "flex flex-col" : "hidden"}>
      <div className='flex'>
        <h2>{piani[plan].duration}</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className='grid lg:grid-cols-2 gap-10 mt-10'
      >
        <div>
          <input
            className='input input-bordered w-full max-w-xs'
            placeholder='*First Name'
            type='text'
            name='nome'
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className='input input-bordered w-full max-w-xs'
            placeholder='*Last Name'
            type='text'
            name='cognome'
            value={formData.cognome}
            onChange={handleChange}
          />
        </div>
        <div className='lg:col-span-2'>
          <input
            className='input input-bordered w-full '
            placeholder='*Job Role'
            type='text'
            name='ruolo'
            value={formData.ruolo}
            onChange={handleChange}
          />
        </div>
        <div className='lg:col-span-2'>
          <input
            className='input input-bordered w-full '
            placeholder='*Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='lg:col-span-2'>
          <input
            className='input input-bordered w-full '
            placeholder='Phone Number'
            type='tel'
            name='telefono'
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className={
            formData.nome == "" ||
            formData.cognome == "" ||
            formData.ruolo == "" ||
            formData.email == ""
              ? "btn btn-disabled lg:col-start-2"
              : "btn btn-primary lg:col-start-2"
          }
        >
          Submit
        </button>
      </form>
      <div>
        <a
          href='https://example.com/companies'
          target='_blank'
          rel='noopener noreferrer'
        >
          Information for Companies
        </a>
      </div>
    </div>
  );
};

export default Plans;
