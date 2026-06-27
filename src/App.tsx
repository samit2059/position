import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AmbientLayout from "@/components/AmbientLayout";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import Footer from "@/components/ui/footer";

// Lazy-loaded pages for optimized performance
const Home = lazy(() => import("@/pages/Home"));
const Work = lazy(() => import("@/pages/Work"));
const Skills = lazy(() => import("@/pages/skills"));
const Certificates = lazy(() => import("@/pages/certificate"));
const Education = lazy(() => import("@/pages/education"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AmbientLayout>
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/certificate' element={<Certificates />} />
              <Route path='/education' element={<Education />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </AmbientLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

