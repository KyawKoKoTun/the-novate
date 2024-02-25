export default function Nav() {
    return (
      <>
        <div className="fixed z-50 top-[40px] w-full px-[20px] sm:px-[100px] md:px-[200px] overflow-hidden flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base items-center">
          <a href="#home" className="hover:bg-red-500 text-white py-2 px-4 md:px-12 rounded-lg border-4 border-solid border-red-500 shadow-md hover:shadow-lg transition duration-300 neon-glow-on-hover" style={{borderRadius: '40px'}}>Home</a>
          <a href="#about" className="hover:bg-red-500 text-white py-2 px-4 md:px-12 rounded-lg border-4 border-solid border-red-500 shadow-md hover:shadow-lg transition duration-300 neon-glow-on-hover" style={{borderRadius: '40px'}}>About</a>
          <a href="#projects" className="hover:bg-red-500 text-white py-2 px-4 md:px-12 rounded-lg border-4 border-solid border-red-500 shadow-md hover:shadow-lg transition duration-300 neon-glow-on-hover" style={{borderRadius: '40px'}}>Projects</a>
          {/* <a href="#blogs" className="hover:bg-red-500 text-white py-2 px-4 md:px-12 rounded-lg border-4 border-solid border-red-500 shadow-md hover:shadow-lg transition duration-300 neon-glow-on-hover" style={{borderRadius: '40px'}}>Blogs</a> */}
        </div>
      </>
    );
  }
  