
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import DownloadButton from "@/components/DownloadButton";
import { ResumeData } from "@/types/resume";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">Criar Currículo</h1>
              </div>
            </div>
            <DownloadButton resumeData={resumeData} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Seus dados</h2>
              <p className="text-gray-600">Preencha as informações abaixo para criar seu currículo</p>
            </div>
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview</h2>
              <p className="text-gray-600">Veja como seu currículo ficará</p>
            </div>
            <div className="sticky top-8">
              <ResumePreview resumeData={resumeData} />
            </div>
          </div>
        </div>

        {/* Mobile Download Button */}
        <div className="lg:hidden mt-8 text-center">
          <DownloadButton resumeData={resumeData} />
        </div>
      </main>
    </div>
  );
};

export default Criar;
