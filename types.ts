
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface CertificationItem {
    name: string;
    issuer: string;
    date: string;
    expires?: string;
}

export interface EducationItem {
    degree: string;
    university: string;
    duration: string;
}
