import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import { DesignVerseBadges } from "./components/design-verse-badges"

const queryClient = new QueryClient()
const resume = './assets/Zoey_Nguyen_Resume.pdf';
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Index />}
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
