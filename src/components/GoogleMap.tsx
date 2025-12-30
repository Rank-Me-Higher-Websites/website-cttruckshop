const GoogleMap = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full overflow-hidden rounded-xl ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.9257935339792!2d-112.13635169755655!3d33.49322600878432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b13893d753c09%3A0x3a70c3264330d275!2sCT%20Truck%20and%20Trailer%20Shop!5e0!3m2!1sen!2slt!4v1767107310223!5m2!1sen!2slt"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="CT Truck and Trailer Shop Location"
      />
    </div>
  );
};

export default GoogleMap;
