import myPic from "../assets/mainImage.jpg";

const Hero = () => (
  <main className="px-3 my-auto text-center">
    <img
      src={myPic}
      alt="My pic"
      className="img-fluid rounded-circle shadow"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
    <h1>Ghulam Ahmed</h1>
    <p className="lead">Software Engineer | Full-Stack | CS @ NJIT</p>
    <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">
      See Resume
    </a>
  </main>
);

export default Hero;
