import React from 'react';
import { User, ShieldCheck, Users, Crown, Award, TrendingUp } from 'lucide-react';

interface CareerStepProps {
  step: string;
  title: string;
  subTitle: string;
  description: string;
  isLast?: boolean;
  icon: React.ElementType;
}

const CareerStep: React.FC<CareerStepProps> = ({ step, title, subTitle, description, isLast = false, icon: Icon }) => (
  <div className="relative flex gap-4 md:gap-8 pb-12 last:pb-0 group">
    {/* Timeline Line */}
    {!isLast && (
      <div className="absolute left-[20px] md:left-[28px] top-14 bottom-0 w-0.5 md:w-1 bg-slate-200 group-hover:bg-blue-200 transition-colors -z-10"></div>
    )}

    {/* Icon Bubble */}
    <div className={`
      relative shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 transition-transform group-hover:scale-110
      ${isLast 
        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white ring-4 ring-yellow-100' 
        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-500 group-hover:text-white'}
    `}>
      <Icon size={isLast ? 24 : 20} className="md:w-6 md:h-6" />
    </div>

    {/* Content Card */}
    <div className={`
      flex-1 p-5 md:p-6 rounded-xl border transition-all duration-300
      ${isLast 
        ? 'bg-gradient-to-br from-daikure-main to-daikure-accent text-white border-transparent shadow-xl transform md:-translate-y-2' 
        : 'bg-white border-slate-200 text-gray-800 shadow-sm hover:shadow-lg hover:border-blue-200'}
    `}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
        <div>
          <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${isLast ? 'text-blue-200' : 'text-blue-600'}`}>
            {step}
          </span>
          <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
            {title}
          </h3>
        </div>
        <span className={`
          text-xs md:text-sm font-bold px-3 py-1 rounded-full w-fit
          ${isLast ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-slate-100 text-slate-600'}
        `}>
          {subTitle}
        </span>
      </div>
      
      <p className={`text-sm md:text-base leading-relaxed mb-4 ${isLast ? 'text-blue-50' : 'text-slate-600'}`}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {!isLast ? (
          <>
            <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-100 flex items-center gap-1">
              <Award size={12} /> 資格取得支援
            </span>
            <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-100">
               OJT研修あり
            </span>
          </>
        ) : (
          <>
            <span className="text-xs font-bold px-2 py-1 bg-white/20 text-white rounded border border-white/30 flex items-center gap-1">
              <Crown size={12} /> 経営幹部候補
            </span>
            <span className="text-xs font-bold px-2 py-1 bg-white/20 text-white rounded border border-white/30 flex items-center gap-1">
              <TrendingUp size={12} /> 年収大幅UP
            </span>
          </>
        )}
      </div>
    </div>
  </div>
);

const CareerPathSection: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-daikure-main mb-4">
            キャリアパス
          </h2>
          <p className="text-gray-600 font-medium max-w-xl mx-auto">
            未経験からスタートしても、明確なステップアップ制度があります。<br className="hidden md:block"/>
            実力次第で早期の昇格も可能な環境です。
          </p>
        </div>

        <div className="relative">
          <CareerStep 
            step="STEP 01"
            title="未経験スタート"
            subTitle="目安: 入社〜1年"
            description="まずは安全教育と先輩の補助からスタート。道具の名前や現場のルールを覚え、基礎を固める期間です。焦らず着実に慣れていきましょう。"
            icon={User}
          />

          <CareerStep 
            step="STEP 02"
            title="技術者 (プロフェッショナル)"
            subTitle="目安: 1年〜3年"
            description="必要な国家資格などを会社負担で取得。一人前の職人として現場の主要な工程を任されます。自身の技術力が形になる面白さを実感できます。"
            icon={ShieldCheck}
          />

          <CareerStep 
            step="STEP 03"
            title="サブリーダー"
            subTitle="目安: 3年〜5年"
            description="小規模なチームの指揮や、後輩の育成を担当。現場全体の流れを読み、安全かつ効率的に作業が進むよう管理する視点を養います。"
            icon={Users}
          />

          <CareerStep 
            step="GOAL"
            title="職長・現場責任者"
            subTitle="目安: 5年〜"
            description="大規模な現場の統括責任者へ。安全・品質・工程のすべてを管理します。経営幹部候補として、待遇面でも大きなステップアップが待っています。"
            isLast={true}
            icon={Crown}
          />
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
          <p className="text-daikure-main font-bold text-sm md:text-base">
            ※ 上記期間はあくまで目安です。
            <br className="md:hidden" />
            <span className="inline-block mt-2 md:mt-0 md:ml-2 bg-white px-3 py-1 rounded text-daikure-accent shadow-sm border border-blue-100">
              20代での職長抜擢実績あり
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;