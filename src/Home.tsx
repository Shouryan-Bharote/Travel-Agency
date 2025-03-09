import Home_Hero_Img from './assets/images/Home_Hero_background.jpg'
import ImageComponent from './components/Image'; 

const images = [
    { src: './assets/images/pexels-alok-kumar-273007-15031440.jpg', title: 'Beautiful Landscape' },
    { src: './assets/images/moscow-4294240.jpg', title: 'Moscow City' },
    { src: './assets/images/ai-generated-9106987.jpg', title: 'AI Generated Art' },
];


                                            
const HomeTab = () => {
    return (
      <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${Home_Hero_Img})` }}>
        
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-Gunmetal_Gray">Explore the World</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-Golden_Sand">Join US</h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl">Chasing sunsets, exploring the wild,
             and creating stories that last a lifetime—your adventure starts here</p>
          <button className="mt-4 px-6 py-2 bg-Golden_Sand hover:bg-yellow-600 text-black font-semibold rounded-lg">
            Enquire Now
          </button>
        </div>
      </div>
 
      {/* Hero Section */}
      <div className="w-full h-[30vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-Golden_Sand">Best Destinations</h1>
        <h3 className="text-1xl md:text-2xl">Discover Luxury</h3>
        <h2 className="f">Explore the World with our Tour packages created specially for you</h2>
      </div>
      {/* Best Tours */}
      <div className="grid-flow-row w-full h-[30vh]">
        <ImageComponent images={images} />


      </div>
      </>
    );
  };

export default HomeTab;
