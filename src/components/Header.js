
function Header() {
  return (
    <div>
        <header className='min-h-3 bg-sky-800	justify-between items-center text-white flex py-4 px-[90px] bg-[#1C1E53]  text-center'>
        <div>
          <a className='text-4xl font-extrabold' href="">Finsweet</a>
        </div>
       
       <div className='flex gap-10'> 
       <ul className='flex gap-10 text-center justify-center items-center text-1xl'>
          <li><a href="">Home</a></li>
          <li className="text-gray-400"><a href="">About us</a></li>
          <li className="text-gray-400"><a href="">Features</a></li>
          <li className="text-gray-400"><a href="">Pricing</a></li>
          <li className="text-gray-400"><a href="">FAQ</a></li>
          <li className="text-gray-400"><a href="">Blog</a></li>
        </ul>
        
        <div>
          <button className='rounded-3xl border-solid border-2	border-slate-300 px-7 py-3'>
            <span>Contact us</span>
          </button>
        </div>
        </div>
        </header>

    </div>
  )
}

export default Header