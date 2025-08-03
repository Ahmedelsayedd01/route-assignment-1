import SectionTitle from "../../components/SectionTitle"

const AboutPage = () => {
  return (
    <div className="w-full bg-secondary min-h-[85vh] flex flex-col items-center justify-center gap-y-2">
      <SectionTitle text={'about component'} color={'white'} />
      <div className="w-3/4 flex flex-col lg:flex-row items-center justify-center text-white text-sm leading-6 gap-2">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  )
}

export default AboutPage