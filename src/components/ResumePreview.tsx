import { ResumeData } from "@/types/resume";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    // Espera formato 'YYYY-MM'
    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
    if (!month || !year) return dateString;
    const monthIndex = parseInt(month, 10) - 1;
    const monthName = monthNames[monthIndex];
    if (monthName === undefined) {
      console.error(`Mês inválido: ${month}`);
      return "Mês inválido";
    }
    return `${monthName} ${year}`;
  };

  const formatYearDate = (year: string) => {
    return year || "";
  };

  return (
    <div style={wrapperStyle}>
      <div id="resume-preview" style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={nameStyle}>
            {resumeData.personalInfo.fullName || "Seu Nome Completo"}
          </div>

          {resumeData.personalInfo.desiredPosition && (
            <div style={positionStyle}>
              {resumeData.personalInfo.desiredPosition}
            </div>
          )}

          <div style={contactStyle}>
            {resumeData.personalInfo.email && (
              <span style={{ marginRight: '15px' }}>
                Email: {resumeData.personalInfo.email}
              </span>
            )}
            {resumeData.personalInfo.phone && (
              <span style={{ marginRight: '15px' }}>
                Telefone: {resumeData.personalInfo.phone}
              </span>
            )}
          </div>

          {resumeData.personalInfo.address && (
            <div style={contactStyle}>
              Endereço: {resumeData.personalInfo.address}
            </div>
          )}
        </div>

        {/* Professional Summary */}
        {resumeData.professionalSummary && (
          <>
            <div style={sectionTitleStyle}>
              RESUMO PROFISSIONAL
            </div>
            <div style={contentStyle}>
              {resumeData.professionalSummary}
            </div>
          </>
        )}

        {/* Experience */}
        {resumeData.experiences.length > 0 && (
          <div>
            <div style={sectionTitleStyle}>
              EXPERIÊNCIA PROFISSIONAL
            </div>
            {resumeData.experiences.map((experience, index) => (
              <div key={experience.id} style={{ marginBottom: '15px' }}>
                <div style={jobTitleStyle}>
                  {experience.position || "Cargo"}
                </div>
                <div style={companyStyle}>
                  {experience.company || "Nome da Empresa"}
                </div>
                <div style={dateStyle}>
                  {experience.startDate && (
                    <>
                      {formatDate(experience.startDate)} - {" "}
                      {experience.isCurrentJob ? "Atual" :
                        experience.endDate ? formatDate(experience.endDate) : ""}
                    </>
                  )}
                </div>
                {experience.description && (
                  <div style={contentStyle}>
                    • {experience.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div>
            <div style={sectionTitleStyle}>
              FORMAÇÃO ACADÊMICA
            </div>
            {resumeData.education.map((education, index) => (
              <div key={education.id} style={{ marginBottom: '15px' }}>
                <div style={jobTitleStyle}>
                  {education.degree || "Grau"} em {education.fieldOfStudy || "Área de Estudo"}
                </div>
                <div style={companyStyle}>
                  {education.institution || "Nome da Instituição"}
                </div>
                <div style={dateStyle}>
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
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div>
            <div style={sectionTitleStyle}>
              COMPETÊNCIAS E HABILIDADES
            </div>
            <div style={contentStyle}>
              {resumeData.skills.map((skill, index) => (
                <span key={skill.id}>
                  {skill.name || "Habilidade"} ({skill.level})
                  {index < resumeData.skills.length - 1 ? " • " : ""}
                </span>
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
              padding: '50px 0',
              color: '#666666',
              fontSize: '14px',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }}>
              Preencha os dados no formulário para ver seu currículo aqui
            </div>
          )}
      </div>
    </div>
  );
};

// Estilos inline otimizados para ATS - apenas fontes padrão
const wrapperStyle = {
  overflowWrap: "break-word" as "break-word",
  wordWrap: "break-word" as "break-word",
};

const containerStyle = {
  backgroundColor: '#ffffff',
  color: '#000000',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '12px',
  lineHeight: '1.4',
  padding: '20px',
  maxWidth: '210mm',
  minHeight: '297mm'
};

const headerStyle = {
  marginBottom: '20px',
  borderBottom: '1px solid #000000',
  paddingBottom: '10px'
};

const nameStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#000000',
  marginBottom: '8px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const positionStyle = {
  fontSize: '16px',
  color: '#000000',
  marginBottom: '10px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const contactStyle = {
  fontSize: '12px',
  color: '#000000',
  marginBottom: '5px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const sectionTitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#000000',
  marginTop: '20px',
  marginBottom: '10px',
  borderBottom: '1px solid #000000',
  paddingBottom: '5px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const contentStyle = {
  fontSize: '12px',
  color: '#000000',
  marginBottom: '15px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const jobTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#000000',
  marginBottom: '5px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const companyStyle = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#000000',
  marginBottom: '3px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const dateStyle = {
  fontSize: '11px',
  color: '#666666',
  fontStyle: 'italic',
  marginBottom: '8px',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

export default ResumePreview;
