

const Hero = () => {
  return (
    <main className="flex  h-96 ">
      <div className="w-6/12 bg-white mt-8 flex justify-center  flex-col items-center">
        <h1 className=" text-blue-800 font-bold text-left">Governor Sindh</h1>
        <h1 className="text-blue-900">Kamran Khan Tessori</h1>
        <h1 className="font-light text-blue-500 mt-4">
          Certfified cloud <br /> Applied Generative Ai <br />
          Engineer(GenEng)
        </h1>
        <p className="mt-4 mb-2">Earn up to $5,000/ month</p>
        <p>Now admissions are open in karachi</p>
        <button className="bg-blue-950 text-white p-2 w-46 mt-2">
          Apply Now
        </button>
      </div>
      <div className=" bg-black h-96 w-6/12 ">
      <img
        className="w-full h-full object-cover"
        src="./R.png"
        alt="hero"
      />
      </div>
    </main>
  );
}

export default Hero
