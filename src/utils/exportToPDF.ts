
import html2pdf from 'html2pdf.js';
import { ResumeData } from '@/types/resume';

export const exportToPDF = async (resumeData: ResumeData): Promise<void> => {
  const element = document.getElementById('resume-preview');
  
  if (!element) {
    throw new Error('Elemento de preview não encontrado');
  }

  // Configurações otimizadas para ATS
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `curriculo-${resumeData.personalInfo.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
    image: { 
      type: 'jpeg', 
      quality: 1.0 
    },
    html2canvas: { 
      scale: 4, // Máxima qualidade para texto nítido
      useCORS: true,
      letterRendering: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      // Configurações para melhor qualidade de texto
      dpi: 300,
      foreignObjectRendering: true
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait',
      compress: false, // Não comprimir para manter qualidade do texto
      precision: 16, // Máxima precisão
      userUnit: 1.0
    },
    // Configurações específicas para compatibilidade ATS
    pagebreak: { 
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.page-break-before',
      after: '.page-break-after',
      avoid: '.no-page-break'
    }
  };

  try {
    // Gerar PDF com configurações otimizadas para ATS
    await html2pdf()
      .set(opt)
      .from(element)
      .toPdf()
      .get('pdf')
      .then((pdf: any) => {
        // Configurações adicionais do PDF para compatibilidade ATS
        pdf.setProperties({
          title: `Currículo - ${resumeData.personalInfo.fullName}`,
          subject: 'Currículo Profissional',
          author: resumeData.personalInfo.fullName,
          keywords: 'curriculo, cv, resume, profissional',
          creator: 'CurriculoFacil',
          producer: 'CurriculoFacil ATS Optimized'
        });
      })
      .save();
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};
