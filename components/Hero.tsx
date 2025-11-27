import React, { useEffect, useState } from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const generateImage = async () => {
      setLoading(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'Cinematic wide shot of a massive steel bridge construction site at twilight, industrial atmosphere, deep blue and metallic tones, sparks flying from welding in the distance, highly detailed, realistic, 8k resolution, professional photography.',
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
              setHeroImage(`data:image/png;base64,${part.inlineData.data}`);
              break;
            }
          }
        }
      } catch (error) {
        console.error("Error generating hero image:", error);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, []);

  return (
    <header className="relative h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 overflow-hidden bg-daikure-dark text-white">
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-daikure-dark via-daikure-dark/80 to-transparent z-10"></div>
        
        {/* Fallback/Placeholder Image */}
        <img 
          src="https://picsum.photos/id/1033/1200/1600" 
          alt="Industrial Factory Background Placeholder" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${heroImage ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Generated Image */}
        {heroImage && (
          <img 
            src={heroImage} 
            alt="Generated Industrial Background" 
            className="absolute inset-0 w-full h-full object-cover animate-[fadeIn_1s_ease-in-out]"
            style={{ animation: 'fadeIn 1s ease-in-out' }}
          />
        )}
        
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>

      <div className="relative z-20 max-w-4xl w-full pt-10">
        {loading && (
          <div className="absolute -top-16 left-0 flex items-center gap-2 text-xs font-eng tracking-wider text-blue-200 bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            <Loader2 className="animate-spin" size={12} />
            <span>GENERATING BACKGROUND WITH GEMINI...</span>
          </div>
        )}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tight drop-shadow-lg">
          きつい。<br />
          でも<span className="text-blue-400">誇れる</span>。
        </h1>
        <p className="text-xl md:text-2xl mb-12 font-light tracking-wider text-gray-200 border-l-4 border-blue-500 pl-6">
          呉から日本のインフラを守る、<br className="md:hidden"/>国家規模の仕事。
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-default">
            <p className="font-eng text-blue-300 text-xs font-bold tracking-widest uppercase mb-1">CAREER</p>
            <p className="text-base font-bold text-white">未経験からプロへ / 資格取得全額負担</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-default">
            <p className="font-eng text-blue-300 text-xs font-bold tracking-widest uppercase mb-1">WORK-LIFE BALANCE</p>
            <p className="text-base font-bold text-white">完全週休2日 / 年間休日123日</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-white/30 hover:text-white transition-colors cursor-pointer">
        <ChevronDown size={48} strokeWidth={1} />
      </div>
    </header>
  );
};

export default Hero;