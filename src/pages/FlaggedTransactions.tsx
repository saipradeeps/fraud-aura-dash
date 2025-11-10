import { ArrowLeft, Flag, ShoppingBag, Coffee, Smartphone, Plane, ShoppingCart, Fuel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FlaggedTransactions = () => {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      merchant: "International Electronics Store",
      amount: "₹45,999.00",
      date: "Oct 29, 2024",
      time: "11:42 PM",
      category: "Electronics",
      icon: Smartphone,
      risk: "high",
      reason: "Large amount + Late night transaction"
    },
    {
      id: 2,
      merchant: "Unknown Travel Agency",
      amount: "₹89,500.00",
      date: "Oct 28, 2024",
      time: "2:15 AM",
      category: "Travel",
      icon: Plane,
      risk: "critical",
      reason: "Unverified merchant + Unusual timing"
    },
    {
      id: 3,
      merchant: "Coffee House Chain",
      amount: "₹850.00",
      date: "Oct 28, 2024",
      time: "3:30 PM",
      category: "Food & Dining",
      icon: Coffee,
      risk: "low",
      reason: "Minor deviation from pattern"
    },
    {
      id: 4,
      merchant: "Online Shopping Mall",
      amount: "₹15,670.00",
      date: "Oct 27, 2024",
      time: "10:20 PM",
      category: "Shopping",
      icon: ShoppingCart,
      risk: "medium",
      reason: "First-time merchant"
    },
    {
      id: 5,
      merchant: "Luxury Brand Outlet",
      amount: "₹32,400.00",
      date: "Oct 26, 2024",
      time: "8:45 PM",
      category: "Shopping",
      icon: ShoppingBag,
      risk: "medium",
      reason: "Above average spending"
    },
    {
      id: 6,
      merchant: "Fuel Pump Services",
      amount: "₹18,900.00",
      date: "Oct 25, 2024",
      time: "11:30 PM",
      category: "Transportation",
      icon: Fuel,
      risk: "high",
      reason: "Amount 15x higher than usual"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "high": return "bg-orange-500 text-white";
      case "medium": return "bg-yellow-500 text-white";
      case "low": return "bg-primary/20 text-primary";
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
          <div className="bg-orange-500/10 rounded-2xl p-3">
            <Flag className="w-6 h-6 text-orange-500" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Flagged</h1>
        </div>
        <p className="text-sm text-muted-foreground">Suspicious or unverified payments</p>
      </header>

      {/* Filter Stats */}
      <div className="px-6 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Badge className="bg-primary text-primary-foreground rounded-full px-4 py-2 whitespace-nowrap">
            All (23)
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 whitespace-nowrap">
            Critical (2)
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 whitespace-nowrap">
            High Risk (8)
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 whitespace-nowrap">
            Medium (10)
          </Badge>
          <Badge variant="outline" className="rounded-full px-4 py-2 whitespace-nowrap">
            Low (3)
          </Badge>
        </div>
      </div>

      {/* Transaction List */}
      <div className="px-6 space-y-4">
        {transactions.map((transaction, index) => {
          const IconComponent = transaction.icon;
          return (
            <Card 
              key={transaction.id}
              className="glass-card shadow-soft rounded-2xl p-5 border-0 hover:shadow-elevated transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-2xl p-3 flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{transaction.merchant}</h3>
                    <span className="text-lg font-bold text-foreground whitespace-nowrap">{transaction.amount}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">
                    {transaction.date} • {transaction.time}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`${getRiskColor(transaction.risk)} rounded-full px-3 py-1 text-xs`}>
                      {transaction.risk.toUpperCase()} RISK
                    </Badge>
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
                      {transaction.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    ⚠️ {transaction.reason}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FlaggedTransactions;
