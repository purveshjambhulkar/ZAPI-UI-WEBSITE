import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Components from "./pages/Components";
import ComponentButton from "./pages/ComponentButton";
import ComponentCheckbox from "./pages/ComponentCheckbox";
import ComponentInput from "./pages/ComponentInput";
import ComponentTextarea from "./pages/ComponentTextarea";
import ComponentCarousel from "./pages/ComponentCarousel";
import ComponentAvatar from "./pages/ComponentAvatar";
import ComponentBadge from "./pages/ComponentBadge";
import ComponentSelect from "./pages/ComponentSelect";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/button" element={<ComponentButton />} />
            <Route path="/components/checkbox" element={<ComponentCheckbox />} />
            <Route path="/components/input" element={<ComponentInput />} />
            <Route path="/components/textarea" element={<ComponentTextarea />} />
            <Route path="/components/carousel" element={<ComponentCarousel />} />
            <Route path="/components/avatar" element={<ComponentAvatar />} />
            <Route path="/components/badge" element={<ComponentBadge />} />
            <Route path="/components/select" element={<ComponentSelect />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
