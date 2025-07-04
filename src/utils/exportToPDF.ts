import html2pdf from 'html2pdf.js';
import { ResumeData } from '@/types/resume';

export const exportToPDF = async (resumeData: ResumeData): Promise<void> => {
  const element = document.getElementById('resume-preview');

  if (!element) {
    throw new Error('Elemento de preview não encontrado');
  }

  // Configurações otimizadas para ATS - sem html2canvas para preservar texto
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `curriculo-${resumeData.personalInfo.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
    image: {
      type: 'jpeg',
      quality: 0.98
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait',
      compress: true,
      putOnlyUsedFonts: true
    }
  };

  try {
    // Garantir que o elemento esteja visível antes da conversão
    element.style.display = 'block';
    element.style.visibility = 'visible';

    // Forçar o uso de fontes padrão antes da conversão
    const allElements = element.querySelectorAll('*');
    allElements.forEach((el: any) => {
      if (el.style) {
        el.style.fontFamily = 'Arial, Helvetica, sans-serif';
      }
    });

    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};

// Função otimizada para criar PDF ATS com texto real (não imagem)
export const exportToPDFATS = async (resumeData: ResumeData): Promise<void> => {
  const element = document.getElementById('resume-preview');

  if (!element) {
    throw new Error('Elemento de preview não encontrado');
  }

  // Verificar se há conteúdo
  if (!element.textContent || element.textContent.trim() === '') {
    throw new Error('Nenhum conteúdo encontrado para gerar o PDF');
  }

  // Configuração MÍNIMA para preservar texto como texto real
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `curriculo-ats-${resumeData.personalInfo.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  try {
    // Garantir que o elemento esteja visível
    element.style.display = 'block';
    element.style.visibility = 'visible';

    // Aplicar estilos ATS
    element.style.fontFamily = 'Arial, Helvetica, sans-serif';
    element.style.fontSize = '12px';
    element.style.color = '#000000';
    element.style.backgroundColor = '#ffffff';
    element.style.padding = '20px';
    element.style.margin = '0';

    // Forçar renderização
    element.offsetHeight;

    // Aguardar um pouco para garantir que o DOM foi atualizado
    await new Promise(resolve => setTimeout(resolve, 100));

    // Gerar PDF com configuração mínima (preserva texto como texto)
    await html2pdf().set(opt).from(element).save();

  } catch (error) {
    console.error('Erro ao gerar PDF ATS:', error);
    // Tentar fallback ainda mais simples
    await exportToPDFATSFallback(resumeData);
  }
};

// Função de fallback mais simples SEM html2canvas
const exportToPDFATSFallback = async (resumeData: ResumeData): Promise<void> => {
  const element = document.getElementById('resume-preview');

  if (!element) {
    throw new Error('Elemento de preview não encontrado');
  }

  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `curriculo-ats-${resumeData.personalInfo.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  try {
    // Aplicar estilos básicos
    element.style.fontFamily = 'Arial, Helvetica, sans-serif';
    element.style.backgroundColor = '#ffffff';
    element.style.color = '#000000';

    // Gerar PDF com configuração mínima
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('Erro no fallback:', error);
    throw new Error('Não foi possível gerar o PDF. Verifique se há conteúdo no currículo.');
  }
};

// Função alternativa usando jsPDF diretamente (garante texto como texto)
export const exportToPDFATSDirect = async (resumeData: ResumeData): Promise<void> => {
  try {
    // Importar jsPDF dinamicamente
    const { jsPDF } = await import('jspdf');

    const doc = new jsPDF({
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    });

    // Configurar fonte
    doc.setFont('helvetica');
    doc.setFontSize(12);
    doc.setDrawColor(0);
    doc.setLineWidth(0.01);

    let yPosition = 1; // Margem superior
    const lineHeight = 0.2;
    const margin = 0.5;

    // Nome
    if (resumeData.personalInfo.fullName) {
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(resumeData.personalInfo.fullName, margin, yPosition);
      yPosition += 0.3;
    }

    // Cargo desejado
    if (resumeData.personalInfo.desiredPosition) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text(resumeData.personalInfo.desiredPosition, margin, yPosition);
      yPosition += 0.3;
    }

    // Contato
    doc.setFontSize(10);
    const contactInfo = [];
    if (resumeData.personalInfo.email) contactInfo.push(`Email: ${resumeData.personalInfo.email}`);
    if (resumeData.personalInfo.phone) contactInfo.push(`Telefone: ${resumeData.personalInfo.phone}`);
    if (resumeData.personalInfo.address) contactInfo.push(`Endereço: ${resumeData.personalInfo.address}`);

    contactInfo.forEach(info => {
      doc.text(info, margin, yPosition);
      yPosition += lineHeight;
    });

    doc.line(0.5, yPosition - 0.10, 8.5 - margin, yPosition - 0.10);

    yPosition += 0.2;

    // Resumo profissional
    if (resumeData.professionalSummary) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('RESUMO PROFISSIONAL', margin, yPosition);

      doc.line(0.5, yPosition + 0.1, 8.5 - margin, yPosition + 0.1);

      yPosition += 0.3;

      doc.setFont('helvetica', 'normal');
      const summaryLines = doc.splitTextToSize(resumeData.professionalSummary, 7.5);
      summaryLines.forEach((line: string | string[]) => {
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 0.2;
    }

    // Experiência
    if (resumeData.experiences.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('EXPERIÊNCIA PROFISSIONAL', margin, yPosition);

      doc.line(0.5, yPosition + 0.1, 8.5 - margin, yPosition + 0.1);

      yPosition += 0.3;

      resumeData.experiences.forEach(exp => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(exp.position || 'Cargo', margin, yPosition);
        yPosition += lineHeight;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(exp.company || 'Empresa', margin, yPosition);
        yPosition += lineHeight;

        const startDate = exp.startDate ? new Date(exp.startDate).getFullYear() : '';
        const endDate = exp.isCurrentJob ? 'Atual' : (exp.endDate ? new Date(exp.endDate).getFullYear() : '');
        const dateText = startDate && endDate ? `${startDate} - ${endDate}` : startDate;

        if (dateText) {
          doc.text(dateText.toString(), margin, yPosition);
          yPosition += lineHeight;
        }

        if (exp.description) {
          const descLines = doc.splitTextToSize(`• ${exp.description}`, 7.5);
          descLines.forEach((line: string | string[]) => {
            doc.text(line, margin, yPosition);
            yPosition += lineHeight;
          });
        }
        yPosition += 0.1;
      });
    }

    // Educação
    if (resumeData.education.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('FORMAÇÃO ACADÊMICA', margin, yPosition);

      doc.line(0.5, yPosition + 0.1, 8.5 - margin, yPosition + 0.1);

      yPosition += 0.3;

      resumeData.education.forEach(edu => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        const degreeText = `${edu.degree || 'Grau'} em ${edu.fieldOfStudy || 'Área'}`;
        doc.text(degreeText, margin, yPosition);
        yPosition += lineHeight;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(edu.institution || 'Instituição', margin, yPosition);
        yPosition += lineHeight;

        const startYear = edu.startDate ? new Date(edu.startDate).getFullYear() : '';
        const endYear = edu.isCurrentStudy ? 'Cursando' : (edu.endDate ? new Date(edu.endDate).getFullYear() : '');
        const yearText = startYear && endYear ? `${startYear} - ${endYear}` : startYear;

        if (yearText) {
          doc.text(yearText.toString(), margin, yPosition);
          yPosition += lineHeight;
        }
        yPosition += 0.1;
      });
    }

    // Habilidades
    if (resumeData.skills.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('COMPETÊNCIAS E HABILIDADES', margin, yPosition);

      doc.line(0.5, yPosition + 0.1, 8.5 - margin, yPosition + 0.1);

      yPosition += 0.3;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      const skillsText = resumeData.skills.map(skill =>
        `${skill.name || 'Habilidade'} (${skill.level})`
      ).join(' • ');

      const skillsLines = doc.splitTextToSize(skillsText, 7.5);
      skillsLines.forEach((line: string | string[]) => {
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
    }

    // Salvar PDF
    const filename = `curriculo-ats-${resumeData.personalInfo.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    doc.save(filename);

  } catch (error) {
    console.error('Erro ao gerar PDF direto:', error);
    throw new Error('Não foi possível gerar o PDF. Verifique se há conteúdo no currículo.');
  }
};
