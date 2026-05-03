import { CultivationMetrics } from "./components/CultivationMetrics";
import { AIPrediction } from "./components/AIPrediction";
import { GreenhousesList } from "./components/GreenhousesList";
import { Button } from "./components/ui/button";
import { Leaf, Bell, Settings, LogOut, Download, Plus, CheckCircle2, AlertTriangle } from "lucide-react";
import { SalesOverview } from "./components/SalesOverview";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function App() {
  const anoAtual = new Date().getFullYear();

  const handleExportar = () => {
    alert("Iniciando download do relatório consolidado (PDF)...");
  };

  const handleNovoLote = () => {
    alert("Abrindo formulário para cadastro de nova genética...");
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased flex flex-col selection:bg-emerald-500/30">
      
      <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="bg-emerald-500/10 p-1.5 rounded-lg">
              <Leaf className="text-emerald-500" size={20} />
            </div>
            GreenTech
            <span className="text-xs font-normal text-zinc-500 ml-2 px-2 py-0.5 bg-zinc-900 rounded-full border border-zinc-800">OS</span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Navegação Desktop */}
            <nav className="hidden md:flex gap-6 mr-4 text-sm font-medium text-zinc-400">
              <a href="#" className="text-white drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Visão Geral</a>
              
              {/* Dropdown de Estufas */}
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-white transition-colors outline-none cursor-pointer">
                  Estufas
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-950 border-zinc-800 text-zinc-300 min-w-50">
                  <DropdownMenuLabel className="text-zinc-500">Estufas Ativas</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-zinc-800" />
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> Estufa Alpha
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span> Sala de Vegetação
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> Berçário 01
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-zinc-800" />
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-emerald-400 cursor-pointer font-medium">
                    Ver mapa de cultivo...
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dropdown de Relatórios */}
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-white transition-colors outline-none cursor-pointer">
                  Relatórios
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-950 border-zinc-800 text-zinc-300 min-w-50">
                  <DropdownMenuLabel className="text-zinc-500">Dados da Plantação</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-zinc-800" />
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">Análise de Terpenos (Último Lote)</DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">Histórico de Umidade e VPD</DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">Projeção de Colheita Mensal</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            <div className="h-4 w-px bg-zinc-800 hidden md:block"></div>
            
            {/* Sino de Notificações (Foco em Colheitas e Alertas) */}
            <DropdownMenu>
              <DropdownMenuTrigger className="relative outline-none">
                <Bell size={18} className="text-zinc-400 hover:text-white cursor-pointer transition-colors hover:scale-110 active:scale-95" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-zinc-950"></span>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-950 border-zinc-800 text-zinc-300 w-75 p-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3 p-2 rounded-md hover:bg-zinc-900 transition-colors cursor-pointer">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-zinc-100">Lote #42 pronto para colheita</p>
                      <p className="text-xs text-zinc-500">Estufa Alpha atingiu maturidade ideal segundo a IA.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-md hover:bg-zinc-900 transition-colors cursor-pointer">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-zinc-100">VPD em Alerta</p>
                      <p className="text-xs text-zinc-500">Sala de Vegetação com umidade abaixo de 40%.</p>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Configurações */}
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Settings size={18} className="text-zinc-400 hover:text-white cursor-pointer transition-colors hover:scale-110 active:scale-95" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-950 border-zinc-800 text-zinc-300">
                <DropdownMenuLabel className="text-zinc-500">Configurações do Sistema</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-zinc-800" />
                <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">Calibração de Sensores IOT</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">Gerenciar Agentes de IA</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-zinc-800 focus:text-white cursor-pointer">Controle de Clima (API)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Botão Sair */}
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white ml-2">
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content & Footer permanecem inalterados */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Visão Geral da Plantação</h1>
            <p className="text-zinc-400 mt-1">Acompanhe as métricas vitais das suas estufas em tempo real.</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleExportar}
              variant="outline" 
              className="border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white gap-2 active:scale-95 transition-transform"
            >
              <Download size={16} />
              Exportar
            </Button>
            <Button 
              onClick={handleNovoLote}
              className="bg-emerald-600 hover:bg-emerald-500 text-white border-0 gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] active:scale-95 transition-all"
            >
              <Plus size={16} />
              Novo Lote
            </Button>
          </div>
        </div>

        <CultivationMetrics />
        <GreenhousesList />
        <AIPrediction />
        <SalesOverview />
      </main>

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