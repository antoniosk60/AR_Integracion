
export interface Project {
  id: string;
  title: string;
  // Fix: Updated category union to match the actual service areas of Grupo-AR
  category: 'Electricidad' | 'Industrial' | 'Telecomunicaciones' | 'Remodelaciones' | 'Impermeabilización' | 'Construcciones';
  description: string;
  fullDescription: string;
  services: string[];
  imageUrl: string;
  year: number;
  client?: string;
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export const getImageUrl = (url: string): string => {
  if (!url) return '';
  if (url.startsWith('input_file_')) {
    return `https://raw.githubusercontent.com/antoniosk60/IMGAR/main/img/${url}`;
  }
  return url;
};
