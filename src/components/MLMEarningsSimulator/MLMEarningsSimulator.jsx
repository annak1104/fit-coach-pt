import React, { useState } from "react";

const earningsData = {
  2: 4.95,
  5: 9.95,
  10: 19.95,
  20: 39.95,
};

const validRecruits = [2, 5, 10, 20];

const MLMEarningsSimulator = () => {
  const [recruits, setRecruits] = useState(2);

  const handleNextValue = (value) => {
    const closest = validRecruits.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev,
    );
    setRecruits(closest);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-md mx-auto">
      <h2 className="font-montserrat text-2xl font-bold mb-4">
        Simulador de ganhos <br /> com o sistema de indicações
      </h2>
      <p className="font-open-sans text-lg text-gray-700 mb-4">
        Ajuste a barra para ver quanto você pode ganhar com suas indicações.
      </p>
      <input
        type="range"
        min="2"
        max="20"
        step="1"
        value={recruits}
        onChange={(e) => handleNextValue(Number(e.target.value))}
        className="w-full mb-4"
      />
      <p className="font-montserrat text-xl font-bold text-green-600">
        Indicações: {recruits}
      </p>
      <p className="font-montserrat text-3xl font-bold text-orange-500 mt-4">
        R${earningsData[recruits] || "-"}
      </p>
      <p className="italic text-gray-400 mt-3 text-xs">
        Aviso: os exemplos são apenas ilustrativos; não garantimos ganhos. Os
        resultados reais variam de acordo com seu esforço.
      </p>
    </div>
  );
};

export default MLMEarningsSimulator;
