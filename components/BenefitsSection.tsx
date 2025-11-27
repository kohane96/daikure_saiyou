import React from 'react';
import { CalendarDays, CalendarCheck, Clock, SmilePlus, Banknote, GraduationCap } from 'lucide-react';

interface BenefitCardProps {
  number: string;
  label: string;
  subLabel?: string;
  icon: React.ElementType;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ number, label, subLabel, icon: Icon }) => (
  <div className="
    relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
    flex flex-col items-center justify-center text-center group overflow-hidden
  ">
    {/* Decorative Background Icon (Watermark effect) */}
    <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
      <Icon size={140} className="text-daikure-main" />
    </div>

    {/* Main Icon Circle */}
    <div className="mb-4 p-4 bg-blue-50 text-daikure-main rounded-full group-hover:bg-daikure-main group-hover:text-white transition-colors duration-300 shadow-sm relative z-10">
      <Icon size={28} strokeWidth={2} />
    </div>

    {/* Number */}
    <div className="relative z-10 mb-1">
      <span className="block text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight group-hover:text-daikure-main transition-colors duration-300">
        {number}
      </span>
    </div>

    {/* Labels */}
    <div className="relative z-10">
      <span className="block text-sm md:text-base font-bold text-slate-600">{label}</span>
      {subLabel && (
        <span className="block text-xs font-medium text-slate-400 mt-1">{subLabel}</span>
      )}
    </div>
  </div>
);

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-daikure-main mb-4">
            数字で見る安心待遇
          </h2>
          <p className="text-slate-600 font-medium">
            長く、健康に、誇りを持って働ける環境を整えています。
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <BenefitCard 
            number="123日" 
            label="年間休日" 
            subLabel="業界トップクラス"
            icon={CalendarDays} 
          />
          <BenefitCard 
            number="週休2日" 
            label="完全週休" 
            subLabel="(土日祝休み)"
            icon={CalendarCheck} 
          />
          <BenefitCard 
            number="30h" 
            label="残業" 
            subLabel="(月平均)"
            icon={Clock} 
          />
          <BenefitCard 
            number="17日" 
            label="有給取得" 
            subLabel="(3ヶ月後付与)"
            icon={SmilePlus} 
          />
          <BenefitCard 
            number="年2回" 
            label="賞与" 
            subLabel="(昨対4.0ヶ月)"
            icon={Banknote} 
          />
          <BenefitCard 
            number="100%" 
            label="資格取得" 
            subLabel="会社全額負担"
            icon={GraduationCap} 
          />
        </div>

        <div className="mt-10 text-center">
             <p className="text-xs text-slate-400">※2024年度実績 / 配属部署により多少変動する場合があります</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;