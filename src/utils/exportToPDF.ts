
import html2pdf from 'html2pdf.js';
import { ResumeData } from '@/types/resume';

export const exportToPDF = async (resumeData: ResumeData): Promise<void> => {
  const element = document.getElementById('resume-preview');
  
  if (!element) {
    throw new Error('Elemento de preview não encontrado');
  }

  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `curriculo-${resumeData.personalInfo.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
    image: { 
      type: 'jpeg', 
      quality: 1.0 
    },
    html2canvas: { 
      scale: 3,
      useCORS: true,
      letterRendering: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait',
      compress: false
    }
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};
