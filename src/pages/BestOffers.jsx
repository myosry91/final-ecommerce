import React from 'react';
import img1 from '../assets/images/offer1.png'; 
import img2 from '../assets/images/offer2.png'; 
import img3 from '../assets/images/offer3.png'; 
import img4 from '../assets/images/offer4.png'; 
import img5 from '../assets/images/offer5.png'; 
import OfferCard from '../components/componentPages/offer/OfferCard';

const offers = [{id: 1,brand: 'KADY',discount: '80%',img: img1, },
  {id: 2,brand: 'DESERT',discount: '60%',img: img2,},
  {id: 3,brand: 'messery',price: '59 eg',img: img3,},
  {id: 4,brand: 'Andora COLLECTION',discount: '60%',img: img4,}, 
  {id: 5,brand: 'tie shop',price: '60 eg',img: img5,},
];


  
  const BestOffers = () => (
    <section className="py-8 bg-white-50 container">
      <h2 className="text-3xl font-bold text-center mb-6"> Best Offers </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {offers.slice(0, 3).map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
  
        
  <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        <OfferCard {...offers[3]} />
        <OfferCard {...offers[4]} />
      </div>
      </div>
    </section>
  );
  

export default BestOffers;
