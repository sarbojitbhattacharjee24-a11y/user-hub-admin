import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Lock, Database } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              User Management System
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure, scalable, and comprehensive user administration platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">JWT Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Token-based security with auto-refresh
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">User Management</h3>
              <p className="text-sm text-muted-foreground">
                Complete CRUD operations
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
              <Lock className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Role-Based Access</h3>
              <p className="text-sm text-muted-foreground">
                Granular permissions control
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
              <Database className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Secure Database</h3>
              <p className="text-sm text-muted-foreground">
                Row-level security enabled
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
