export type typeStack =
  | "javascript"
  | "typescript"
  | "python"
  | "mysql"
  | "postgresql"
  | "fastapi"
  | "mongodb"
  | "aws"
  | "RAG"
  | "next"
  | "react"
  | "vue"
  | "inertia"
  | "firebase"
  | "laravel"
  | "rabbitMQ"
  | "nuxt";

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  link: string;
  stack: typeStack[];
  preview: string;
}
