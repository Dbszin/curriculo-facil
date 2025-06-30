# Currículo Fácil

> **Gerador de currículos moderno e otimizado para ATS**

Um gerador de currículos profissional que permite criar currículos compatíveis com sistemas ATS (Applicant Tracking System) de forma rápida e intuitiva. Perfeito para candidatos que desejam maximizar suas chances de serem selecionados por sistemas de recrutamento automatizado.

## Funcionalidades

### **Principais Recursos**
- **Compatibilidade ATS Total** - Otimizado para RESUMEGO, LinkedIn, Indeed e outros
- **PDF com Texto Real** - Não é gerado como imagem, garantindo leitura pelos sistemas
- **Interface Moderna** - Design responsivo e intuitivo
- **Editor em Tempo Real** - Veja as mudanças instantaneamente
- **Fontes Padrão ATS** - Arial/Helvetica para máxima compatibilidade
- **Exportação Profissional** - PDF otimizado para recrutamento

### **Experiência do Usuário**
- Interface limpa e moderna
- Totalmente responsivo (desktop, tablet, mobile)
- Carregamento rápido
- Preview em tempo real
- Validação de dados em tempo real
- Foco na usabilidade

### **Seções do Currículo**
- **Informações Pessoais** - Nome, contato, cargo desejado
- **Resumo Profissional** - Descrição concisa e impactante
- **Experiência Profissional** - Histórico detalhado de trabalho
- **Formação Acadêmica** - Educação e certificações
- **Competências e Habilidades** - Skills com níveis de proficiência

## Tecnologias

### **Frontend**
- [React 18](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Vite](https://vitejs.dev/) - Build tool ultra-rápido
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI modernos

### **Funcionalidades**
- [React Router](https://reactrouter.com/) - Navegação SPA
- [React Hook Form](https://react-hook-form.com/) - Formulários performáticos
- [Zod](https://zod.dev/) - Validação de dados
- [jsPDF](https://github.com/parallax/jsPDF) - Geração de PDF com texto real
- [date-fns](https://date-fns.org/) - Manipulação de datas

### **Qualidade**
- [ESLint](https://eslint.org/) - Linting de código
- [TypeScript](https://www.typescriptlang.org/) - Verificação de tipos
- [Vite](https://vitejs.dev/) - Hot Module Replacement

## Como Usar

### **Instalação Local**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/curriculo-facil.git
cd curriculo-facil
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
bun install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

4. **Acesse a aplicação**
```
http://localhost:8080
```

### **Uso da Aplicação**

1. **Preencha seus dados** no formulário
2. **Veja o preview** em tempo real
3. **Clique em "Baixar Currículo ATS"**
4. **Faça upload** no sistema de recrutamento desejado

## Compatibilidade ATS

### **Sistemas Testados e Compatíveis**
- **RESUMEGO** - Funcionando perfeitamente
- **LinkedIn** - Compatível
- **Indeed** - Compatível
- **Glassdoor** - Compatível
- **Vagas.com** - Compatível
- **InfoJobs** - Compatível
- **Outros sistemas ATS** - Compatível

### **Otimizações ATS Implementadas**
- **Fontes padrão** (Arial, Helvetica)
- **Texto real no PDF** (não imagem)
- **Estrutura clara** e organizada
- **Palavras-chave** otimizadas
- **Formatação consistente**
- **Campos padronizados**

## Estrutura do Projeto

```
curriculo-facil/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes de UI (shadcn)
│   │   ├── ResumeForm.tsx  # Formulário do currículo
│   │   ├── ResumePreview.tsx # Preview do currículo
│   │   └── DownloadButton.tsx # Botão de download
│   ├── pages/              # Páginas da aplicação
│   ├── types/              # Definições TypeScript
│   ├── utils/              # Utilitários
│   │   └── exportToPDF.ts  # Geração de PDF
│   └── hooks/              # Custom hooks
├── public/                 # Arquivos estáticos
└── docs/                   # Documentação
```

## Dicas para Melhor Compatibilidade ATS

### **Conteúdo**
- Use **palavras-chave relevantes** no resumo profissional
- Mantenha **formatação consistente** nas datas
- Evite **caracteres especiais** desnecessários
- Use **verbos de ação** para descrever experiências

### **Estrutura**
- Mantenha **seções bem definidas**
- Use **títulos claros** e padronizados
- Organize **experiências cronologicamente**
- Inclua **resultados quantificáveis**

### **Formatação**
- Use **fontes padrão** (já configurado)
- Mantenha **texto simples** e legível
- Evite **tabelas complexas**
- Use **listas simples** para habilidades

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
```

## Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### **Diretrizes de Contribuição**
- Mantenha o código limpo e bem documentado
- Siga os padrões de TypeScript
- Teste suas mudanças antes de submeter
- Mantenha a compatibilidade ATS

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.



<div align="center">

**Se este projeto te ajudou, considere dar uma estrela!**

</div>

