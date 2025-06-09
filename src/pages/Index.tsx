
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Download, User, Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CurrículoFácil
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            100% Gratuito • Sem Cadastro • Anônimo
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Crie seu currículo 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 
              profissional
            </span>
            <br />
            <span className="text-5xl md:text-6xl">em minutos</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            A ferramenta mais simples e rápida para criar currículos profissionais. 
            Preencha seus dados, visualize em tempo real e baixe em PDF com um clique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/criar">
              <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                <Zap className="h-5 w-5 mr-2" />
                Começar agora
              </Button>
            </Link>
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="h-4 w-4 mr-2 text-green-600" />
              Seus dados ficam apenas no seu navegador
            </div>
          </div>

          {/* Como funciona */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-10 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">1. Preencha seus dados</h3>
                <p className="text-gray-600 leading-relaxed">
                  Interface intuitiva com campos organizados para inserir suas informações, experiências e habilidades
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-10 text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">2. Visualize em tempo real</h3>
                <p className="text-gray-600 leading-relaxed">
                  Veja seu currículo sendo criado instantaneamente com um design profissional e moderno
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-10 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Download className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">3. Baixe em PDF</h3>
                <p className="text-gray-600 leading-relaxed">
                  Download instantâneo em alta qualidade, pronto para enviar para empresas e recrutadores
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Benefícios */}
          <div className="mt-24 bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Por que escolher o CurrículoFácil?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">100% gratuito</h4>
                  <p className="text-gray-600 text-sm">Sempre grátis, sem taxas ocultas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">Sem cadastro</h4>
                  <p className="text-gray-600 text-sm">Comece imediatamente</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">Design profissional</h4>
                  <p className="text-gray-600 text-sm">Layout moderno e elegante</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">PDF de alta qualidade</h4>
                  <p className="text-gray-600 text-sm">Download nítido e profissional</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">Totalmente anônimo</h4>
                  <p className="text-gray-600 text-sm">Seus dados não saem do navegador</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">Mobile friendly</h4>
                  <p className="text-gray-600 text-sm">Funciona perfeitamente no celular</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pronto para criar seu currículo?</h3>
            <p className="text-xl text-gray-600 mb-8">Leva menos de 5 minutos para ter um currículo profissional</p>
            <Link to="/criar">
              <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                Criar meu currículo agora
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">CurrículoFácil</span>
          </div>
          <p className="text-gray-400">&copy; 2024 CurrículoFácil. Ferramenta gratuita para criação de currículos profissionais.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
