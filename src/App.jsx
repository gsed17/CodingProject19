import { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Explore Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;
