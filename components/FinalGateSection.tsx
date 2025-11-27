import React, { useState } from 'react';

const FinalGateSection: React.FC = () => {
  const [checks, setChecks] = useState({
    safety: false,
    team: false,
    fitness: false,
    environment: false,
    career: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecks({
      ...checks,
      [e.target.name]: e.target.checked,
    });
  };

  const allChecked = Object.values(checks).every(Boolean);

  return (
    <section className="py-24 px-5 bg-daikure-dark text-white relative overflow-hidden">
      {/* Abstract bg shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">FINAL CHECK</h2>
        <p className="mb-12 text-blue-200 font-medium leading-relaxed">
          私たちの仕事は、決して楽ではありません。<br />
          だからこそ、覚悟を持って挑戦してくれる方を全力で歓迎します。
        </p>

        <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md text-left w-full mx-auto mb-12 shadow-2xl">
          <div className="space-y-6">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  name="safety" 
                  checked={checks.safety} 
                  onChange={handleChange}
                  className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-white/30 bg-white/5 checked:bg-blue-500 checked:border-transparent transition-all" 
                />
                <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg text-white/90 group-hover:text-white transition-colors">安全手順の遵守ができる</span>
            </label>

            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  name="team" 
                  checked={checks.team} 
                  onChange={handleChange}
                  className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-white/30 bg-white/5 checked:bg-blue-500 checked:border-transparent transition-all" 
                />
                <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg text-white/90 group-hover:text-white transition-colors">チームでの協力作業が可能</span>
            </label>

             <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  name="fitness" 
                  checked={checks.fitness} 
                  onChange={handleChange}
                  className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-white/30 bg-white/5 checked:bg-blue-500 checked:border-transparent transition-all" 
                />
                <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg text-white/90 group-hover:text-white transition-colors">体力仕事に向き合う意欲がある</span>
            </label>

            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  name="environment" 
                  checked={checks.environment} 
                  onChange={handleChange}
                  className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-white/30 bg-white/5 checked:bg-blue-500 checked:border-transparent transition-all" 
                />
                <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg text-white/90 group-hover:text-white transition-colors">現場環境（暑さ・汚れ等）を理解している</span>
            </label>

             <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  name="career" 
                  checked={checks.career} 
                  onChange={handleChange}
                  className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-white/30 bg-white/5 checked:bg-blue-500 checked:border-transparent transition-all" 
                />
                <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg text-white/90 group-hover:text-white transition-colors">長期的なキャリア形成を考えている</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <button 
            disabled={!allChecked}
            className={`
              w-full max-w-md py-5 px-8 rounded-xl font-bold text-lg shadow-glow transition-all duration-300 transform
              ${allChecked 
                ? 'bg-blue-600 text-white hover:bg-blue-500 hover:scale-[1.02] cursor-pointer' 
                : 'bg-slate-700 text-slate-400 cursor-not-allowed grayscale'}
            `}
            onClick={() => alert("応募フォームへ移動します（デモ）")}
          >
            {allChecked ? 'エントリーする (応募フォームへ)' : 'すべての項目を確認してください'}
          </button>
          
          <button className="text-white/70 hover:text-white border-b border-transparent hover:border-white transition-all text-sm pb-1">
            まずは会社見学・カジュアル面談を希望する方はこちら
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalGateSection;