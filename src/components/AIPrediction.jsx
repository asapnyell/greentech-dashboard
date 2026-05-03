// src/components/AIPrediction.jsx
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Activity } from "lucide-react";

export function AIPrediction() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }} // Aparece quando metade entra na tela
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      whileHover={{ boxShadow: "0px 0px 30px rgba(16, 185, 129, 0.15)" }}
      className="mt-8 mb-16 relative overflow-hidden rounded-3xl border border-emerald-900/50 bg-zinc-900/40 backdrop-blur-xl p-8 cursor-default transition-shadow"
    >
      <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="space-y-4 flex-1">
          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 gap-1.5 px-3 py-1">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles size={14} />
            </motion.div>
            Agente de Previsão Ativo
          </Badge>
          <h3 className="text-2xl font-bold text-white">Otimização de Colheita (Lote #42)</h3>
          <p className="text-zinc-400 leading-relaxed">
            Nossos modelos de machine learning analisaram os níveis de umidade e PPFD das últimas 72 horas. 
            Recomendamos antecipar a colheita em 2 dias para maximizar o perfil de terpenos e evitar oxidação.
          </p>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="shrink-0 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-2xl flex items-center gap-6"
        >
          <div className="space-y-1">
            <div className="text-sm text-zinc-500">Precisão da IA</div>
            <div className="text-4xl font-black text-emerald-500">98.4%</div>
          </div>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Activity size={40} className="text-emerald-500/40" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}