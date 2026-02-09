import { ReactNode } from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}
