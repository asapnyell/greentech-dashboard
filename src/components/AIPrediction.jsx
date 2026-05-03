import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Activity } from "lucide-react";

export function AIPrediction() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-8 relative overflow-hidden rounded-3xl border border-emerald-900/50 bg-zinc-900/40 backdrop-blur-xl p-8"
    >
      <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="space-y-4 flex-1">
          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 gap-1.5 px-3 py-1">
            <Sparkles size={14} />
            Agente de Previsão Ativo
          </Badge>
          <h3 className="text-2xl font-bold text-white">Otimização de Colheita (Lote #42)</h3>
          <p className="text-zinc-400 leading-relaxed">
            Nossos modelos de machine learning analisaram os níveis de umidade e PPFD das últimas 72 horas. 
            Recomendamos antecipar a colheita em 2 dias para maximizar o perfil de terpenos e evitar oxidação.
          </p>
        </div>

        <div className="shrink-0 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-2xl flex items-center gap-6">
          <div className="space-y-1">
            <div className="text-sm text-zinc-500">Precisão da IA</div>
            <div className="text-4xl font-black text-emerald-500">98.4%</div>
          </div>
          <Activity size={40} className="text-emerald-500/20" />
        </div>
      </div>
    </motion.section>
  );
}