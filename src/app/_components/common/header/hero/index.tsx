import React from "react";
import { Logo } from "./Logo";
import { Text } from "./Text";
export const Hero = () => {
  return (
    <main className="grid grid-cols-6">
      <Text className="bg-green-400 col-span-3 text-center" />
      <Logo
        src="/logo/asadco-logo.png"
        className="bg-yellow-600 flex justify-center items-center w-full h-full p-10 bg-contain"
      />
      <div className="bg-black col-span-2"></div>
    </main>
  );
};
