import "../css/Card.css";

const Card = ({
  title,
  company,
  date,
  description,
  image,
  link,
  linkLabel,
  pdfLink,
  pdfLinkLabel,
}) => (
  <div className="mb-4">
    <div
      className="card mb-4 shadow-sm h-100 border-0"
      style={{ maxWidth: "100%", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="row g-0 h-100">
        <div className="col-md-4">
          <div className="card-img-wrapper">
            <img
              src={image}
              alt={title}
              className="card-img-custom rounded-start"
            />
          </div>
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
                className="btn btn-sm btn-outline-primary me-2"
              >
                {linkLabel || "Learn More"}
              </a>
            )}

            {pdfLink && (
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-success"
              >
                {pdfLinkLabel || "View PDF"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
