import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="h-96 bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1200x400')",
      }}
    >
      <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
      <p className="mt-2 text-lg">
        The best prices for over 2 million properties worldwide.
      </p>
    </section>
  );
};

export default Hero;