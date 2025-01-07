import React from "react";
interface MapProps {
  width: number;
  radius?: number;
  className?: string;
}
const MapComponent: React.FC<MapProps> = ({ width, radius, className }) => {
  return (
    <>
      {/* map */}
      <div className="w-full mx-auto relative">
        <div style={{ maxWidth: `${width}%` }} className="mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d57937.812658991395!2d46.776295!3d24.825799!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ5JzMyLjkiTiA0NsKwNDYnMzQuNyJF!5e0!3m2!1sen!2sus!4v1736268648584!5m2!1sen!2sus"
            style={{ borderRadius: `${radius}` }}
            className={className}
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
