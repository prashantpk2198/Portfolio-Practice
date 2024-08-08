import profile from "/src/assets/profile.png";
import resume from "/src/assets/Resume.pdf";
export default function HeroSection() {
  return (
    <>
      <div id="hero-section">
        <div id="hero-text" className="item1">
          <p className="name-role">Hi, I am Prashant</p>
          <p className="name-role">A Software Developer</p>
          <p className="description">
            A passionate and dedicated person with a strong interest in software
            development, I am honing my skills in front-end and back-end
            technologies. In addition to my technical pursuits, I enjoy
            traveling, exploring new things. My goal is to leverage my skills
            and experience to become a successful entrepreneur in the future.
          </p>
          <a href={resume} download="Prashant Resume"><button id="download">Download Resume</button></a>
        </div>
        <div className="item2">
          <img id="hero-img"
            src={profile}
            alt="A good looking man with a smile"
          />
        </div>
      </div>
    </>
  );
}
