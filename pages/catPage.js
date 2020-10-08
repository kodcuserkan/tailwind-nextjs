import React from "react";

function About() {
  return (
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12"
          src="https://media.istockphoto.com/photos/kitten-and-the-owner-picture-id1170736928?b=1&k=6&m=1170736928&s=170667a&w=0&h=9JMxhYdkKToh2S5q9J7D3m57ncbl9uWe5NwOS4lMLvM="
          alt="Tekir Kedi"
        />
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900 leading-tight">Kediniz</h4>
        <p className="text-base text-gray-600 leading-normal">
          Tekir Kedi!
        </p>
      </div>
    </div>
  );
}

export default About;
