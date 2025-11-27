import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="rjp" className="py-24 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-eng text-blue-600 text-sm font-bold tracking-widest uppercase block mb-3">Realistic Job Preview</span>
          <h2 className="text-3xl md:text-4xl font-bold text-daikure-dark mb-6">
            応募前に、<br className="md:hidden"/>現場のリアルを知る。
          </h2>
          <p className="text-daikure-muted leading-relaxed">
            ミスマッチを防ぐため、包み隠さず公開します。<br />
            まずは3分、動画をご覧ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Video 1 */}
          <div className="group">
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-soft mb-6 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
              <img 
                src="https://picsum.photos/id/142/800/450" 
                alt="Company Intro Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="text-white w-16 h-16 drop-shadow-2xl opacity-90 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-eng px-2 py-1 rounded backdrop-blur-sm">
                03:15
              </div>
            </div>
            <h3 className="font-bold text-xl text-daikure-dark mb-2 group-hover:text-blue-600 transition-colors">01. 会社紹介（どんな会社？）</h3>
            <p className="text-sm text-daikure-muted leading-relaxed">何を作っている会社なのか、社会インフラにどう関わっているかを解説します。</p>
          </div>

          {/* Video 2 */}
          <div className="group">
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-soft mb-6 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
              <img 
                src="https://picsum.photos/id/305/800/450" 
                alt="Factory Tour Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="text-white w-16 h-16 drop-shadow-2xl opacity-90 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-eng px-2 py-1 rounded backdrop-blur-sm">
                02:45
              </div>
            </div>
            <h3 className="font-bold text-xl text-daikure-dark mb-2 group-hover:text-blue-600 transition-colors">02. 工場案内（仕事内容）</h3>
            <p className="text-sm text-daikure-muted leading-relaxed">実際の現場、作業風景、1日の流れ。音や雰囲気をご確認ください。</p>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-10 text-center">
           <p className="text-sm font-bold text-daikure-muted tracking-wider">NEXT STEP</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;