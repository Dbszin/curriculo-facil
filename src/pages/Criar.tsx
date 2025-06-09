
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, Download } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Criar Currículo</h1>
                  <p className="text-sm text-gray-600">Preencha os dados e veja o resultado em tempo real</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <DownloadButton resumeData={resumeData} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Seus dados</h2>
                  <p className="text-gray-600">Preencha as informações abaixo para criar seu currículo</p>
                </div>
              </div>
              <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Download className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
                    <p className="text-gray-600">Veja como seu currículo ficará</p>
                  </div>
                </div>
              </div>
              <div className="sticky top-32">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Download Button */}
        <div className="lg:hidden mt-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Gostou do resultado?</h3>
            <DownloadButton resumeData={resumeData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Criar;
