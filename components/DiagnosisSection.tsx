import React from 'react';
import { Check, X } from 'lucide-react';

const DiagnosisSection: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-daikure-light relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-eng text-blue-600 text-sm font-bold tracking-widest uppercase block mb-3">Self Check</span>
          <h2 className="text-3xl md:text-4xl font-bold text-daikure-dark">
            向き・不向きの<br className="md:hidden"/>自己診断
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Good Fit */}
          <div className="bg-white p-10 rounded-3xl shadow-soft border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <h3 className="text-2xl font-bold text-daikure-main mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600">
                <Check size={24} strokeWidth={3} />
              </span> 
              向いている人
            </h3>
            <ul className="space-y-6">
              {[
                "手順を守れる／安全第一で行動できる",
                "工場・現場での屋内外作業に抵抗がない",
                "仲間と声をかけ合うチーム作業が好き",
                "体力づくりに前向き（筋トレが嫌いじゃない）",
                "慣れるまで続けられる“素直さ”がある"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full border-2 border-blue-200 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-daikure-text font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bad Fit */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
             <div className="absolute top-0 left-0 w-2 h-full bg-slate-300"></div>
            <h3 className="text-2xl font-bold text-slate-500 mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 text-slate-500">
                <X size={24} strokeWidth={3} />
              </span>
              向いていない人
            </h3>
            <ul className="space-y-6">
              {[
                "単独作業が好き／黙々と一人でやりたい",
                "汚れ・粉塵・騒音が苦手すぎる",
                "手順より“自己流”で進めたい",
                "体力に大きな不安がある",
                "注意や指示を受けるのが苦手"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <X className="text-slate-400 shrink-0 mt-1" size={20} />
                  <span className="text-slate-500 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="mb-6 text-daikure-dark font-bold text-lg">
              『向いている人』に多く当てはまる方は、<br className="md:hidden" />活躍できる素質があります。
            </p>
            <a href="#pride" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-daikure-main font-lg rounded-full hover:bg-daikure-dark hover:shadow-lg hover:-translate-y-1">
              <span>選ばれる理由を見る</span>
              <svg className="w-5 h-5 ml-2 transition-transform transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;