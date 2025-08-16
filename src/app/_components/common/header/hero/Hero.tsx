import React from "react";
import { Logo } from "./Logo";
import { Text } from "./Text";

export const Hero = () => {
  return (
    <main className="flex flex-row w-full min-h-[140px] h-[140px] md:h-[220px]">
      {/* القسم البرتقالي */}
      <div className="basis-2/3 md:basis-2/3 flex items-center justify-center p-2 md:p-4 h-full">
        <Text />
      </div>

      {/* قسم اللوجو - متجاوب ومحسن */}
      <div className="basis-1/3 md:basis-1/3 flex items-center justify-center bg-white h-full p-1 md:p-2">
        <div className="w-full h-full flex items-center justify-center max-w-[200px] md:max-w-[300px]">
          <Logo
            src="/logo/logo.png"
            className="w-full h-full object-contain max-h-[120px] md:max-h-[200px]"
          />
        </div>
      </div>
    </main>
  );
};