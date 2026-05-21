interface QuizCardProps {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

const QuizCard = ({ question, options, selectedOption, onSelect }: QuizCardProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{question}</h2>
      
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === option;
          return (
            <button
              key={index}
              onClick={() => onSelect(option)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-800 font-semibold'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700'
              }`}
            >
              <span className="inline-block w-8 h-8 text-center leading-8 rounded-full bg-white border border-gray-300 mr-3 text-sm">
                {String.fromCharCode(65 + index)} {/* A, B, C, D... */}
              </span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;