// Suppression de "import React from 'react';" qui est inutile ici
// @ts-ignore
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Correction pour le typage de Slider
const ReactSlick = (Slider as any).default ?? Slider;

interface Testimonial {
  id: number;
  parent: string;
  role: string;
  text: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  { id: 1, parent: "Mme Yao Marie-Laure", role: "Mère d'élève, CM2", text: "Une transformation incroyable. Le niveau scolaire a grimpé et mon fils a repris une confiance totale en lui.", stars: 5 },
  { id: 2, parent: "M. Kouassi Jean-Paul", role: "Père d'élève, Terminale", text: "La rigueur et l'encadrement sont exemplaires. Ma fille se sent prête pour les défis de l'enseignement supérieur.", stars: 5 },
  { id: 3, parent: "Mme Bamba Fatoumata", role: "Mère d'élève, Préscolaire", text: "L'éveil des tout-petits est ici une priorité absolue. Un environnement sain, stimulant et tellement bienveillant.", stars: 5 },
  { id: 4, parent: "M. Sidiki Koné", role: "Parent d'ancien élève", text: "Le socle éducatif du CSIG Bangui est puissant. Mon fils est devenu un ingénieur brillant grâce à ces bases.", stars: 5 }
];

interface CardProps {
  parent: string;
  role: string;
  text: string;
}

const TestimonialCard = ({ parent, role, text }: CardProps) => (
  <div className="relative mx-4 h-full group">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB]/5 to-[#FFCC00]/5 rounded-[2.5rem] transform group-hover:scale-[1.02] transition-transform duration-500"></div>
    
    <div className="relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,71,171,0.1)] h-full flex flex-col">
      <div className="text-[#FFCC00] mb-6 opacity-30">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.895 14.912 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017V5H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.017 21L5.017 18C5.017 16.895 5.912 16 7.017 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.017C5.464 8 5.017 8.448 5.017 9V11C5.017 11.552 4.569 12 4.017 12H3.017V5H13.017V15C13.017 18.314 10.33 21 7.017 21H5.017Z"/>
        </svg>
      </div>

      <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow font-medium italic">
        "{text}"
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
        <div className="w-14 h-14 bg-[#0047AB] text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">
          {parent.charAt(0)}
        </div>
        <div>
          <h4 className="text-[#0047AB] font-black text-sm uppercase tracking-widest">{parent}</h4>
          <p className="text-[#FFCC00] text-[10px] font-bold uppercase">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ],
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#0047AB] bg-[#0047AB]/5 px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase">
            Paroles de parents
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0047AB] uppercase tracking-tighter mt-4">
            L'Excellence <span className="text-[#FFCC00]">au quotidien</span>
          </h2>
        </div>

        <div className="testimonial-slider-container -mx-4">
          <ReactSlick {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-2 py-8">
                <TestimonialCard parent={item.parent} role={item.role} text={item.text} />
              </div>
            ))}
          </ReactSlick>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;