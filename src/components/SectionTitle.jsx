import { FaStar } from 'react-icons/fa';
const SectionTitle = ({ text, color }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-4  text-${color}`}>
      {/* Title text with responsive sizing */}
      <h2 className="text-2xl lg:text-4xl font-bold uppercase mb-4">
        {text}
      </h2>

      {/* Divider with lines and star icon */}
      <div className="flex items-center space-x-3 text-lg md:text-xl lg:text-2xl">
        <div className={`h-1 w-20 bg-${color}`}></div>
        <FaStar className={`text-${color}`} size={18} />
        <div className={`h-1 w-20 bg-${color}`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;
