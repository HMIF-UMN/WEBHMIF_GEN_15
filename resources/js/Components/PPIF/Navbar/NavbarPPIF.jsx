import React, { useState } from 'react';

const Navbar = ({activeMenuItem, setActiveMenuItem}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
    setIsOpen(false);
  };

  const menuItems = [
    { text: 'Home', link: '#home' },
    { text: 'Tentang', link: '#aboutPadi' },
    { text: 'Kegiatan', link: '#timeline' },
    { text: 'Kontak', link: '#joinKomunitas' },
  ];

  return (
    <nav
      className={`bg-white lg:bg-black ${isOpen ? '!bg-opacity-80 py-4 mt-0 mx-0 h-64' : '!bg-opacity-20 lg:!bg-opacity-50 h-20'} py-4 fixed z-[1000] w-full overflow-hidden transition-all`}
      id='navbar'
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
            <div className="logo absolute left-0 top-0 items-center justify-center rounded-md">
              <svg width="90" height="79" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H141V100H0V0Z" fill="url(#paint0_linear_20_5513)"/>
                  <defs>
                    <linearGradient id="paint0_linear_20_5513" x1="-45.0522" y1="88.6363" x2="157.907" y2="-17.17" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6A085B"/>
                      <stop offset="1" stopColor="#ED006C"/>
                    </linearGradient>
                  </defs>
              </svg>
            </div>
            <div className="logo absolute left-0 items-center justify-center rounded-md top-0 ml-3">
                <svg width="60" height="60" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.5452 54.7492H45.389V54.9071H45.5452V54.7492Z" fill="#E0E4EB"/>
                    <path d="M51.2271 51.9831C51.2271 53.1307 50.7718 54.2314 49.9613 55.0429C49.1508 55.8544 48.0514 56.3103 46.9052 56.3103H44.7761L47.2729 51.9831H51.2271Z" fill="#E0E4EB"/>
                    <path d="M25.5593 23.8975L18.9953 19.3174C18.9195 19.262 18.8436 19.2088 18.7678 19.1534L18.0384 18.622L25.5593 23.8975Z" fill="#F0F2F5"/>
                    <path d="M34.8634 19.2746L34.8491 19.2851L34.8176 19.2423L34.8634 19.2746Z" fill="#F0F2F5"/>
                    <path d="M41.5734 24.1351H41.3148L41.4028 24.0121L41.4869 24.0729L41.5734 24.1351Z" fill="#F0F2F5"/>
                    <path d="M59.2908 24.1358H59.2587L59.2796 24.1205L59.2908 24.1358Z" fill="#F0F2F5"/>
                    <path d="M41.7159 47.4097L41.7332 47.457L41.7489 47.4285C41.7377 47.4225 41.7279 47.4157 41.7159 47.4097Z" fill="#F0F2F5"/>
                    <path d="M71.025 30.7589L62.275 18.3616H56.9377L50.7338 9.57199H25.4565L25.3458 9.6555L21.2005 12.7818L20.9063 13.0095L20.4271 13.3709L19.0706 14.392H19.0638L19.0001 14.4383L18.8697 14.537L16.8035 16.1001L16.6844 16.1927L15.6987 16.9314L17.6701 18.3616L18.0356 18.6258L25.5543 23.8975L25.7992 24.0729L25.8864 24.1351H41.315L41.403 24.0121L41.4864 24.0729L41.5736 24.1351H49.2674L48.3461 24.7873L49.3902 24.0729H59.289V24.1351L64.0273 30.8485L59.1381 37.6149H28.0883L24.05 44.6152C23.2858 45.9416 23.079 47.5176 23.4751 48.9967C23.8713 50.4757 24.8379 51.7366 26.1624 52.5022L31.417 43.3922H62.0862L63.9818 40.767L71.1456 30.8492L71.025 30.7589ZM34.8177 19.2423L34.8639 19.2749L34.8495 19.2856L34.8177 19.2423ZM26.8501 16.1229L27.9496 15.3455H47.7471L49.8755 18.3616H27.7183L27.0897 17.8712L25.9304 16.9678L25.8007 16.8661L26.8501 16.1229Z" fill="#F0F2F5"/>
                    <path d="M34.8634 19.2746L34.8491 19.2851L34.8176 19.2423L34.8634 19.2746Z" fill="#E0E4EB"/>
                    <path d="M41.5734 24.1351H41.3148L41.4028 24.0121L41.4869 24.0729L41.5734 24.1351Z" fill="#E0E4EB"/>
                    <path d="M45.5452 54.7492H45.389V54.9071H45.5452V54.7492Z" fill="#E0E4EB"/>
                    <path d="M44.1524 46.8456L36.0885 60.8326C36.7443 61.2123 37.4684 61.4588 38.2194 61.5581C38.9705 61.6573 39.7337 61.6073 40.4654 61.4109C41.1971 61.2145 41.883 60.8756 42.4837 60.4136C43.0845 59.9516 43.5884 59.3755 43.9666 58.7183L45.3542 56.311L47.851 51.9837L48.3174 51.1744H48.8011C49.9474 51.1744 51.0467 50.7185 51.8572 49.907C52.6677 49.0955 53.1231 47.9948 53.1231 46.8472L44.1524 46.8456ZM45.5445 54.9073H45.3928V54.7493H45.5445V54.9073Z" fill="#E0E4EB"/>
                    <path d="M45.5452 54.7492H45.389V54.9071H45.5452V54.7492Z" fill="#E0E4EB"/>
                    <path d="M56.9376 18.3616H49.8754L47.747 15.3455H27.9494L26.85 16.1229L25.8006 16.8661L25.9302 16.9678L27.0896 17.8712L27.7181 18.3616H17.6753L15.7016 16.9314L16.6805 16.1927L16.8033 16.1001L18.8695 14.54L18.9999 14.4413L19.0636 14.395L19.0704 14.3912L20.4269 13.3671L20.9061 13.0057L21.2003 12.7818L25.3456 9.6555L25.4563 9.57123H50.7337L56.9376 18.3616Z" fill="url(#paint0_linear_20_79)"/>
                    <path d="M59.2889 24.0729V24.1352L59.2783 24.1207L59.2586 24.1352L50.479 30.3482L47.446 32.4936L47.4384 32.4389L45.3457 33.9224H24.0559L11.7687 55.2277H30.5934L33.8713 49.5415C34.6318 48.22 35.8839 47.2538 37.354 46.854C38.824 46.4542 40.3923 46.6535 41.716 47.4082L41.7335 47.4561L35.459 58.3395V58.3775L33.9426 61.0027H1.77966L5.10984 55.2277L19.2472 30.7141L20.7257 28.1504H43.5965L48.3461 24.7903L49.3901 24.0759L59.2889 24.0729Z" fill="#F0F2F5"/>
                    <path d="M41.5734 24.1351H41.3148L41.4028 24.0121L41.4869 24.0729L41.5734 24.1351Z" fill="#F0F2F5"/>
                    <defs>
                        <linearGradient id="paint0_linear_20_79" x1="26.2972" y1="6.32274" x2="47.6557" y2="27.655" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F0F2F5"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
        <div className="hidden md:flex space-x-12 mx-auto">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`text-white text-base lg:text-lg ${
                activeMenuItem === index ? '' : 'hover:text-blue-500'
              }`}
              onClick={() => handleMenuItemClick(index)}
            >
              {item.text}
              {activeMenuItem === index && (
                <span
                  className="block bg-blue-500"
                  style={{
                    content: '',
                    display: 'block',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-50deg)',
                    marginTop: '5px',
                    marginBottom: '2px',
                    width: '8px',
                    height: '8.16px',
                    backgroundColor: '#01CFFE',
                  }}
                ></span>
               )}
            </a>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            className={`focus:outline-none ${isOpen ? 'text-black mr-5' : 'text-white'} mt-2 mr-8`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center font-bold">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.link}
                className={`block text-black ${
                  activeMenuItem === index ? 'hover:text-blue-500' : 'hover:text-blue-500'
                }`}
                onClick={() => handleMenuItemClick(index)}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
