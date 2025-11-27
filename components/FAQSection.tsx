import React from 'react';
import { PlusCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="group border-b border-slate-200 py-6 last:border-0">
    <div className="flex items-start justify-between cursor-pointer">
      <div className="flex gap-4">
        <span className="font-eng text-blue-500 font-bold text-xl">Q.</span>
        <h3 className="font-bold text-daikure-dark text-lg group-hover:text-blue-600 transition-colors">{question}</h3>
      </div>
      <PlusCircle className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" />
    </div>
    <div className="mt-4 pl-10 pr-4">
      <p className="text-slate-600 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQSection: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-eng text-blue-600 text-sm font-bold tracking-widest uppercase block mb-3">Q & A</span>
          <h2 className="text-3xl md:text-4xl font-bold text-daikure-dark">
            よくある質問
          </h2>
        </div>

        <div className="bg-white">
          <FAQItem 
            question="資格を持っていなくても応募できますか？"
            answer="はい、可能です。入社後に会社全額負担で必要な国家資格を取得できる制度が整っています。"
          />
          <FAQItem 
            question="工場勤務や現場作業が初めてでも大丈夫ですか？"
            answer="もちろんです。現在活躍している社員の多くが未経験スタートです。最初はチームで動き、先輩の補助から始めていただきます。"
          />
          <FAQItem 
            question="体力に自信がないのですが..."
            answer="最初は軽作業からスタートし、徐々に体を慣らしていけます。安全第一のため、無理な作業はさせません。また、機械化も進んでいます。"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;