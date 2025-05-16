import '../App.css';

const Map = () => {
  return (
    <div className="map-wrapper">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.527370099047!2d19.951982!3d40.7041331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135a996ef43c9c5d%3A0x9707efb81fb3c899!2sPica%20%22Visi%22!5e0!3m2!1sen!2s!4v1747399929876!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
