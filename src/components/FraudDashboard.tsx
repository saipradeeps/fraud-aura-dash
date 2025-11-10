import { Home, TrendingUp, Plus, Bell, Menu, ChevronRight, AlertTriangle, Flag, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MiniChart } from "@/components/MiniChart";

const FraudDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="px-6 pt-8 pb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">Fraud</h1>
        <p className="text-sm text-muted-foreground">Estimated Affected Amount</p>
        <p className="text-5xl font-bold text-foreground mt-2">₹4,820.50</p>
      </header>

      {/* Tracking Card */}
      <div className="px-6 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <Card className="glass-card shadow-soft rounded-3xl p-6 border-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Tracking</p>
              <p className="text-2xl font-bold text-primary">₹1,230.00</p>
              <p className="text-xs text-muted-foreground mt-1">Detected</p>
            </div>
            <div className="flex-1 max-w-[140px] ml-4">
              <MiniChart />
            </div>
          </div>
        </Card>
      </div>

      {/* Section Title */}
      <div className="px-6 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-lg font-semibold text-foreground">Proactive Fraud Management</h2>
      </div>

      {/* Feature Cards */}
      <div className="px-6 space-y-4">
        <FeatureCard
          icon={<AlertTriangle className="w-6 h-6 text-primary" />}
          title="Anomaly Alert"
          description="Duplicate charges & unauthorized transactions"
          delay="0.3s"
          onClick={() => navigate("/anomaly-alert")}
        />
        <FeatureCard
          icon={<Flag className="w-6 h-6 text-primary" />}
          title="Flagged Transactions"
          description="Predict and list suspicious or unverified payments"
          delay="0.4s"
          onClick={() => navigate("/flagged-transactions")}
        />
        <FeatureCard
          icon={<Lightbulb className="w-6 h-6 text-primary" />}
          title="Tailored Recommendations"
          description="Personalized insights"
          delay="0.5s"
          onClick={() => navigate("/recommendations")}
        />
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elevated">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-between">
          <NavButton icon={<Home className="w-6 h-6" />} active />
          <NavButton icon={<TrendingUp className="w-6 h-6" />} />
          <button className="bg-primary text-primary-foreground rounded-full p-4 -mt-8 shadow-elevated hover:scale-105 transition-transform duration-200">
            <Plus className="w-6 h-6" />
          </button>
          <NavButton icon={<Bell className="w-6 h-6" />} />
          <NavButton icon={<Menu className="w-6 h-6" />} />
        </div>
      </nav>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  onClick: () => void;
}

const FeatureCard = ({ icon, title, description, delay, onClick }: FeatureCardProps) => {
  return (
    <Card 
      className="glass-card shadow-soft rounded-2xl p-5 border-0 hover:shadow-elevated transition-all duration-300 cursor-pointer animate-slide-up"
      style={{ animationDelay: delay }}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="bg-secondary rounded-2xl p-3 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      </div>
    </Card>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  active?: boolean;
}

const NavButton = ({ icon, active }: NavButtonProps) => {
  return (
    <button 
      className={`p-2 rounded-xl transition-colors duration-200 ${
        active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {icon}
    </button>
  );
};

export default FraudDashboard;
