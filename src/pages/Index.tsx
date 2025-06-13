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
          <p className="text-muted-foreground text-sm mb-4">&copy; 2025 Douglas Batista. Ferramenta gratuita para criação de currículos.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/douglas-batista-295458230/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/Dbszin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
