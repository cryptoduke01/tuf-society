import inspoImage from '../assets/inspo.jpg'
const Hero = () => {
    return (
      <header className="bg-black text-white">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-8 py-20 md:py-32">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">
              Welcome to TUF™️ Society
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              The Uncalled Family, a community built for collaboration, growth, and
              thriving in Web3.
            </p>
            <div className="space-x-4">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-400">
                Explore Now
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 hover:text-black">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={inspoImage}
              alt="Community Art"
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>
    );
  };
  
  export default Hero;