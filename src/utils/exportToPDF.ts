
import html2pdf from 'html2pdf.js';
import { ResumeData } from '@/types/resume';

export const exportToPDF = async (resumeData: ResumeData): Promise<void> => {
  const element = document.getElementById('resume-preview');
  
  if (!element) {
    throw new Error('Elemento de preview não encontrado');
  }

  // Configurações otimizadas para garantir que o texto apareça no PDF
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
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
      // Configurações essenciais para capturar texto
      removeContainer: true,
      async: true,
      allowTaint: true,
      foreignObjectRendering: false, // Mudança importante - desabilitar para melhor compatibilidade de texto
      imageTimeout: 15000,
      onclone: (clonedDoc: Document) => {
        // Garantir que todas as fontes sejam aplicadas no clone
        const clonedElement = clonedDoc.getElementById('resume-preview');
        if (clonedElement) {
          clonedElement.style.fontFamily = 'Arial, sans-serif';
          clonedElement.style.color = '#000000';
          // Forçar renderização de texto
          const allElements = clonedElement.querySelectorAll('*');
          allElements.forEach((el: any) => {
            if (el.style) {
              el.style.fontFamily = 'Arial, sans-serif';
              el.style.color = '#000000';
            }
          });
        }
      }
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait',
      compress: true,
      precision: 2
    },
    pagebreak: { 
      mode: ['avoid-all'],
      before: '.page-break-before',
      after: '.page-break-after'
    }
  };

  try {
    console.log('Iniciando geração do PDF...');
    
    // Garantir que o elemento está visível antes da captura
    const originalDisplay = element.style.display;
    const originalVisibility = element.style.visibility;
    
    element.style.display = 'block';
    element.style.visibility = 'visible';
    
    await html2pdf()
      .set(opt)
      .from(element)
      .save();
      
    // Restaurar estilos originais
    element.style.display = originalDisplay;
    element.style.visibility = originalVisibility;
    
    console.log('PDF gerado com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};
