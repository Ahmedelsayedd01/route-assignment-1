import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

const ContactPage = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', { userName, userAge, userEmail, userPassword });

    setUserName('');
    setUserAge('');
    setUserEmail('');
    setUserPassword('');
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start bg-white min-h-screen pt-2">
      <div className="pb-16">
        <SectionTitle text={'conatct section'} color={'primary'} />
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-3xl px-4 space-y-12">

        {/* Username field */}
        <div className="relative shadow rounded-2xl">
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleInputChange(setUserName)}
            className="relative z-20 w-full p-3  rounded-xl bg-white appearance-none focus:outline-none peer"
            placeholder="userName"
          />
          <label
            htmlFor="userName"
            className={`
              absolute left-0 top-0 z-10 text-2xl text-gray-500 transition-all duration-300
              ${userName.length > 0 && 'transform -translate-y-10 -translate-x-4 scale-75'}
              text-secondary
            `}
          >
            userName :
          </label>
        </div>

        {/* User Age field */}
        <div className="relative shadow rounded-2xl">
          <input
            type="number"
            id="userAge"
            value={userAge}
            onChange={handleInputChange(setUserAge)}
            className="relative z-20 w-full p-3  rounded-xl bg-white appearance-none focus:outline-none peer"
            placeholder="userAge"
          />
          <label
            htmlFor="userAge"
            className={`
              absolute left-0 top-0 z-10 text-2xl text-gray-500 transition-all duration-300
              ${userAge.length > 0 && 'transform -translate-y-10 -translate-x-4 scale-75'}
              text-secondary
            `}
          >
            userAge :
          </label>
        </div>

        {/* User Email field */}
        <div className="relative shadow rounded-2xl">
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={handleInputChange(setUserEmail)}
            className="relative z-20 w-full p-3  rounded-xl bg-white appearance-none focus:outline-none peer"
            placeholder="userEmail"
          />
          <label
            htmlFor="userEmail"
            className={`
              absolute left-0 top-0 z-10 text-2xl text-gray-500 transition-all duration-300
              ${userEmail.length > 0 && 'transform -translate-y-10 -translate-x-4 scale-75'}
              text-secondary
            `}
          >
            userEmail :
          </label>
        </div>

        {/* User Password field */}
        <div className="relative shadow rounded-2xl">
          <input
            type="password"
            id="userPassword"
            value={userPassword}
            onChange={handleInputChange(setUserPassword)}
            className="relative z-20 w-full p-3  rounded-xl bg-white appearance-none focus:outline-none peer"
            placeholder="userPassword"
          />
          <label
            htmlFor="userPassword"
            className={`
              absolute left-0 top-0 z-10 text-2xl text-gray-500 transition-all duration-300
              ${userPassword.length > 0 && 'transform -translate-y-10 -translate-x-4 scale-75'}
              text-secondary
            `}
          >
            userPassword :
          </label>
        </div>

        <button
          type="submit"
          className="bg-secondary cursor-pointer text-white font-medium py-3 px-6 rounded-md shadow-lg hover:bg-[#439a8b] transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
