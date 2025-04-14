import { useState } from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="remove-btn" onClick={() => onRemove(id)}>
  Remove Tour
</button>

      </div>
    </div>
  );
}

export default TourCard;
