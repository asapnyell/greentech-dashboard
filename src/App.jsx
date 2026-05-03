import { CultivationMetrics } from "./components/CultivationMetrics";
import { AIPrediction } from "./components/AIPrediction";
import { Button } from "./components/ui/button";
import { Leaf, Bell, Settings, LogOut } from "lucide-react";

function App() {
  const anoAtual = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased flex flex-col selection:bg-emerald-500/30">
      
      {/* Header do Dashboard */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="bg-emerald-500/10 p-1.5 rounded-lg">
              <Leaf className="text-emerald-500" size={20} />
            </div>
            GreenTech
            <span className="text-xs font-normal text-zinc-500 ml-2 px-2 py-0.5 bg-zinc-900 rounded-full border border-zinc-800">OS</span>
          </div>
          
          {/* Navegação e Ícones */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 mr-4 text-sm font-medium text-zinc-400">
              <a href="#" className="text-white">Visão Geral</a>
              <a href="#" className="hover:text-white transition-colors">Estufas</a>
              <a href="#" className="hover:text-white transition-colors">Relatórios</a>
            </nav>
            <div className="h-4 w-px bg-zinc-800 hidden md:block"></div>
            <Bell size={18} className="text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            <Settings size={18} className="text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white ml-2">
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        
        {/* Título da Página / Ações */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Visão Geral da Plantação</h1>
            <p className="text-zinc-400 mt-1">Acompanhe as métricas vitais das suas estufas em tempo real.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white">
              Exportar Relatório
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white border-0">
              Novo Lote
            </Button>
          </div>
        </div>

        {/* Componentes Importados */}
        <CultivationMetrics />
        <AIPrediction />

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>GreenTech OS © {anoAtual}. Dashboard Seed-to-Sale.</p>
          <p>Desenvolvido por Danyel Henrique.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;