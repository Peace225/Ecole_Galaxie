import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  subject: string;
  level: string;
  description: string;
  color?: string; // <-- Ajout pour personnaliser chaque carte
}

const CourseCard = ({ id, title, subject, level, description, color }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group overflow-hidden hover:-translate-y-2">
      
      {/* En-tête avec dégradé dynamique */}
      <div className={`h-48 bg-gradient-to-r ${color || 'from-[#0047AB] to-blue-400'} relative overflow-hidden`}>
         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
         {/* Motif décoratif */}
         <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-blue-50 text-[#0047AB] text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase">
            {subject}
          </span>
          <span className="text-gray-400 text-xs font-bold uppercase">{level}</span>
        </div>
        
        <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#0047AB] transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow font-medium">
          {description}
        </p>
        
        <Link 
          to={`/courses/${id}`} 
          className="inline-block w-full text-center bg-gray-50 hover:bg-[#FFCC00] text-[#0047AB] font-black uppercase tracking-widest text-sm py-4 rounded-xl transition-colors duration-300 shadow-sm"
        >
          Voir le programme
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;