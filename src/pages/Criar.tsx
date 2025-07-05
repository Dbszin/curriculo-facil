import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import DownloadButton from "@/components/DownloadButton";
import { ResumeData } from "@/types/resume";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    desiredPosition: ""
  },
  professionalSummary: "",
  experiences: [],
  education: [],
  skills: []
};

const Criar = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [showClearModal, setShowClearModal] = useState(false);

  const handleAfterDownload = () => {
    setShowClearModal(true);
  };

  const handleClear = () => {
    setResumeData(initialResumeData);
    setShowClearModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-primary p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Criar Currículo</h1>
                  <p className="text-sm text-muted-foreground">Preencha os dados e veja o resultado</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <DownloadButton resumeData={resumeData} onAfterDownload={handleAfterDownload} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-muted p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Seus dados</h2>
                  <p className="text-muted-foreground">Preencha as informações abaixo</p>
                </div>
              </div>
              <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6 self-start">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-muted p-2 rounded-lg">
                    <Download className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Preview</h2>
                    <p className="text-muted-foreground">Veja como ficará seu currículo</p>
                  </div>
                </div>
              </div>
              <div className="sticky top-20">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Download Button */}
        <div className="block md:hidden mt-8 text-center">
          <DownloadButton resumeData={resumeData} onAfterDownload={handleAfterDownload} />
        </div>
      </main>

      {/* Modal de confirmação */}
      <Dialog open={showClearModal} onOpenChange={setShowClearModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deseja limpar seus dados?</DialogTitle>
          </DialogHeader>
          <p>Após baixar o PDF, você pode limpar os dados do formulário para sua privacidade.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowClearModal(false)}>
              Não, manter dados
            </Button>
            <Button variant="destructive" onClick={handleClear}>
              Sim, limpar tudo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Criar;
