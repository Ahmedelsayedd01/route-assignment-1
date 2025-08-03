import Image from '../../assets/images/person.svg'
import SectionTitle from '../../components/SectionTitle';
const LandingPage = () => {
  return <div className="w-full bg-secondary min-h-[85vh] flex flex-col items-center justify-center gap-y-2">
    <img src={Image} width={'250px'} alt="person" />
    <SectionTitle text={'start Framework'} color={'white'} />
    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
  </div>;
};

export default LandingPage;
