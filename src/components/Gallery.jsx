import { useEffect, useState } from 'react';
import TourCard from './TourCard';

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      const res = await fetch('https://course-api.com/react-tours-project');
      const data = await res.json();
      setTours(data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>Something went wrong. Please Try again later.</p>;

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;
