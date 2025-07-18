const Card = ({
  title,
  company,
  date,
  description,
  image,
  link,
  linkLabel,
}) => (
  <div className="mb-4">
    <div className="card mb-4 shadow-sm h-100" style={{ maxWidth: "100%" }}>
      <div className="row g-0 h-100">
        <div className="col-md-4">
          <img src={image} alt={title} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {company} • {date}
            </h6>
            <p className="card-text">
              {description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                {linkLabel || "Learn More"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
