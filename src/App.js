import "bootstrap/dist/css/bootstrap.min.css";
import myPic from "./assets/mainImage.jpg";
import linkedInLogo from "./assets/linkedInLogo.png";
import githubLogo from "./assets/githubLogo.png";

const App = () => {
  return (
    <div className="d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <nav className="nav nav-masthead justify-content-center float-md-start">
              <a
                className="link-light mx-3 link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                href="#"
              >
                Home
              </a>
              <a
                className="link-light mx-3 link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                href="#"
              >
                Experience
              </a>
              <a
                className="link-light mx-3 link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                href="#"
              >
                Projects
              </a>
              <a
                className="link-light mx-3 link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                href="#"
              >
                Contact
              </a>
            </nav>
            <div class="navbar-brand float-md-end mb-0">
              <a
                className="mx-2"
                href="https://www.linkedin.com/in/ghulam-ahmed-b79b13252/"
              >
                <img src={linkedInLogo} alt=".." width={30} height={24} />
              </a>
              <a className="mx-2" href="https://github.com/ghxlam">
                <img src={githubLogo} alt=".." width={30} height={24} />
              </a>
            </div>
          </div>
        </header>
        <main className="px-3 my-auto">
          <img
            src={myPic}
            alt="My pic"
            className="img-fluid rounded-circle shadow"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h1>Ghulam Ahmed</h1>
          <p className="lead">
            Computer Science graduate from New Jersey Institute of Technology
            with a passion for Full-Stack Engineering.
          </p>
          <p className="lead">
            <a
              href="#"
              className="btn btn-lg btn-light fw-bold border-white bg-white"
            >
              See Resume
            </a>
          </p>
        </main>
        <footer className="mt-auto text-white-50">
          <p>Portfolio for Ghulam Ahmed</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
