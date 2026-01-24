import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Programs from "./pages/Programs";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Trainers from "./pages/Trainers";
import Assessments from "./pages/Assessments";
import Nutrition from "./pages/Nutrition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path = "/programs" element = {<Programs/>}/>
            <Route path = "/assessments" element = {<Assessments/>}/>
            <Route path = "/nutrition" element = {<Nutrition/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/trainers" element = {<Trainers/>}/>
            <Route path = "/plan" element = {<Plan/>}/>
            <Route path = "/privacypolicy" element = {<PrivacyPolicy/>}/>
            <Route path = "/termsandconditions" element = {<TermsCondition/>}/>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
