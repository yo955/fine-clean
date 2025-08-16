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
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3713.1212528376395!2d39.948298485059944!3d21.46375848576433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI3JzQ5LjUiTiAzOcKwNTYnNDYuMCJF!5e0!3m2!1sar!2seg!4v1755358787564!5m2!1sar!2seg"
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
