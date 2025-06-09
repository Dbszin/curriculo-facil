
import { ResumeData } from "@/types/resume";

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
      <div 
        className="p-8" 
        style={{ 
          fontFamily: 'Arial, sans-serif !important', 
          lineHeight: '1.4', 
          color: '#000000 !important',
          backgroundColor: '#ffffff',
          fontSize: '14px'
        }}
      >
        {/* Header - ATS Optimized */}
        <div className="mb-8">
          <h1 style={{ 
            fontSize: '24px !important', 
            fontWeight: 'bold !important', 
            marginBottom: '8px',
            color: '#000000 !important',
            textAlign: 'left',
            fontFamily: 'Arial, sans-serif !important'
          }}>
            {resumeData.personalInfo.fullName || "Seu Nome Completo"}
          </h1>
          
          {resumeData.personalInfo.desiredPosition && (
            <div style={{ 
              fontSize: '16px !important', 
              fontWeight: 'normal !important',
              marginBottom: '12px',
              color: '#000000 !important',
              fontFamily: 'Arial, sans-serif !important'
            }}>
              {resumeData.personalInfo.desiredPosition}
            </div>
          )}
          
          <div style={{ 
            fontSize: '14px !important', 
            color: '#000000 !important', 
            marginBottom: '4px',
            fontFamily: 'Arial, sans-serif !important'
          }}>
            {resumeData.personalInfo.email && (
              <span style={{ marginRight: '16px' }}>
                Email: {resumeData.personalInfo.email}
              </span>
            )}
            {resumeData.personalInfo.phone && (
              <span style={{ marginRight: '16px' }}>
                Telefone: {resumeData.personalInfo.phone}
              </span>
            )}
          </div>
          
          {resumeData.personalInfo.address && (
            <div style={{ 
              fontSize: '14px !important', 
              color: '#000000 !important',
              fontFamily: 'Arial, sans-serif !important'
            }}>
              Endereço: {resumeData.personalInfo.address}
            </div>
          )}
        </div>

        {/* Professional Summary - ATS Section */}
        {resumeData.professionalSummary && (
          <div className="mb-8">
            <h2 style={{ 
              fontSize: '18px !important', 
              fontWeight: 'bold !important', 
              marginBottom: '12px',
              color: '#000000 !important',
              borderBottom: '1px solid #000000',
              paddingBottom: '4px',
              fontFamily: 'Arial, sans-serif !important'
            }}>
              RESUMO PROFISSIONAL
            </h2>
            <p style={{ 
              fontSize: '14px !important', 
              color: '#000000 !important', 
              lineHeight: '1.6',
              textAlign: 'justify',
              margin: '0',
              fontFamily: 'Arial, sans-serif !important'
            }}>
              {resumeData.professionalSummary}
            </p>
          </div>
        )}

        {/* Experience - ATS Optimized */}
        {resumeData.experiences.length > 0 && (
          <div className="mb-8">
            <h2 style={{ 
              fontSize: '18px !important', 
              fontWeight: 'bold !important', 
              marginBottom: '12px',
              color: '#000000 !important',
              borderBottom: '1px solid #000000',
              paddingBottom: '4px',
              fontFamily: 'Arial, sans-serif !important'
            }}>
              EXPERIÊNCIA PROFISSIONAL
            </h2>
            <div>
              {resumeData.experiences.map((experience, index) => (
                <div key={experience.id} style={{ marginBottom: index < resumeData.experiences.length - 1 ? '20px' : '0' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <h3 style={{ 
                      fontSize: '16px !important', 
                      fontWeight: 'bold !important', 
                      margin: '0',
                      color: '#000000 !important',
                      fontFamily: 'Arial, sans-serif !important'
                    }}>
                      {experience.position || "Cargo"}
                    </h3>
                    <div style={{ 
                      fontSize: '14px !important', 
                      fontWeight: 'bold !important',
                      color: '#000000 !important',
                      margin: '4px 0',
                      fontFamily: 'Arial, sans-serif !important'
                    }}>
                      {experience.company || "Nome da Empresa"}
                    </div>
                    <div style={{ 
                      fontSize: '14px !important', 
                      color: '#000000 !important',
                      fontStyle: 'italic',
                      fontFamily: 'Arial, sans-serif !important'
                    }}>
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
                    <div style={{ 
                      fontSize: '14px !important', 
                      color: '#000000 !important', 
                      lineHeight: '1.5',
                      marginLeft: '16px',
                      fontFamily: 'Arial, sans-serif !important'
                    }}>
                      <p style={{ margin: '0', textAlign: 'justify' }}>
                        • {experience.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education - ATS Format */}
        {resumeData.education.length > 0 && (
          <div className="mb-8">
            <h2 style={{ 
              fontSize: '18px !important', 
              fontWeight: 'bold !important', 
              marginBottom: '12px',
              color: '#000000 !important',
              borderBottom: '1px solid #000000',
              paddingBottom: '4px',
              fontFamily: 'Arial, sans-serif !important'
            }}>
              FORMAÇÃO ACADÊMICA
            </h2>
            <div>
              {resumeData.education.map((education, index) => (
                <div key={education.id} style={{ marginBottom: index < resumeData.education.length - 1 ? '16px' : '0' }}>
                  <h3 style={{ 
                    fontSize: '16px !important', 
                    fontWeight: 'bold !important', 
                    margin: '0',
                    color: '#000000 !important',
                    fontFamily: 'Arial, sans-serif !important'
                  }}>
                    {education.degree || "Grau"} em {education.fieldOfStudy || "Área de Estudo"}
                  </h3>
                  <div style={{ 
                    fontSize: '14px !important', 
                    fontWeight: 'bold !important',
                    color: '#000000 !important',
                    margin: '4px 0',
                    fontFamily: 'Arial, sans-serif !important'
                  }}>
                    {education.institution || "Nome da Instituição"}
                  </div>
                  <div style={{ 
                    fontSize: '14px !important', 
                    color: '#000000 !important',
                    fontStyle: 'italic',
                    fontFamily: 'Arial, sans-serif !important'
                  }}>
                    {education.startDate && (
                      <>
                        {formatYearDate(education.startDate)} - {" "}
                        {education.isCurrentStudy ? "Cursando" : 
                          education.endDate ? formatYearDate(education.endDate) : ""}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills - ATS Keyword Optimized */}
        {resumeData.skills.length > 0 && (
          <div className="mb-8">
            <h2 style={{ 
              fontSize: '18px !important', 
              fontWeight: 'bold !important', 
              marginBottom: '12px',
              color: '#000000 !important',
              borderBottom: '1px solid #000000',
              paddingBottom: '4px',
              fontFamily: 'Arial, sans-serif !important'
            }}>
              COMPETÊNCIAS E HABILIDADES
            </h2>
            <div>
              {resumeData.skills.map((skill, index) => (
                <div key={skill.id} style={{ 
                  display: 'inline-block',
                  marginRight: '8px',
                  marginBottom: '8px'
                }}>
                  <span style={{ 
                    fontSize: '14px !important',
                    color: '#000000 !important',
                    fontWeight: 'normal !important',
                    fontFamily: 'Arial, sans-serif !important'
                  }}>
                    {skill.name || "Habilidade"} ({skill.level})
                    {index < resumeData.skills.length - 1 ? " •" : ""}
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
          <div style={{ 
            textAlign: 'center', 
            padding: '48px 0', 
            color: '#666666',
            fontSize: '14px !important',
            fontFamily: 'Arial, sans-serif !important'
          }}>
            <p>Preencha os dados no formulário para ver seu currículo aqui</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
