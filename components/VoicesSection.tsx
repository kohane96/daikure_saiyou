import React from 'react';
import { Quote } from 'lucide-react';

const VoiceCard: React.FC<{ title: string; quote: string; imageId: number; role: string }> = ({ title, quote, imageId, role }) => (
  <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 flex flex-col h-full">
    <div className="flex items-center gap-4 mb-6">
      <img 
        src={`https://picsum.photos/id/${imageId}/150/150`} 
        alt="Employee" 
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
      />
      <div>
        <h3 className="font-bold text-lg text-daikure-dark leading-tight">{title}</h3>
        <p className="text-xs font-bold text-blue-500 uppercase mt-1 tracking-wide">{role}</p>
      </div>
    </div>
    <div className="relative flex-1">
      <Quote className="absolute -top-2 -left-2 text-slate-100 w-12 h-12 -z-10 transform -scale-x-100" />
      <p className="text-daikure-text leading-relaxed relative z-10 italic">
        "{quote}"
      </p>
    </div>
  </div>
);

const VoicesSection: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-daikure-light">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="font-eng text-blue-600 text-sm font-bold tracking-widest uppercase block mb-3">Interviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-daikure-dark">
              先輩社員の声
            </h2>
          </div>
          <p className="text-slate-500 mt-4 md:mt-0 font-medium">
            異業種から転職した先輩たちが活躍しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <VoiceCard 
            imageId={64}
            role="Production Leader / 20代"
            title="元飲食業 → 20代で職長へ抜擢"
            quote="最初は工具の名前すら知りませんでした。でも『見て覚えろ』ではなく、理屈から教えてくれる環境だったので安心でした。努力が給与やポストに直結するのが面白いです。"
          />
          <VoiceCard 
            imageId={91}
            role="Technical Specialist / 30代"
            title="元美容師 → 手に職がつく環境へ"
            quote="衣食住の『住』、それも街の骨組みを作る仕事。完成した橋や建物を見たとき、家族に『あれに関わったんだ』と誇れるのが一番のやりがいです。"
          />
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;