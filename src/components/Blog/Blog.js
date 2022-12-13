import React from 'react';

const Blog = () => {
    return (
        <div>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
         
          </p>
          <h2
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            What is the purpose of react router?
          </h2>
          <p className="mb-5 text-gray-700">
           The main theme of react router is  navigating one page to another without refreshing in a word client side routing. It increases the user experience.
          </p>
         
        </div>
        
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
         
          </p>
          <h2
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        What is useRef in react? 
          </h2>
          <p className="mb-5 text-gray-700">
           useRef is a react hook. We can't declare it in the top level of any functional component.
           We must need a functional component for using useRef() hook.
          </p>
         
        </div>

        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
         
          </p>
          <h2
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            How does context APi work ? 
          </h2>
          <p className="mb-5 text-gray-700">
            Context api used for preventing props drilling. Firstly we declare a context in the parent and pass data and can get data by using react hook. useContext();
          </p>
         
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default Blog;