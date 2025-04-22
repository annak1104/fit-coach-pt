import React from "react";

import telegram from "../../assets/telegram.svg";

const levels = {
  "Ganhar massa muscular": "Construtor de Força",
  "Perder peso": "Definido & Enxuto",
  "Manter a forma": "Mestre da Resistência",
};

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        Nenhum resultado disponível. Por favor, complete o quiz.
      </p>
    );
  }

  const userGoal = answers[0].title;

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Seu plano FitCoach: {userGoal} e dinheiro enquanto treina! 💪💸
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Mindful eating practices */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">
            Práticas de alimentação consciente 🥗
          </h2>
          <p>
            Aprenda a lidar com gatilhos emocionais e crie hábitos saudáveis
            duradouros.
          </p>
        </div>

        {/* Nutrition Plan */}
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Plano de nutrição 🥦</h2>
          <p>Refeições personalizadas para turbinar seus resultados.</p>
        </div>

        {/* Progress Tracking */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Acompanhamento de progresso 📈</h2>
          <p>Receba feedbacks de especialistas para evoluir com segurança.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-green-600 text-white font-bold text-lg py-4 px-4 rounded-full hover:bg-green-700 transition active:scale-95">
        Comece agora sua jornada de saúde e ganhos!
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          Você precisa ter o Telegram instalado para aproveitar nosso app.
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
