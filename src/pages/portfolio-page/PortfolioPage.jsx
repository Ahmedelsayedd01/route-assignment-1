import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle'; // Assuming this component exists as per your code
import { FaPlus, FaTimes } from 'react-icons/fa';

// Assuming these image paths are correct
import Project1 from '../../assets/images/port1.png';
import Project2 from '../../assets/images/port2.png';
import Project3 from '../../assets/images/port3.png';

const projects = [
  { id: 1, image: Project1, alt: 'Project 1' },
  { id: 2, image: Project2, alt: 'Project 2' },
  { id: 3, image: Project3, alt: 'Project 3' },
  { id: 4, image: Project1, alt: 'Project 4' },
  { id: 5, image: Project2, alt: 'Project 5' },
  { id: 6, image: Project3, alt: 'Project 6' },
];

const PortfolioPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start bg-white min-h-screen">
      <div className="pt-4 ">
        <SectionTitle text={'portfolio component'} color={'primary'} />
      </div>

      {/* Projects Grid */}
      <div className="w-10/12 mx-auto  pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => handleOpenModal(project.image)}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <FaPlus size={100} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#c2dbfe2d]  backdrop-blur-sm p-4 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-2xl bg-white p-2 rounded-lg shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="cursor-pointer absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <img
              src={selectedImage}
              alt="project"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
