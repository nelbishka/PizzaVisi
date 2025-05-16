import { useEffect } from "react";
import '../App.css'; // custom CSS

const Testimonials = () => {
  useEffect(() => {
    // Prevent loading the script more than once
    if (!document.querySelector('script[src="https://apps.elfsight.com/p/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://apps.elfsight.com/p/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Customers Say</h2>
        <p className="testimonials-subtitle">
          Take a look at our customer feedback to get a better view of our business.
        </p>

        <div
          className="elfsight-app-2a605832-6c4a-4cb5-92f2-3d82444e45b0"
          data-elfsight-app-lazy
        ></div>

        <div className="button-container">
          <a
            href="https://www.google.com/maps/place/Pica+%22Visi%22/@40.7041331,19.951982,17z/data=!4m8!3m7!1s0x135a996ef43c9c5d:0x9707efb81fb3c899!8m2!3d40.7041331!4d19.9545569!9m1!1b1!16s%2Fg%2F11j8m2nf_h?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D&review=1"
            target="_blank"
            rel="noopener noreferrer"
            className="review-button"
          >
            Leave Us a Google Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
