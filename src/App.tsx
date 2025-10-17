import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfessionalPortfolio from "./pages/ProfessionalPortfolio"
import NotFound from "./pages/NotFound"
import { DesignVerseBadges } from "./components/design-verse-badges"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/zoey-qa"
            element={<ProfessionalPortfolio />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    <DesignVerseBadges />
  </QueryClientProvider>
)

export default App
