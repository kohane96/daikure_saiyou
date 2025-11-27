import React, { useState, useEffect } from 'react';
import { Layers, Hammer, PaintBucket, CheckCircle2, Factory } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const PrideSection: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A majestic steel suspension bridge spanning across the ocean and a modern airport terminal building with intricate steel framework, bright sunny day, blue sky, high resolution, photorealistic, industrial infrastructure masterpiece',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
            }
          }
        });

        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              setBgImage(`data:image/png;base64,${part.inlineData.data}`);
              break;
            }
          }
        }
      } catch (error) {
        console.error("Error generating pride section background:", error);
      }
    };

    generateImage();
  }, []);

  return (
    <section id="pride" className="relative py-24 px-5 text-white text-center overflow-hidden bg-daikure-main">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark Blue Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-daikure-main/85 z-10"></div>
        
        {/* Fallback Image */}
        <img 
          src="https://picsum.photos/id/1040/1200/800" 
          alt="Infrastructure Placeholder" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${bgImage ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Generated Image */}
        {bgImage && (
          <img 
            src={bgImage} 
            alt="Infrastructure Background" 
            className="absolute inset-0 w-full h-full object-cover animate-[fadeIn_1s_ease-in-out]"
            style={{ animation: 'fadeIn 1s ease-in-out' }}
          />
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-daikure-light font-bold tracking-widest uppercase text-sm mb-4 border-b border-white/20 inline-block pb-1">— この仕事が選ばれる理由 —</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 drop-shadow-lg">
          自分の仕事が“街に残る”。<br />
          あの橋も、あの空港も。
        </h2>
        <p className="text-lg text-gray-100 leading-relaxed mb-16 max-w-2xl mx-auto drop-shadow-md font-medium">
          ダイクレ興産の仕事は、日本のインフラ・街の基盤を支える「防食・防錆」という専門領域。<br className="hidden md:block"/>
          あなたが仕上げた鉄が、数十年単位で社会を支え続ける。
        </p>

        {/* 一気通貫コンテンツ */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden text-left md:text-center">
          {/* 上部：タイトル帯 */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
            <div className="flex items-center md:justify-center gap-3 mb-2">
              <Factory className="text-blue-400" />
              <h3 className="font-bold text-xl md:text-2xl">自社工場完結の「一気通貫」体制</h3>
            </div>
            <p className="text-slate-300 text-sm md:text-base pl-9 md:pl-0">
              他社には真似できない、スピードと品質の両立。
            </p>
          </div>

          {/* プロセスフロー */}
          <div className="p-6 md:p-10 bg-slate-50">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 relative">
              
              {/* コネクタ線 (Desktop: 横) */}
              <div className="hidden md:block absolute top-[45px] left-0 w-full h-1 bg-slate-200 z-0"></div>

              {/* Step 1: めっき */}
              <div className="relative z-10 w-full md:w-1/3 bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm flex flex-col items-center hover:border-blue-500 transition-colors group">
                <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors border-4 border-white shadow-sm">
                  <Layers size={30} />
                </div>
                <span className="text-xs font-bold text-blue-600 mb-1 uppercase tracking-widest">Step 01</span>
                <h4 className="font-bold text-lg mb-3">溶融亜鉛めっき</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-snug text-center">
                  巨大な水槽で鉄をドブ漬けし、<br />
                  <span className="font-bold text-gray-700">最強の防錆皮膜</span>を作る。
                </p>
              </div>

              {/* 矢印 (Mobile: 縦) */}
              <div className="md:hidden flex justify-center py-2">
                <div className="w-1 h-8 bg-slate-300"></div>
              </div>

              {/* Step 2: 前処理 */}
              <div className="relative z-10 w-full md:w-1/3 bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm flex flex-col items-center hover:border-blue-500 transition-colors group">
                <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors border-4 border-white shadow-sm">
                  <Hammer size={30} />
                </div>
                <span className="text-xs font-bold text-blue-600 mb-1 uppercase tracking-widest">Step 02</span>
                <h4 className="font-bold text-lg mb-3">研磨・前処理</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-snug text-center">
                  表面をブラスト処理で整え、<br />
                  <span className="font-bold text-gray-700">密着性を極限まで高める</span>。
                </p>
              </div>

              {/* 矢印 (Mobile: 縦) */}
              <div className="md:hidden flex justify-center py-2">
                <div className="w-1 h-8 bg-slate-300"></div>
              </div>

              {/* Step 3: 塗装 */}
              <div className="relative z-10 w-full md:w-1/3 bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm flex flex-col items-center hover:border-blue-500 transition-colors group">
                <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors border-4 border-white shadow-sm">
                  <PaintBucket size={30} />
                </div>
                <span className="text-xs font-bold text-blue-600 mb-1 uppercase tracking-widest">Step 03</span>
                <h4 className="font-bold text-lg mb-3">特殊塗装</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-snug text-center">
                  海や山、過酷な環境に耐える<br />
                  <span className="font-bold text-gray-700">重防食塗装</span>で仕上げる。
                </p>
              </div>

            </div>
          </div>

          {/* 結論 */}
          <div className="p-6 border-t border-slate-200 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 whitespace-nowrap">
                <CheckCircle2 size={18} />
                大手ゼネコンから指名多数
              </div>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                3つの工程を1社で完結できるから、<span className="text-daikure-main font-bold underline decoration-blue-300 decoration-4 underline-offset-2">品質管理が別格</span>です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrideSection;