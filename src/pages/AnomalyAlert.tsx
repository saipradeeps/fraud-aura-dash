import { ArrowLeft, AlertTriangle, CreditCard, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AnomalyAlert = () => {
  const navigate = useNavigate();

  const anomalies = [
    {
      id: 1,
      type: "Duplicate Charge",
      merchant: "Amazon Marketplace",
      amount: "₹2,499.00",
      date: "Oct 28, 2024",
      location: "Online",
      status: "high",
      description: "Same amount charged twice within 2 hours"
    },
    {
      id: 2,
      type: "Unauthorized Transaction",
      merchant: "Unknown Merchant XYZ",
      amount: "₹5,430.50",
      date: "Oct 27, 2024",
      location: "Mumbai, India",
      status: "critical",
      description: "Transaction from unfamiliar location"
    },
    {
      id: 3,
      type: "Duplicate Charge",
      merchant: "Netflix Subscription",
      amount: "₹649.00",
      date: "Oct 25, 2024",
      location: "Online",
      status: "medium",
      description: "Monthly subscription charged twice"
    },
    {
      id: 4,
      type: "Unusual Amount",
      merchant: "Fuel Station",
      amount: "₹12,340.00",
      date: "Oct 24, 2024",
      location: "Delhi, India",
      status: "high",
      description: "Amount 10x higher than usual"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "high": return "bg-orange-500 text-white";
      case "medium": return "bg-yellow-500 text-white";
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
          <div className="bg-destructive/10 rounded-2xl p-3">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Anomaly Alerts</h1>
        </div>
        <p className="text-sm text-muted-foreground">Duplicate charges & unauthorized transactions</p>
      </header>

      {/* Stats */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="grid grid-cols-3 gap-3">
          <Card className="glass-card shadow-soft rounded-2xl p-4 border-0 text-center">
            <p className="text-2xl font-bold text-destructive">4</p>
            <p className="text-xs text-muted-foreground mt-1">Critical</p>
          </Card>
          <Card className="glass-card shadow-soft rounded-2xl p-4 border-0 text-center">
            <p className="text-2xl font-bold text-orange-500">7</p>
            <p className="text-xs text-muted-foreground mt-1">High Risk</p>
          </Card>
          <Card className="glass-card shadow-soft rounded-2xl p-4 border-0 text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground mt-1">Resolved</p>
          </Card>
        </div>
      </div>

      {/* Anomaly List */}
      <div className="px-6 space-y-4">
        {anomalies.map((anomaly, index) => (
          <Card 
            key={anomaly.id}
            className="glass-card shadow-soft rounded-2xl p-5 border-0 hover:shadow-elevated transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <Badge className={`${getStatusColor(anomaly.status)} rounded-full px-3 py-1`}>
                {anomaly.type}
              </Badge>
              <span className="text-lg font-bold text-foreground">{anomaly.amount}</span>
            </div>
            
            <h3 className="font-semibold text-foreground mb-2">{anomaly.merchant}</h3>
            <p className="text-sm text-muted-foreground mb-4">{anomaly.description}</p>
            
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{anomaly.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{anomaly.location}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnomalyAlert;
