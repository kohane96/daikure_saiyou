import React from 'react';
import { Sun, ClipboardList, Coffee, Users, LogOut, ShieldCheck, UserCircle2 } from 'lucide-react';

interface TimeItemProps {
  time: string;
  title: string;
  description?: string;
  icon: React.ElementType;
  isLast?: boolean;
}

const TimeItem: React.FC<TimeItemProps> = ({ time, title, description, icon: Icon, isLast }) => (
  <div className="relative pl-12 md:pl-16 pb-12 last:pb-0 group">
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-slate-200 group-hover:bg-blue-200 transition-colors"></div>
    )}
    
    {/* Icon Bubble */}
    <div className="absolute left-0 top-0 w-12 h-12 bg-white border-4 border-blue-50 text-blue-500 rounded-full flex items-center justify-center shadow-sm z-10 group-hover:border-blue-100 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
      <Icon size={20} />
    </div>

    {/* Content Card */}
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all duration-300 relative group-hover:-translate-y-1">
       {/* Time Badge */}
       <div className="absolute -top-3 left-6 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md font-eng tracking-wider">
         {time}
       </div>
       
       <h3 className="font-bold text-lg text-daikure-dark mt-2 mb-2">{title}</h3>
       {description && (
         <p className="text-daikure-muted text-sm leading-relaxed">{description}</p>
       )}
    </div>
  </div>
);

const DailyFlowSection: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[8rem] font-black text-slate-50 opacity-80 pointer-events-none font-eng z-0 whitespace-nowrap select-none">
            SCHEDULE
          </div>
          <div className="relative z-10">
            <span className="font-eng text-blue-600 text-sm font-bold tracking-widest uppercase block mb-3">One Day Flow</span>
            <h2 className="text-3xl md:text-4xl font-bold text-daikure-dark">
              1日の流れ & 安全への取り組み
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
          
          {/* Profile Sidebar (Sticky on Desktop) */}
          <div className="md:sticky md:top-24">
            <div className="bg-gradient-to-br from-daikure-main to-daikure-dark text-white p-8 rounded-3xl shadow-xl relative overflow-hidden text-center md:text-left">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20 shadow-inner">
                  <UserCircle2 size={48} className="text-blue-200" />
                </div>
                <div>
                   <p className="text-blue-200 font-bold text-xs uppercase tracking-widest mb-1">MODEL CASE</p>
                   <h3 className="text-2xl font-bold leading-tight">職長 Kさん</h3>
                   <p className="text-white/80 text-sm mt-2">生産課1係所属 / 入社7年目</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-blue-100 leading-relaxed italic">
                  "段取り八分と言われるように、朝の準備とその日の流れを全員で共有することが、安全と品質を守る鍵です。"
                </p>
              </div>
            </div>

            {/* Safety Badge (Desktop) */}
            <div className="hidden md:block mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl group hover:border-blue-300 transition-colors">
               <div className="flex items-center gap-3 mb-2 text-daikure-main font-bold">
                 <ShieldCheck className="fill-blue-100 group-hover:scale-110 transition-transform text-blue-600" size={24} />
                 安全第一の文化
               </div>
               <p className="text-sm text-slate-600 leading-relaxed">
                 保護具・教育・危険予知（KY）活動を徹底し、全員が無事故で帰宅することを最優先しています。
               </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <TimeItem 
              time="08:00" 
              title="出社・朝礼" 
              description="工程表を基に、その日の作業内容と1日の流れをチーム全員で共有。体調確認や保護具のチェックも行います。"
              icon={Sun}
            />
            <TimeItem 
              time="AM" 
              title="現場巡回・工程管理" 
              description="一般製品とグレーチング、それぞれの生産ラインがスムーズに進んでいるか確認。翌日分の工程調整もこの時間に行うことが多いです。"
              icon={ClipboardList}
            />
            <TimeItem 
              time="12:00" 
              title="お昼休憩"
              description="食堂で仲間と食事をとったり、仮眠をとって午後の作業に備えます。" 
              icon={Coffee}
            />
            <TimeItem 
              time="PM" 
              title="進捗確認・後輩への指導" 
              description="各作業の進捗を確認しつつ、後輩や実習生の作業に目を配り、必要に応じて実演しながら指導します。"
              icon={Users}
            />
            <TimeItem 
              time="17:00" 
              title="終業・引き継ぎ" 
              description="※繁忙期には1〜2時間程度の残業あり。負担が偏らないようチームで均等に分担して帰宅します。"
              icon={LogOut}
              isLast={true}
            />
          </div>

          {/* Safety Badge (Mobile) */}
          <div className="md:hidden bg-blue-50 border border-blue-100 p-6 rounded-2xl group">
              <div className="flex items-center gap-3 mb-2 text-daikure-main font-bold">
                <ShieldCheck className="fill-blue-100 text-blue-600" size={24} />
                安全第一の文化
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                保護具・教育・危険予知（KY）活動を徹底し、全員が無事故で帰宅することを最優先しています。
              </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DailyFlowSection;