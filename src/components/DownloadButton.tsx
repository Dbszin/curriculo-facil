
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ResumeData } from "@/types/resume";
import { exportToPDF } from "@/utils/exportToPDF";
import { toast } from "@/components/ui/use-toast";

interface DownloadButtonProps {
  resumeData: ResumeData;
}

const DownloadButton = ({ resumeData }: DownloadButtonProps) => {
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
      await exportToPDF(resumeData);
      toast({
        title: "Sucesso!",
        description: "Seu currículo foi baixado com sucesso",
      });
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
      Baixar Currículo em PDF
    </Button>
  );
};

export default DownloadButton;
