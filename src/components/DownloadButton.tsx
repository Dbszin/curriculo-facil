import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ResumeData } from "@/types/resume";
import { exportToPDFATSDirect } from "@/utils/exportToPDF";
import { toast } from "@/components/ui/use-toast";

interface DownloadButtonProps {
  resumeData: ResumeData;
  onAfterDownload?: () => void;
}

const DownloadButton = ({ resumeData, onAfterDownload }: DownloadButtonProps) => {
  const handleDownload = async () => {
    if (!resumeData.personalInfo.fullName) {
      toast({
        title: "Atenção",
        description: "Preencha pelo menos o nome para gerar o currículo",
        variant: "destructive"
      });
      return;
    }

    try {
      await exportToPDFATSDirect(resumeData);
      toast({
        title: "Sucesso!",
        description: "Seu currículo ATS foi baixado com sucesso",
      });
      if (onAfterDownload) onAfterDownload();
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      toast({
        title: "Erro",
        description: "Erro ao gerar o PDF. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <Button onClick={handleDownload} size="lg" className="font-semibold">
      <Download className="h-5 w-5 mr-2" />
      Baixar Currículo ATS
    </Button>
  );
};

export default DownloadButton;
