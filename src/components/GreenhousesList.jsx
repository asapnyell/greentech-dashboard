// src/components/GreenhousesList.jsx
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sprout, Sun } from "lucide-react";

export function GreenhousesList() {
  const estufas = [
    {
      id: "Estufa Alpha",
      strain: "Green Gelato",
      tipo: "Híbrida",
      fase: "Floração (Semana 6)",
      luz: "12/12h",
      status: "Excelente",
      progresso: 75,
      corBadge: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      id: "Sala de Vegetação",
      strain: "Sour Diesel",
      tipo: "Sativa",
      fase: "Crescimento",
      luz: "18/6h",
      status: "Atenção (VPD Alto)",
      progresso: 35,
      corBadge: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      id: "Berçário 01",
      strain: "Charlotte's Web",
      tipo: "Alto CBD",
      fase: "Enraizamento",
      luz: "24/0h",
      status: "Ideal",
      progresso: 15,
      corBadge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }
  ];

  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold text-white mb-4">Monitoramento de Estufas</h3>
      <div className="grid gap-4 flex-col">
        {estufas.map((estufa, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors gap-6"
          >
            {/* Info Principal */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-3">
                <h4 className="text-lg font-semibold text-zinc-100">{estufa.id}</h4>
                <Badge variant="outline" className={estufa.corBadge}>
                  {estufa.tipo}
                </Badge>
              </div>
              <p className="text-sm text-zinc-400">
                Genética: <span className="text-zinc-300 font-medium">{estufa.strain}</span>
              </p>
            </div>

            {/* Métricas Rápidas */}
            <div className="flex gap-6 flex-1 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Sprout size={16} className="text-emerald-500" />
                <span>{estufa.fase}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun size={16} className="text-amber-500" />
                <span>{estufa.luz}</span>
              </div>
            </div>

            {/* Barra de Progresso e Status */}
            <div className="flex-1 w-full max-w-50 space-y-2">
              <div className="flex justify-between text-xs">
                <span className={estufa.status.includes("Atenção") ? "text-amber-400" : "text-emerald-400"}>
                  {estufa.status}
                </span>
                <span className="text-zinc-500">{estufa.progresso}% Concluído</span>
              </div>
              <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${estufa.progresso}%` }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                  className={`h-full rounded-full ${estufa.status.includes("Atenção") ? 'bg-amber-500' : 'bg-emerald-500'}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}