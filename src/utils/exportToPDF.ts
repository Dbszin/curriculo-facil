
import html2pdf from 'html2pdf.js';
import { ResumeData } from '@/types/resume';

export const exportToPDF = async (resumeData: ResumeData): Promise<void> => {
  const element = document.getElementById('resume-preview');
  
  if (!element) {
    throw new Error('Elemento de preview não encontrado');
  }

  // Configurações otimizadas para capturar texto corretamente
  const opt = {
    margin: 0.5,
    filename: `curriculo-${resumeData.personalInfo.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
    image: { 
      type: 'jpeg', 
      quality: 0.98 
    },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      letterRendering: true,
      // Configurações específicas para capturar texto
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait'
    }
  };

  try {
    // Garantir que o elemento esteja visível antes da conversão
    element.style.display = 'block';
    element.style.visibility = 'visible';
    
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};
