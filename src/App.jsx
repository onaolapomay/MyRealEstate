import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
import Layout from './components/ui/Layout';
import { motion, AnimatePresence} from 'framer-motion';
import {useEffect} from 'react';
import {FaBuilding, FaHome, FaTree, FaCity} from "react-icons/fa";
import modernImg from "./assets/images/modern.webp";
import cozyImg from "./assets/images/cozy.webp";
import downtownImg from "./assets/images/downtown.webp";
import luxuryImg from "./assets/images/luxury.webp";
import charmingImg from "./assets/images/charming.webp";
import spaciousImg from "./assets/images/spacious.webp";
import lagosImg from "./assets/images/lagos.webp";
import abujaImg from "./assets/images/abuja.jpg";
import ibadanImg from "./assets/images/ibadan.jpg";
import enuguImg from "./assets/images/enugu.webp";
import heroImg from "./assets/images/hero.jpg";

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;
  useEffect(() => {
    if (selectedProperty){
      document.body.style.overflow = 'hidden';
    }else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProperty])


  const properties = [
    {
    id: 1,
    title: 'Modern Apartments in Lagos',
    description: '2 beds, 2 baths',
    price: ' ₦7,600,300 / Year',
    address: ' No.2 megamound, lekki phase 2',
    size: ' 1400 sqft',
    amenities: [' Gym', 'Pool', 'Parking'],
    image: modernImg,
    },
    {
      id: 2,
      title: 'Cozy Home in Abuja',
      description: '3 beds, 2 baths',
      price: ' ₦11,600,000 / Year',
      address: ' Asokoro District, Abuja',
      size: ' 1400 sqft',
      amenities: [' Gym', 'Pool', 'Parking'],
      image: cozyImg,
    },
    {
      id: 3,
      title: 'Downtown Bodija in Ibadan',
      description: '1 bed, 2 baths',
      price: ' ₦1,800,000 / Year',
      address: ' Aare Estate, Bodija, Ibadan',
      size: ' 3000 sqft',
      amenities: [' Gym', 'Pool', 'Parking'],
      image: downtownImg,
    },
    {
      id: 4,
      title: 'Luxury Villa in Kolapo Ishola',
      description: '4 beds, 3 baths',
      price: ' ₦5,000,000 / Year',
      address: ' Wale Drive, kolapo Ishola',
      size: ' 2200 sqft',
      amenities: [' Gym', 'Pool', 'Parking'],
      image: luxuryImg,
    },
    {
      id: 5,
      title: 'Charming Cottage in Enugu',
      description: '2 beds, 1 bath',
      price: '₦3,000,300 / Year',
      address: ' Phase 6 Extension, Trans Ekulu, Enugu',
      size: ' 1700 sqft',
      amenities: [' Gym', 'Pool', 'Parking'],
      image: charmingImg,
    },
    {
      id: 6,
      title: 'Spacious Duplex in Kano',
      description: '3 beds, 3 baths',
      price: ' ₦2,000,000 / Year',
      address: '  Newtown Sars Road, Kano, Kano',
      size: ' 1400 sqft',
      amenities: [' Gym', 'Pool', 'Parking'],
      image: spaciousImg,
    }
  ]


  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  )

  // Pagination logic
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentCards = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  console.log("currentPage:", currentPage);
  console.log("currentCards:", currentCards.map(card => card.title));

  return (
    <Layout>
      <section className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center px-4 text-center"
                style={{ backgroundImage: `url(${heroImg})` 
                }}>
                  <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4 sm:space-y-6 text-white">
                    <h2 className="text-3xl sm:text-5xl font-semibold mb-4 font-roboto">Find your next place</h2>
                    <p className='mb-6 text-xl font-raleway'>Explore apartments, houses, and more properties to buy or rent.</p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto">
                        <input type="text"
                        placeholder="Search by city, address, or ZIP" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <button className="px-6 py-2 font-merriweather bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Search</button>
                    </div>
                </div>
      </section>

        <section className="py-10 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold mb-4 font-oswald">Featured Listings</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProperties.length > 0 ? (
                        currentCards.map((property) => (
                        <div key={property.id} className="border rounded-lg overflow-hidden shadow-sm ">
                            <img src={property.image} alt={property.title}
                            className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold font-lato">{property.title}</h3>
                                <p className="text-gray-600">{property.price}-{property.description}</p>
                                <button className='mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm' onClick={() => setSelectedProperty(property)}>View Details</button>
                            </div>
                        </div>
                  ))
                  ) : (
                    <p className="col-span-3 text-center text-gray-500 text-lg font-medium">
                      No properties found matching your search.
                    </p>
                    )}
                </div>

                {filteredProperties.length > propertiesPerPage && (
                  <div className='flex justify-center items-center mt-9 gap-4'>
                    <button onClick={() => setCurrentPage((prev) =>Math.max(prev - 1, 1))} disabled={currentPage === 1}
                      className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50'>
                        previous
                    </button>

                    <span className='font-medium text-gray-600'>page {currentPage} of {totalPages}</span>
                    <button onClick={() => setCurrentPage((prev) =>Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages} className='px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 disabled:opacity-50'>
                      next
                    </button>
                  </div>
                )}
              </div>
            </section>
            <AnimatePresence>
                {selectedProperty && (
                  <motion.div
                  initial={{ opacity:0}}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>

                <motion.div 
                initial={{ scale: 0.8, opacity: 0}}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative'>
                  <button onClick={() => setSelectedProperty(null)}
                    className='absolute top-2 right-2 text-gray-400 hover:text-amber-800 text-xl font-bold font-inter'>
                    &times;
                  </button>
                  <img src={selectedProperty.image} 
                      alt={selectedProperty.title}
                      className='w-full h-48 object-cover rounded-md mb-4' />
                      <h2 className='text-2xl font-bold mb-2 font-lato'>{selectedProperty.title}</h2>
                      <p className='text-gray-500 mb-2'>{selectedProperty.description}</p>
                      <p className='text-blue-500 font-semibold'>{selectedProperty.price}</p>
                      <p className='textsm text-gray-600'><strong>Address</strong>{selectedProperty.address}</p>
                      <p className='textsm text-gray-600'><strong>Size</strong>{selectedProperty.size}</p>
                      <p className='textsm text-gray-600'><strong>Amenities</strong>{selectedProperty.amenities.join(',')}</p>
                      <button onClick={() => alert('Contact agent or proceed to rent')} className='mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-gren-700 transition text-sm'>Contact Agent</button>
                </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
        
        <section className='bg-white py-12'>
            <div className='max-w-6xl mx-auto px-4 text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-700 font-roboto mb-4'>Popular Cities</h2>
              <p className='text-gray-600 font-raleway mb-8'>Explore top Locations with high demand properties</p>

              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                {[
                  { name: 'Lagos', image: lagosImg },
                  { name: 'Abuja', image: abujaImg },
                  { name: 'Ibadan', image: ibadanImg },
                  { name: 'Enugu', image: enuguImg },      
                ].map((city, index) => (
                  <div key={index} className='bg-gray-100 rounded-lg overflow-hidden shadow-sm'>
                    <img src={city.image} alt={city.name} className='w-full h-48 object-cover' />
                    <h3 className='text-lg font-semibold text-gray-800 p-4'>{city.name}</h3>
                  </div>
                ))
                }
              </div>
            </div>
        </section>

        <section className='bg-gray-50 py-16'>
              <div className='max-w-6xl mx-auto px-4 py-12 text-center'>
                <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-12 font-roboto'>What our clients say</h2>
                <div className='grid gap-8  sm:grid-cols-2 lg:grid-cols-3'>
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <p className='text-gray-600 mb-4 font-raleway'>
                      "I found my dream apartment within a day! this platform made the process so easy and stress-free."
                    </p>
                    <h4 className='text-lg font-semibold font-lato text-blue-600'>Gbemisola Williams</h4>
                    <p className='text-sm text-gray-500'>Lagos, Nigeria</p>
                  </div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                    <p className='text-gray-600 mb-4 font-raleway'>
                      "After i've struggled to find a place for months, i finally found my perfect home here. highly recommend!"
                    </p>
                    <h4 className='text-lg font-semibold font-lato text-blue-600'>Uche Okocha</h4>
                    <p className='text-sm text-gray-500'>Property owner</p>
                  </div>
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <p className='text-gray-600 mb-4 font-raleway'>
                     "This is the best property website in africa. Fantastic listings and responsive Agents. I found my dream home in no time!"
                    </p>
                    <h4 className='text-lg font-semibold font-lato text-blue-600'>Waziri Aboubakar</h4>
                    <p className='text-sm text-gray-500'>Real Estate Investor</p>
                  </div>
                </div>
                </div>
        </section>

        <section className='bg-white py-16'>
                <div className='max-w-6xl mx-auto px-4 text-center'>
                  <h2 className='text-3xl sm:text-4xl font-bold mb-10 font-oswald'>Browse by property type</h2>
                  <div className='grid grid-cols-2 sm:grid-cols-3 lg:cols-6 gap-6'>
                    {[
                      { label: 'Apartments', icon: <FaBuilding  size={32} className='text-blue-600 mx-auto mb-3'/> },
                      { label: 'Villas', icon: <FaHome size={32} className='text-blue-600 mx-auto mb-3' /> },
                      { label: 'Cottages', icon: <FaTree size={32} className='text-blue-600 mx-auto mb-3'/> },
                      { label: 'office', icon: <FaCity size={32} className='text-blue-600 mx-auto mb-3'/> },
                    ].map((category, index) => (
                      <div key={index} className='bg-gray-100 rounded-lg p-4 flex flex-col item-center shadow-sm hover:shadow-md transition'>
                        {category.icon}
                        <h3 className='text-lg font-semibold text-gray-800'>{category.label}</h3>
                      </div>
                    ))}
                  </div>
                </div>
        </section>

        <section className='bg-blue-600 text-white py-16'>
              <div className='max-w-4xl mx-auto px-4 text-center space-y-4'>
                <h2 className='text-3xl sm:text-4xl font-bold font-oswald'>Ready to find your dream home?</h2>
                <p className='text-lg font-raleway'>Get access to the best properties in top locations across Nigeria</p>
                <button className='mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg cursor-pointer hover:bg-gray-100 transition'>Explore Properties</button>
              </div>
        </section>


        <section className='bg-gray-200 py-16'>
          <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-10 font-oswald'>Why Choose Us</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2 font-lato text-blue-600'>Verified Listings</h3>
              <p className='text-gray-600'>Every property is verified for accuracy and aunthencity</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2 font-lato text-blue-600'>Trusted Agents</h3>
              <p className='text-gray-600'>Work with professionals agents to find your dream home</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2 font-lato text-blue-600'>Affordable Prices</h3>
              <p className='text-gray-600'>We list properties at competitve and fair market prices</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2 font-lato text-blue-600'>Nationwide Coverage</h3>
              <p className='text-gray-600'>Search properties across Nigeria, no matter where you are</p>
            </div>
          </div>
          </div>
        </section>
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <div className='flex flex-col sm:flex-row item-center justify-center px-16 gap-4'>
                  <p className="text-sm">&copy; {new Date().getFullYear()} Real Estate App. All rights reserved.</p>
                  <div className='flex space-x-4'>
                    <a href="#" className="text-sm hover:text-blue-400">Privacy Policy</a>
                    <a href="#" className="text-sm hover:text-blue-400">Terms of Service</a>
                    <a href="#" className="text-sm hover:text-blue-400">Contact Us</a>
                  </div>
              </div>
            </div>
        </footer>
    </Layout>
  )
}

export default App