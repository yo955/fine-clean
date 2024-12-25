import React from "react";

interface TextProps {
  className: string;
}
export const Text: React.FC<TextProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="text flex justify-between items-center h-full align-middle ">
        <div className="arabic">
          <h1 className="text-[100px]">أسادكو</h1>
        </div>
        <div className="english">
          <h1 className="text-[100px]">Asadco</h1>
        </div>
      </div>
    </div>
  );
};
