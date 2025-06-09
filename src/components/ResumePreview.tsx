
import { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin } from "lucide-react";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const formatYearDate = (year: string) => {
    return year || "";
  };

  return (
    <div id="resume-preview" className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto">
      <div className="p-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {resumeData.personalInfo.fullName || "Seu Nome"}
          </h1>
          {resumeData.personalInfo.desiredPosition && (
            <h2 className="text-xl text-blue-600 font-medium mb-4">
              {resumeData.personalInfo.desiredPosition}
            </h2>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.address && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{resumeData.personalInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {resumeData.professionalSummary && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Resumo Profissional
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              {resumeData.professionalSummary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experiences.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-1">
              Experiência Profissional
            </h3>
            <div className="space-y-4">
              {resumeData.experiences.map((experience) => (
                <div key={experience.id} className="border-l-2 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {experience.position || "Cargo"}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {experience.company || "Empresa"}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {experience.startDate && (
                        <>
                          {formatDate(experience.startDate)} - {" "}
                          {experience.isCurrentJob ? "Atual" : 
                            experience.endDate ? formatDate(experience.endDate) : ""}
                        </>
                      )}
                    </div>
                  </div>
                  {experience.description && (
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                      {experience.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-1">
              Formação
            </h3>
            <div className="space-y-3">
              {resumeData.education.map((education) => (
                <div key={education.id} className="border-l-2 border-green-200 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {education.degree || "Grau"} em {education.fieldOfStudy || "Curso"}
                      </h4>
                      <p className="text-green-600 font-medium">
                        {education.institution || "Instituição"}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {education.startDate && (
                        <>
                          {formatYearDate(education.startDate)} - {" "}
                          {education.isCurrentStudy ? "Cursando" : 
                            education.endDate ? formatYearDate(education.endDate) : ""}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-1">
              Habilidades
            </h3>
            <div className="space-y-2">
              {resumeData.skills.map((skill) => (
                <div key={skill.id} className="flex items-center justify-between py-1">
                  <span className="text-gray-700 font-medium flex-1">
                    {skill.name || "Habilidade"}
                  </span>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full ml-4 flex-shrink-0">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!resumeData.personalInfo.fullName && 
         !resumeData.professionalSummary && 
         resumeData.experiences.length === 0 && 
         resumeData.education.length === 0 && 
         resumeData.skills.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>Preencha os dados no formulário para ver seu currículo aqui</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
