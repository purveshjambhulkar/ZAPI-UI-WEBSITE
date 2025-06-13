
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
import ComponentRadioButton from "./pages/ComponentRadioButton";
import ComponentTextarea from "./pages/ComponentTextarea";
import ComponentCard from "./pages/ComponentCard";
import ComponentNavbar from "./pages/ComponentNavbar";
import ComponentAlert from "./pages/ComponentAlert";
import ComponentProgress from "./pages/ComponentProgress";
import ComponentToast from "./pages/ComponentToast";
import ComponentCarousel from "./pages/ComponentCarousel";
import ComponentAvatar from "./pages/ComponentAvatar";
import ComponentBadge from "./pages/ComponentBadge";
import ComponentTable from "./pages/ComponentTable";
import ComponentTabs from "./pages/ComponentTabs";
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
            <Route path="/components/radio-group" element={<ComponentRadioButton />} />
            <Route path="/components/textarea" element={<ComponentTextarea />} />
            <Route path="/components/card" element={<ComponentCard />} />
            <Route path="/components/navbar" element={<ComponentNavbar />} />
            <Route path="/components/alert" element={<ComponentAlert />} />
            <Route path="/components/progress" element={<ComponentProgress />} />
            <Route path="/components/toast" element={<ComponentToast />} />
            <Route path="/components/carousel" element={<ComponentCarousel />} />
            <Route path="/components/avatar" element={<ComponentAvatar />} />
            <Route path="/components/badge" element={<ComponentBadge />} />
            <Route path="/components/table" element={<ComponentTable />} />
            <Route path="/components/tabs" element={<ComponentTabs />} />
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
