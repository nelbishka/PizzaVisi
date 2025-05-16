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
            href="https://www.google.com/search?q=pizza+visi&sca_esv=9a5e0d52e8e6d667&sxsrf=AHTn8zrJA9XGq5c47y5ynLHHiwUVE009hw%3A1747399823737&source=hp&ei=jzQnaILfKp63i-gPm_rvgA0&iflsig=ACkRmUkAAAAAaCdCn0-HNnsw6QdHZEztwoJ_g2XZs87Y&ved=0ahUKEwjC4pbOg6iNAxWe2wIHHRv9G9AQ4dUDCBk&uact=5&oq=pizza+visi&gs_lp=Egdnd3Mtd2l6IgpwaXp6YSB2aXNpMgQQIxgnMgoQIxiABBgnGIoFMhEQLhiABBiRAhjHARiKBRivATIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOYIUABYsgdwAHgAkAEAmAGWAaABrAqqAQQwLjEwuAEDyAEA-AEBmAIKoALXCsICCxAAGIAEGJECGIoFwgILEAAYgAQYsQMYgwHCAgQQABgDwgIOEAAYgAQYsQMYgwEYigXCAhAQABiABBixAxhDGIMBGIoFwgIKEAAYgAQYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAgoQLhiABBhDGIoFwgIQEAAYgAQYsQMYQxjJAxiKBcICCxAAGIAEGJIDGIoFwgINEC4YgAQYsQMYQxiKBcICChAAGIAEGBQYhwKYAwDiAwUSATEgQJIHBDAuMTCgB61vsgcEMC4xMLgH1wo&sclient=gws-wiz&lqi=CgpwaXp6YSB2aXNpSO_vqLGisICACFoWEAAQARgBIgpwaXp6YSB2aXNpMgJzcZIBEHBpenphX3Jlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnFjMlpVTVdaUkVBRaoBMxABMh8QASIbFH86b66u4GRuciR3RztH5MLwYOvPHNh7xycTMg4QAiIKcGl6emEgdmlzafoBBAgAEAw#lkt=LocalPoiReviews&rlimm=10882930598648989849&lrd=0x135a996ef43c9c5d:0x9707efb81fb3c899,3,,,,"
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
