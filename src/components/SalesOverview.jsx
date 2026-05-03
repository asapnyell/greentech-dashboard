import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, PackageCheck, Truck } from "lucide-react";

export function SalesOverview() {
  const vendasRecentes = [
    { id: "ORD-089", cliente: "PharmaBotanic", produto: "Óleo CBD Full Spectrum", qtd: "200 frascos", valor: "R$ 45.000", status: "Entregue", corStatus: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    { id: "ORD-090", cliente: "Dispensário Green Leaf", produto: "Green Gelato (Flor Seca)", qtd: "5 kg", valor: "R$ 62.500", status: "Em Transporte", corStatus: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { id: "ORD-091", cliente: "Clínica Vida Ativa", produto: "Charlotte's Web", qtd: "2 kg", valor: "R$ 18.000", status: "Processando", corStatus: "bg-amber-500/10 text-amber-400 border-amber-500/20" }
  ];

  return (
    <section className="mt-8 flex flex-col lg:flex-row gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="w-full lg:w-1/3"
      >
        <Card className="bg-zinc-900/50 border-zinc-800 h-full backdrop-blur-sm cursor-default hover:border-emerald-500/30 transition-colors">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-zinc-100 flex items-center gap-2">
              <DollarSign className="text-emerald-500" size={20} />
              Visão Comercial
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm text-zinc-400 mb-1">Faturamento (Mês Atual)</p>
              <div className="flex items-end gap-3">
                <h3 className="text-4xl font-bold text-white">R$ 125.500</h3>
                <span className="flex items-center text-emerald-500 text-sm font-medium mb-1 gap-1">
                  <TrendingUp size={14} /> +12%
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-800/50 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-400">
                  <PackageCheck size={16} /> <span className="text-sm">Volume Distribuído</span>
                </div>
                <span className="font-medium text-zinc-200">28 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Truck size={16} /> <span className="text-sm">Lotes em Rota</span>
                </div>
                <span className="font-medium text-zinc-200">3 Lotes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full lg:w-2/3"
      >
        <Card className="bg-zinc-900/50 border-zinc-800 h-full backdrop-blur-sm flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-zinc-100">Vendas Recentes</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="rounded-xl border border-zinc-800/60 overflow-hidden">
              <div className="hidden grid-cols-12 gap-4 bg-zinc-900/80 p-4 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-800/60 md:grid">
                <div className="col-span-2">ID Pedido</div>
                <div className="col-span-3">Cliente</div>
                <div className="col-span-3">Produto</div>
                <div className="col-span-2 text-right">Valor</div>
                <div className="col-span-2 text-center">Status</div>
              </div>
              <div className="divide-y divide-zinc-800/50">
                {vendasRecentes.map((venda, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-zinc-800/40 cursor-pointer transition-colors">
                    <div className="md:col-span-2 font-mono text-xs text-zinc-500">{venda.id}</div>
                    <div className="md:col-span-3 font-medium text-zinc-200 text-sm">{venda.cliente}</div>
                    <div className="md:col-span-3 text-sm text-zinc-400">{venda.produto} <span className="text-zinc-600 text-xs ml-1">({venda.qtd})</span></div>
                    <div className="md:col-span-2 text-right font-medium text-emerald-400 text-sm">{venda.valor}</div>
                    <div className="md:col-span-2 flex justify-start md:justify-center">
                      <Badge variant="outline" className={`${venda.corStatus} whitespace-nowrap`}>{venda.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}