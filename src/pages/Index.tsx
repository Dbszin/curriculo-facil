
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Download, User, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              CurrículoFácil
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium mb-8">
            100% Gratuito • Sem Cadastro • Anônimo
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Crie seu currículo 
            <span className="text-primary"> profissional</span>
            <br />
            <span className="text-4xl md:text-5xl">em minutos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A ferramenta mais simples para criar currículos profissionais. 
            Preencha seus dados, visualize em tempo real e baixe em PDF.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link to="/criar">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar agora
              </Button>
            </Link>
            <div className="flex items-center text-sm text-muted-foreground">
              <Shield className="h-4 w-4 mr-2" />
              Seus dados ficam apenas no seu navegador
            </div>
          </div>

          {/* Como funciona */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="border border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-muted w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <User className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">1. Preencha seus dados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interface simples para inserir suas informações e experiências
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-muted w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">2. Visualize em tempo real</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Veja seu currículo sendo criado instantaneamente
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardContent className="p-8 text-center">
                <div className="bg-muted w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Download className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">3. Baixe em PDF</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Download em alta qualidade, pronto para usar
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Benefícios */}
          <div className="mt-20 bg-card rounded-2xl border border-border p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-10">Por que escolher o CurrículoFácil?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-muted p-1.5 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-foreground mb-1">100% gratuito</h4>
                  <p className="text-muted-foreground text-sm">Sempre grátis, sem taxas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-muted p-1.5 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-foreground mb-1">Sem cadastro</h4>
                  <p className="text-muted-foreground text-sm">Comece imediatamente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-muted p-1.5 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-foreground mb-1">Design profissional</h4>
                  <p className="text-muted-foreground text-sm">Layout limpo e elegante</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-muted p-1.5 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-foreground mb-1">PDF de alta qualidade</h4>
                  <p className="text-muted-foreground text-sm">Download nítido</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-muted p-1.5 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-foreground mb-1">Totalmente anônimo</h4>
                  <p className="text-muted-foreground text-sm">Dados seguros</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-muted p-1.5 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-foreground mb-1">Mobile friendly</h4>
                  <p className="text-muted-foreground text-sm">Funciona no celular</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Pronto para criar seu currículo?</h3>
            <p className="text-lg text-muted-foreground mb-8">Leva menos de 5 minutos</p>
            <Link to="/criar">
              <Button size="lg" className="text-lg px-8 py-6">
                Criar meu currículo agora
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-primary p-1.5 rounded-lg">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-medium text-foreground">CurrículoFácil</span>
          </div>
          <p className="text-muted-foreground text-sm">&copy; 2025 CurrículoFácil. Ferramenta gratuita para criação de currículos.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
