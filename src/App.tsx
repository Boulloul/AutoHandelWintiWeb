import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import Home from "@/pages/Home";
import Cars from "@/pages/Cars";
import CarDetail from "@/pages/CarDetail";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/components/ThemeProvider"
import { ThemeToggle } from "@/components/ThemeToggle"
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <div className="flex-1 flex flex-col">
                <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 sticky top-0 z-50">
                  <div className="flex items-center gap-2">
                    <SidebarTrigger className="mr-3" />
                    <span className="font-bold text-xl">Welcome to Jammal's Garage</span>
                  </div>

                  <div>
                    <ThemeToggle />
                  </div>
                </header>

                <main className="flex-1 bg-accent">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/cars" element={<Cars />} />
                    <Route path="/cars/:id" element={<CarDetail />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
