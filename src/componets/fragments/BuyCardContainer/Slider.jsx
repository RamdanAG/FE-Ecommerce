import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/SliderImage.css';

const Slider = ({ slides }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.querySelector('.slider-container');
    const handleWheel = (event) => {
      const delta = Math.sign(event.deltaY); // Deteksi arah scroll
      const slideHeight = window.innerHeight;
      const currentScroll = container.scrollTop;

      const targetScroll =
        Math.round(currentScroll / slideHeight) * slideHeight + delta * slideHeight;

      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    };

    container.addEventListener('wheel', handleWheel);
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <section
          key={index}
          className="slide"
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
          onClick={() => navigate(slide.link)}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Slider;
