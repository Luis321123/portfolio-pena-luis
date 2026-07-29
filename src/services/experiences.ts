// services/index.ts
import { v4 as uuid } from "uuid";
import { Experience } from "@/interfaces/Experience";

export const experiences: Experience[] = [
  {
    id: uuid(),
    title: "Software Developer",
    date: "2025 Sept - 2026 May",
    description: `Cross-functional team developing AI-powered platform
│ 
│ • Integrated OpenAI API, Gemini, and OpenAI Batch
│ • Implemented RAG (Retrieval-Augmented Generation)
│ • Deployed on AWS: Lambda, EC2, ECS, ECR
│ • API Gateway, Cognito, S3, CloudWatch
│ 
│ Backend: Python + FastAPI
│ Database: MongoDB
│ Frontend: React + TypeScript
│ 
│ CI/CD: GitHub Actions for automated deployment`
  },
  {
    id: uuid(),
    title: "Backend Developer - Leadgrowth",
    date: "2025 Mar - 2025 Sept",
    description: `Development and integration of services
│ 
│ • GoHighLevel API integration
│ • n8n automations with ChatGPT API & DeepSeek R8
│ 
│ Backend: Python + FastAPI
│ Databases: PostgreSQL + MySQL
│ Architecture: Monolithic & Hexagonal
│ 
│ Infrastructure: AWS EC2, S3, VPS with Nginx + Docker`
  },
  {
    id: uuid(),
    title: "Backend Developer - Nextstation",
    date: "2024 Ago - 2024 DEC",
    description: `Microservices development
│ 
│ • Solar panel company management
│ • Church management API
│ 
│ Backend: Python + FastAPI + SQLAlchemy
│ Database: PostgreSQL
│ Container: Docker
│ 
│ Authentication: Apple, Google, Firebase`
  },
  {
    id: uuid(),
    title: "Backend Developer - Travel Company",
    date: "2024 Mar - 2024 AGO",
    description: `Monolith project development
│ 
│ • Travel company business logic
│ • Controllers, routes, services
│ 
│ Backend: Python + FastAPI
│ Database: PostgreSQL
│ Container: Docker
│ 
│ Mentorship from semi senior developer`
  },
  {
    id: uuid(),
    title: "Backend Developer - Recipe Platform",
    date: "2023 FEB - 2024 FEB",
    description: `Recipe web platform development
│ 
│ • YouTube API integration for video mirroring
│ • Comment system for videos
│ • Authentication and role management
│ 
│ Roles: Administrator and User`
  },
];