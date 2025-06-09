
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";
import { ResumeData, Experience, Education, Skill } from "@/types/resume";

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

const ResumeForm = ({ resumeData, setResumeData }: ResumeFormProps) => {
  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    });
  };

  const updateProfessionalSummary = (value: string) => {
    setResumeData({
      ...resumeData,
      professionalSummary: value
    });
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      isCurrentJob: false,
      description: ""
    };
    setResumeData({
      ...resumeData,
      experiences: [...resumeData.experiences, newExperience]
    });
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    setResumeData({
      ...resumeData,
      experiences: resumeData.experiences.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const removeExperience = (id: string) => {
    setResumeData({
      ...resumeData,
      experiences: resumeData.experiences.filter(exp => exp.id !== id)
    });
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      isCurrentStudy: false
    };
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation]
    });
  };

  const updateEducation = (id: string, field: string, value: string | boolean) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const removeEducation = (id: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter(edu => edu.id !== id)
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: "Básico"
    };
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill]
    });
  };

  const updateSkill = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    });
  };

  const removeSkill = (id: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter(skill => skill.id !== id)
    });
  };

  return (
    <div className="space-y-6">
      {/* Informações Pessoais */}
      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="fullName">Nome Completo</Label>
              <Input
                id="fullName"
                value={resumeData.personalInfo.fullName}
                onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <Label htmlFor="desiredPosition">Cargo Desejado</Label>
              <Input
                id="desiredPosition"
                value={resumeData.personalInfo.desiredPosition}
                onChange={(e) => updatePersonalInfo("desiredPosition", e.target.value)}
                placeholder="Ex: Desenvolvedor Front-end"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                value={resumeData.personalInfo.address}
                onChange={(e) => updatePersonalInfo("address", e.target.value)}
                placeholder="Cidade, Estado"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resumo Profissional */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo Profissional</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="summary">Resumo</Label>
            <Textarea
              id="summary"
              value={resumeData.professionalSummary}
              onChange={(e) => updateProfessionalSummary(e.target.value)}
              placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Experiência Profissional */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Experiência Profissional</CardTitle>
          <Button onClick={addExperience} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {resumeData.experiences.map((experience) => (
            <div key={experience.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Experiência</h4>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeExperience(experience.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Empresa</Label>
                  <Input
                    value={experience.company}
                    onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <Label>Cargo</Label>
                  <Input
                    value={experience.position}
                    onChange={(e) => updateExperience(experience.id, "position", e.target.value)}
                    placeholder="Seu cargo"
                  />
                </div>
                <div>
                  <Label>Data de Início</Label>
                  <Input
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Data de Fim</Label>
                  <Input
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                    disabled={experience.isCurrentJob}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`current-${experience.id}`}
                  checked={experience.isCurrentJob}
                  onCheckedChange={(checked) => updateExperience(experience.id, "isCurrentJob", checked)}
                />
                <Label htmlFor={`current-${experience.id}`}>Trabalho atual</Label>
              </div>
              <div>
                <Label>Descrição</Label>
                <Textarea
                  value={experience.description}
                  onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
                  placeholder="Descreva suas principais atividades e conquistas..."
                  rows={3}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Formação */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Formação</CardTitle>
          <Button onClick={addEducation} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {resumeData.education.map((education) => (
            <div key={education.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Formação</h4>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeEducation(education.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Instituição</Label>
                  <Input
                    value={education.institution}
                    onChange={(e) => updateEducation(education.id, "institution", e.target.value)}
                    placeholder="Nome da instituição"
                  />
                </div>
                <div>
                  <Label>Grau</Label>
                  <Input
                    value={education.degree}
                    onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                    placeholder="Ex: Bacharelado, Técnico"
                  />
                </div>
                <div>
                  <Label>Curso</Label>
                  <Input
                    value={education.fieldOfStudy}
                    onChange={(e) => updateEducation(education.id, "fieldOfStudy", e.target.value)}
                    placeholder="Ex: Engenharia de Software"
                  />
                </div>
                <div>
                  <Label>Ano de Início</Label>
                  <Input
                    type="number"
                    value={education.startDate}
                    onChange={(e) => updateEducation(education.id, "startDate", e.target.value)}
                    placeholder="2020"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Ano de Conclusão</Label>
                  <Input
                    type="number"
                    value={education.endDate}
                    onChange={(e) => updateEducation(education.id, "endDate", e.target.value)}
                    placeholder="2024"
                    disabled={education.isCurrentStudy}
                  />
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <Checkbox
                    id={`current-study-${education.id}`}
                    checked={education.isCurrentStudy}
                    onCheckedChange={(checked) => updateEducation(education.id, "isCurrentStudy", checked)}
                  />
                  <Label htmlFor={`current-study-${education.id}`}>Cursando atualmente</Label>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Habilidades */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Habilidades</CardTitle>
          <Button onClick={addSkill} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {resumeData.skills.map((skill) => (
            <div key={skill.id} className="flex items-center space-x-4">
              <div className="flex-1">
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  placeholder="Ex: JavaScript, Photoshop, Inglês"
                />
              </div>
              <div className="w-32">
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(skill.id, "level", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Básico">Básico</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeSkill(skill.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeForm;
