import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from 'react-icons/fa';

const Footer = () => {
       return (
              <footer className="bg-primary text-white font-sans">
                     <div className="sm:p-26 lg:p-32">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                   <div className="flex flex-col items-center space-y-4">
                                          <h3 className="text-2xl font-bold uppercase mb-2">LOCATION</h3>
                                          <p className="text-center text-base text-gray-300">
                                                 2215 John Daniel Drive
                                                 <br />
                                                 Clark, MO 65243
                                          </p>
                                   </div>

                                   <div className="flex flex-col items-center space-y-4">
                                          <h3 className="text-2xl font-bold uppercase mb-2">AROUND THE WEB</h3>
                                          <div className="flex space-x-4">
                                                 <a
                                                        href="https://www.facebook.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-lg text-white hover:bg-white hover:text-blue-600 transition"
                                                        aria-label="Facebook"
                                                 >
                                                        <FaFacebookF />
                                                 </a>

                                                 <a
                                                        href="https://twitter.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-lg text-white hover:bg-white hover:text-blue-400 transition"
                                                        aria-label="Twitter"
                                                 >
                                                        <FaTwitter />
                                                 </a>

                                                 <a
                                                        href="https://www.linkedin.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-lg text-white hover:bg-white hover:text-blue-700 transition"
                                                        aria-label="LinkedIn"
                                                 >
                                                        <FaLinkedinIn />
                                                 </a>

                                                 <a
                                                        href="https://google.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-lg text-white hover:bg-white hover:text-gray-800 transition"
                                                        aria-label="Website"
                                                 >
                                                        <FaGlobe />
                                                 </a>

                                          </div>
                                   </div>

                                   <div className="flex flex-col items-center space-y-4 text-center">
                                          <h3 className="text-2xl font-bold mb-2">ABOUT FREELANCER</h3>
                                          <p className=" text-base text-gray-300 max-w-sm">
                                                 Freelance is a free to use, licensed Bootstrap theme created by Route
                                          </p>
                                   </div>

                            </div>
                     </div>

                     <div className="bg-third py-6 text-center text-white text-sm">
                            <p>Copyright © Your Website 2025</p>
                     </div>
              </footer>
       );
};

export default Footer;
