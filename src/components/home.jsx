import '../styles/home.css';
import homePhoto from '../assets/home-photo.jpg';
function Home() {
  return (
        <>
<div className=' flex-col sm:flex-row flex text-white sm:justify-around justify-between items-center'>
    <div className="">
      <h1 className="title-text lg:text-6xl md:text-5xl text-4xl md:mb-5">Hello</h1>
      <div className='flex'>
        <hr className='w-15 md:w-25 md:border-4  border-2 mt-7 md:mt-10 border-blue-400 '/>
      <div className='intro-text text-3xl md:text-4xl lg:text-5xl'>&nbsp; I'm Aniket</div>
      </div>
      <div className='title-text lg:text-6xl md:text-5xl text-4xl mt-5 md:mt-7'>Web Developer</div>
      
      <button className='md:text-xl md:mt-10 mt-5 md:p-2 p-1 bg-gray-950 hover:bg-gray-700 border-2 border-blue-400'>
      <a target="_blank" className='no-underline text-white'>
        View Resume
      </a>
      </button>

    <button className='md:text-xl md:mt-10 mt-5 ml-3 p-1 md:p-2 bg-white hover:bg-gray-700  border-2 border-blue-400 text-gray-950'>
      <a target='_blank' href='https://github.com/aniket-ah10'>Github</a></button>
    </div>
          <div className='mt-7'>
    <img src={homePhoto}  className='w-70 md:w-70 lg:w-100 md:rounded-3xl rounded-2xl shadow-lg shadow-orange-200'></img>
    </div>
</div>
    </>
  )
}

export default Home