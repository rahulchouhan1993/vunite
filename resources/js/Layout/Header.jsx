import logo from '../assets/unitelogo.png'
export const Header = () => {
    const colors = {
      primaryGreen: 'bg-[#2E8B83]',
      accentRed: 'bg-[#D97768]'
    };
  return (
    <div className="bg-white sticky top-0 z-9">
    <header className="container m-auto bg-white py-4 flex justify-between items-center sticky top-0 z-2">
        <div className="flex items-center gap-2">
          <img src={logo} className='max-w-[180px]' />          
        </div>
        <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm lg:text-normal xl:text-[16px] font-medium text-gray-500">
          <a href="#" className="hover:text-teal-600">Home</a>
          <a href="#" className="hover:text-teal-600">Services</a>
          <a href="#" className="hover:text-teal-600">Who We Help</a>
          <a href="#" className="hover:text-teal-600">About</a>
          <a href="#" className="hover:text-teal-600">Participant</a>
          <a href="#" className="hover:text-teal-600">Make Referral</a>
          <a href="#" className="hover:text-teal-600">FAQs</a>
        </nav>
        <button className={`button bg-gr`}>REGISTER YOUR INTEREST</button>
    </header>
    </div>
  );
};
