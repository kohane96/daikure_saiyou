import React from 'react';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  description: string;
  type: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, description, type }) => (
  <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-soft hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">{type}</span>
        <div className="flex items-center text-slate-500 text-xs font-bold gap-1">
          <MapPin size={12} /> {location}
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-daikure-dark mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-daikure-muted text-sm md:text-base">{description}</p>
    </div>
    
    <div className="w-full md:w-auto">
      <a href="#" className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-slate-50 text-daikure-main font-bold rounded-xl group-hover:bg-daikure-main group-hover:text-white transition-all duration-300 gap-2">
        詳細を見る <ArrowRight size={18} />
      </a>
    </div>
  </div>
);

const JobListingSection: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-eng text-blue-600 text-sm font-bold tracking-widest uppercase block mb-3">Recruiting</span>
          <h2 className="text-3xl md:text-4xl font-bold text-daikure-dark">
            募集中の職種
          </h2>
        </div>

        <div className="space-y-6">
          <JobCard 
            type="正社員"
            title="ブラスト作業 / 防食塗装"
            location="広島県呉市"
            description="大型構造物の表面処理・防錆作業。未経験から国家資格を目指せる専門職です。"
          />

          <JobCard 
            type="正社員"
            title="船舶の塗装加工 / 工程管理"
            location="広島県呉市"
            description="造船構造物の防食・仕上げ作業および進捗管理。チームリーダー候補募集。"
          />
        </div>
      </div>
    </section>
  );
};

export default JobListingSection;