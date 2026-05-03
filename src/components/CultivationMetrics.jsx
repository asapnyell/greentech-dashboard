import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Leaf, ThermometerSun, Droplets, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";

export function CultivationMetrics() {
  // Array de dados simulando o banco de dados (atendendo ao requisito de Props)
  const metrics = [
    {
      title: "Lotes Ativos",
      value: "14 Estufas",
      description: "+2 finalizam esta semana",
      Icon: Leaf,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Temperatura Média",
      value: "24.5°C",
      description: "Ideal para fase de floração",
      Icon: ThermometerSun,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Umidade do Ar",
      value: "45%",
      description: "Níveis perfeitamente estáveis",
      Icon: Droplets,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Testes de Laboratório",
      value: "98% Pureza",
      description: "Lote Delta-9 aprovado",
      Icon: FlaskConical,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-colors h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-zinc-400">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-md ${metric.bg} ${metric.color}`}>
                <metric.Icon size={18} strokeWidth={2} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-zinc-100">{metric.value}</div>
              <p className="text-xs text-zinc-500 mt-1">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}