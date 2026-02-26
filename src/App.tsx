import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Dare2Wear from "./pages/Dare2Wear";
import ImitableLives from "./pages/ImitableLives";
import DJServices from "./pages/DJServices";
import YouKnowWeDoMagic from "./pages/YouKnowWeDoMagic";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogCrossroads from "./pages/BlogCrossroads";
import BlogMarieLaveau from "./pages/BlogMarieLaveau";
import BlogEmpathsIndigo from "./pages/BlogEmpathsIndigo";
import Auth from "./pages/Auth";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import Music from "./pages/Music";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections/dare2wear" element={<Dare2Wear />} />
          <Route path="/collections/imitable-lives" element={<ImitableLives />} />
          <Route path="/dj-services" element={<DJServices />} />
          <Route path="/youknowwedomagic" element={<YouKnowWeDoMagic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/crossroads-magic-music" element={<BlogCrossroads />} />
          <Route path="/blog/marie-laveau" element={<BlogMarieLaveau />} />
          <Route path="/blog/empaths-indigo-children" element={<BlogEmpathsIndigo />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/music" element={<Music />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
