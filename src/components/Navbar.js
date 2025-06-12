import linkedInLogo from "../assets/linkedInLogo.png";
import githubLogo from "../assets/githubLogo.png";

const Navbar = () => (
  <div className="d-flex justify-content-between align-items-center">
    <nav className="nav nav-masthead justify-content-center">
      {["Home", "Experience", "Projects", "Contact"].map((section) => (
        <a
          key={section}
          href="#"
          className="link-light mx-3 link-underline-opacity-0 link-underline-opacity-100-hover"
        >
          {section}
        </a>
      ))}
    </nav>
    <div className="navbar-brand">
      <a
        className="mx-2"
        href="https://www.linkedin.com/in/ghulam-ahmed-b79b13252/"
      >
        <img src={linkedInLogo} alt="LinkedIn" width={30} height={24} />
      </a>
      <a className="mx-2" href="https://github.com/ghxlam">
        <img src={githubLogo} alt="GitHub" width={30} height={24} />
      </a>
    </div>
  </div>
);

export default Navbar;
