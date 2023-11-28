import React from 'react';
import mernapp from '../assets/mernstack.webp';
import amazon from '../assets/amazon.webp';
import imagefinder from '../assets/imagefinder.jpg';
import newsapi from '../assets/javascriptnews.jpg';

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          child: 'E-Food Delivery website',
          src: mernapp,
          href:"https://github.com/chinmayaacharya/E-Food-Delivery-Website"
        },
        {
          id: 2,
          child: 'API based News Website',
          src: newsapi,
          href:"https://github.com/chinmayaacharya/9-news-"
        },
        {
          id: 3,
          child: 'Image Finder Website',
          src: imagefinder,
          href:"https://github.com/chinmayaacharya/Image-Finder"
        },
        {
          id: 4,
          child: 'Amazon Clone',
          src: amazon,
          href:"https://github.com/chinmayaacharya/Amazon-Clone"
        },
      ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20">
          {portfolios.map(({ id, src,child,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                height={54}
                width={310}
              />
              <div className="flex justify-center font-bold mt-5">
                <h3>{child}</h3>
                </div>
                <div className="flex items-center justify-center">
                
                <a href={href} download className="px-6 py-3 w-1/2 m-2 duration-200 hover:scale-105 text-center" > code </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
