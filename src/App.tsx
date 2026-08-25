import { useEffect } from "react";
import { useCartSync } from "@/hooks/useCartSync";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from "@/components/CookieConsent";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import BlogSacramentoDJs from "./pages/BlogSacramentoDJs";
import BlogSacStreetwear from "./pages/BlogSacStreetwear";
import BlogAries from "./pages/BlogAries";
import DigitalVault from "./pages/DigitalVault";
import DigitalProductDetail from "./pages/DigitalProductDetail";
import DigitalSuccess from "./pages/DigitalSuccess";
import MyPurchases from "./pages/MyPurchases";
import BlogLeo from "./pages/BlogLeo";
import BlogCancer from "./pages/BlogCancer";
import BlogGemini from "./pages/BlogGemini";
import BlogTaurus from "./pages/BlogTaurus";
import BlogPapaLegba from "./pages/BlogPapaLegba";
import BlogVirgo from "./pages/BlogVirgo";
import Auth from "./pages/Auth";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import Music from "./pages/Music";
import About from "./pages/About";
import SyncHub from "./pages/SyncHub";
import Sacramento from "./pages/Sacramento";
import IncerunmenProduct from "./pages/IncerunmenProduct";
import SmsOptIn from "./pages/SmsOptIn";
import Collections from "./pages/Collections";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const GlobalChatWidget = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://ionos.ai-voice-receptionist.com/chat-scripts-MqGN74WP/web-chat.js"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://ionos.ai-voice-receptionist.com/chat-scripts-MqGN74WP/web-chat.js";
    script.setAttribute("name", "web-chat");
    script.setAttribute("data-client-secret", "f7f68694-8fc1-4888-8d73-5ea471c6f676");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

const App = () => {
  useCartSync();
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GlobalChatWidget />
      <BrowserRouter>
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/dare2wear" element={<Dare2Wear />} />
          <Route path="/collections/imitable-lives" element={<ImitableLives />} />
          <Route path="/dj-services" element={<DJServices />} />
          <Route path="/youknowwedomagic" element={<YouKnowWeDoMagic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/crossroads-magic-music" element={<BlogCrossroads />} />
          <Route path="/blog/marie-laveau" element={<BlogMarieLaveau />} />
          <Route path="/blog/empaths-indigo-children" element={<BlogEmpathsIndigo />} />
          <Route path="/blog/best-djs-sacramento" element={<BlogSacramentoDJs />} />
          <Route path="/blog/sacramento-streetwear-boutiques" element={<BlogSacStreetwear />} />
          <Route path="/blog/aries-zodiac" element={<BlogAries />} />
          <Route path="/digital" element={<DigitalVault />} />
          <Route path="/digital/success" element={<DigitalSuccess />} />
          <Route path="/digital/:slug" element={<DigitalProductDetail />} />
          <Route path="/my-purchases" element={<MyPurchases />} />
          <Route path="/blog/leo-zodiac" element={<BlogLeo />} />
          <Route path="/blog/cancer-zodiac" element={<BlogCancer />} />
          <Route path="/blog/gemini-zodiac" element={<BlogGemini />} />
          <Route path="/blog/taurus-zodiac" element={<BlogTaurus />} />
          <Route path="/blog/papa-legba-vodun-history" element={<BlogPapaLegba />} />
          <Route path="/blog/virgo-zodiac" element={<BlogVirgo />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/sync-hub" element={<SyncHub />} />
          <Route path="/sacramento" element={<Sacramento />} />
          <Route path="/sms" element={<SmsOptIn />} />
          <Route path="/partner/:slug" element={<IncerunmenProduct />} />
          {/* Redirect short paths to collection routes */}
          <Route path="/dare2wear" element={<Navigate to="/collections/dare2wear" replace />} />
          <Route path="/imitable-lives" element={<Navigate to="/collections/imitable-lives" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
