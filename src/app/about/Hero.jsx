const Hero = () => {
  return (
    <div
      className="py-[10px] sm:mt-[1px] mt-[100px]"
      style={{
        backgroundImage: 'url("/luzo_partners.jpg")', // Replace with your image URL
        backgroundSize: 'contain', // Ensure the entire image is visible
        backgroundRepeat: 'no-repeat', // Prevent tiling of the image
        backgroundPosition: 'center', // Center the image
        width: '100%', // Full width of the viewport
        height: '80vh', // Full height of the viewport
      }}
    >
      {/* <h1 className="text-white text-center mx-auto sm:text-[40px] sm:max-w-[60%] text-[30px] font-bold">Luxury you aspire</h1> */}
    </div>
  );
};

export default Hero;





