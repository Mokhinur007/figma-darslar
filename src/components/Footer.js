
function Footer() {
  return (
    <div>
      <footer className='bg-[#1C1E53] h-[350px] py-[100px] px-[150px] flex gap-[400px]'>
        <div className='text-[white]'>
          <a className='text-4xl font-extrabold '>Finsweet</a>
          <p className='mt-[20px] mb-[40px]'>
          We are always open to discuss your project and <br />
           improve your online presence.
          </p>

          <div className='w-[450px] h-[100px] bg-[#FCD980]
           flex text-[black] justify-between px-[20px] py-[20px]'>
            <div>
              <p className='text-[20px]'>
              Email me at
              </p>
              <p>
              contact@website.com
              </p>
            </div>
            <div>
              <p  className='text-[20px]'>
              Call us
              </p>
              <p>
              0927 6277 28525
              </p>
            </div>
          </div>
        </div>
       
        <div className='text-[white]'>
          <a className='text-4xl font-extrabold '>Lets Talk!</a>
          <p className='mt-[20px]'>
          We are always open to discuss your project, <br />
           improve your online presence and help with your <br />
            UX/UI design challenges.
          </p>

          {/* <img  className='mt-[20px]' src={ImgSeven} alt="" /> */}
        </div>
      </footer>
    </div>
  )
}

export default Footer;
