import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import img from './img/people-working-in-front-of-computer-3182763@2x.png' 
import imgOne from './img/photo-of-people-near-wooden-table-3184418.jpg'

function App() {
  return (
    <div>
    <Header />
    
    <main>
      <h1 className='px-[200px] py-[50px] pb-[10px] min-h-3	text-[40px] font-bold text-center'>
      A UX Case Study on Creating a <br />
       Studious Environment for Students
      </h1>
      <p className=' min-h-3 text-[20px]  text-center mb-[50px]'>
      Andrew Jonson   Posted on 27th January 2021
      </p>

      <div className='px-[80px] '>
        <img className='w-[1500px] h-[500px]' src={img} alt="" />
      </div>

      <div className='px-[300px] py-[50px] '>
      <h2 className=' min-h-3	text-[40px] font-bold pb-[50px]'> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>

      <p className=' text-[gray] pb-[50px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
       in reprehenderit in voluptate velit esse cillum dolore eu fugiat
       nulla pariatur. Excepteur sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit anim id est laborum.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
      </p>
       
      <h2 className=' min-h-3	text-[40px] font-bold pb-[50px]'>
      Ut enim ad minim veniam, quis nostrud. 
      </h2>

      <p className=' text-[gray] pb-[50px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
       enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum. Ut enim ad 
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
         aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
           nulla pariatur. Excepteur sint occaecat cupidatat non proident
           , sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p className=' text-[gray] pb-[20px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <p className=' text-[gray] pb-[20px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <p className=' text-[gray] pb-[50px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>

      <p className='text-[gray] pb-[50px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat
       e velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
       occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli
       t anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation 
       ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
      </div>
      
      <div className='px-[300px] '>
        <img className='w-[850px] h-[350px]' src={imgOne} alt="" />
      </div>

      <div className='px-[300px] py-[50px] '>
      <h2 className=' min-h-3	text-[40px] font-bold pb-[50px]'>
      Ut enim ad minim veniam, quis nostrud. 
      </h2>

      <p className=' text-[gray] pb-[50px]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
       enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum. Ut enim ad 
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
         aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
           nulla pariatur. Excepteur sint occaecat cupidatat non proident
           , sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>

    </main>

    <Footer/>
    </div>
  );
}

export default App;
