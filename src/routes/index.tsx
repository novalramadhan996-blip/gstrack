
import { useEffect, useState } from "react";
import { Access } from "../components/gstrack/Access";
import { BootSequence } from "../components/gstrack/BootSequence";
import { Briefing } from "../components/gstrack/Briefing";
import { Footer } from "../components/gstrack/Footer";
import { Hero } from "../components/gstrack/Hero";
import { LiveOps } from "../components/gstrack/LiveOps";
import { Modules } from "../components/gstrack/Modules";
import { Outcomes } from "../components/gstrack/Outcomes";
import { StatusBar } from "../components/gstrack/StatusBar";
import { SystemOverview } from "../components/gstrack/SystemOverview";
import { VisualIntel } from "../components/gstrack/VisualIntel";



function Index() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("gst-booted")) setBooted(true);
  }, []);

  const handleDone = () => {
    sessionStorage.setItem("gst-booted", "1");
    setBooted(true);
  };

  return (
    <main className="relative min-h-screen text-foreground antialiased">
      {!booted && <BootSequence onDone={handleDone} />}
      <StatusBar />
      <Hero />
      <Briefing />
      <SystemOverview />
      <Modules />
      <LiveOps />
      <VisualIntel />
      <Outcomes />
      <Access />
      <Footer />
    </main>
  );
}
export default Index;