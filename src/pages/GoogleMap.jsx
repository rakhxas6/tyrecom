function GoogleMap() {
  return (
    <div className="w-full h-[400px] space-y-10">
      <div className="headingContainer">
        <h2 className="font-thin text-3xl relative">
          Our Location
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded"></span>
        </h2>
      </div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.095558173882!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1692070588762!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
