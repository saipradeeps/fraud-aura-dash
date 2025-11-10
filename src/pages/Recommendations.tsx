import { ArrowLeft, Lightbulb, Shield, Bell, Lock, Eye, CreditCard, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Recommendations = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: 1,
      title: "Enable Two-Factor Authentication",
      description: "Add an extra layer of security to your account. Reduce unauthorized access risk by 99.9%.",
      priority: "high",
      icon: Lock,
      action: "Enable Now",
      impact: "High Security Impact"
    },
    {
      id: 2,
      title: "Set Transaction Limits",
      description: "Configure daily spending limits for online transactions. Currently no limit set.",
      priority: "medium",
      icon: CreditCard,
      action: "Configure",
      impact: "Medium Security Impact"
    },
    {
      id: 3,
      title: "Review Device Permissions",
      description: "3 unrecognized devices have accessed your account in the past month.",
      priority: "high",
      icon: Smartphone,
      action: "Review Devices",
      impact: "High Security Impact"
    },
    {
      id: 4,
      title: "Enable Real-Time Alerts",
      description: "Get instant notifications for all transactions above ₹5,000.",
      priority: "medium",
      icon: Bell,
      action: "Turn On",
      impact: "Medium Security Impact"
    },
    {
      id: 5,
      title: "Activate Card Lock Feature",
      description: "Temporarily freeze your card when not in use. Quick toggle available.",
      priority: "low",
      icon: Shield,
      action: "Activate",
      impact: "Low Security Impact"
    },
    {
      id: 6,
      title: "Monitor Dark Web Activity",
      description: "We'll scan the dark web for your credentials and alert you immediately.",
      priority: "high",
      icon: Eye,
      action: "Start Monitoring",
      impact: "High Security Impact"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-orange-500 text-white";
      case "low": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="px-6 pt-8 pb-6 animate-fade-in">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-primary/10 rounded-2xl p-3">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Recommendations</h1>
        </div>
        <p className="text-sm text-muted-foreground">Personalized security insights for you</p>
      </header>

      {/* Score Card */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <Card className="glass-card shadow-soft rounded-3xl p-6 border-0 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Your Security Score</p>
              <p className="text-4xl font-bold text-primary">72/100</p>
              <p className="text-sm text-muted-foreground mt-2">Good • Can be improved</p>
            </div>
            <div className="relative w-24 h-24">
              <svg className="transform -rotate-90" width="96" height="96">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="hsl(var(--muted))"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.72)}`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommendations List */}
      <div className="px-6 space-y-4">
        {recommendations.map((rec, index) => {
          const IconComponent = rec.icon;
          return (
            <Card 
              key={rec.id}
              className="glass-card shadow-soft rounded-2xl p-5 border-0 hover:shadow-elevated transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-2xl p-3 flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{rec.title}</h3>
                    <Badge className={`${getPriorityColor(rec.priority)} rounded-full px-2 py-1 text-xs whitespace-nowrap`}>
                      {rec.priority.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {rec.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      💡 {rec.impact}
                    </span>
                    <button className="text-sm font-semibold text-primary hover:underline">
                      {rec.action} →
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
