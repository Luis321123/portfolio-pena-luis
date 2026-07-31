import { v4 as uuid } from "uuid";
import { Details } from "@/interfaces/Details";

export const detail: Details[] = [
  {
    id: uuid(),
    title: "Software Developer - Contractor",
    date: "2025 Sept - 2026 May",
    description: "I was part of a cross-functional team responsible for developing an AI-powered platform for intelligent product processing. The team worked under an agile model, with continuous integration and automated deployment. I helped integrate language models (OpenAI API, Gemini) into the product processing workflow, using OpenAI Batch for high-volume asynchronous tasks. The team defined the prompts and the validation logic for AI-generated results. I participated in the design and deployment of services on AWS Lambda, EC2, ECS, ECR, API Gateway, Cognito, S3, and CloudWatch. This enabled the team to automatically scale according to the demand of the product pipeline. Together with the data team, I implemented a workflow where raw products were transformed (Retrieval-Augmented Generation). Each stage of the pipeline validated that the AI correctly processed the information and generated results aligned with business requirements. I also participated in backend development using Python and FastAPI and actively collaborated with the frontend team using React and TypeScript/JavaScript to visualize the pipeline's results. I helped manage MongoDB to store pipeline states, facilitating audits and retries in the event of failures, and contributed to configuring GitHub Actions to automate tests, builds, and deployments, reducing manual errors and accelerating the team's deliveries.",
    achievements: [
      "Integrated OpenAI API and Gemini language models into product processing workflow",
      "Implemented RAG (Retrieval-Augmented Generation) for transforming raw products",
      "Deployed scalable microservices on AWS (Lambda, EC2, ECS, ECR, API Gateway)",
      "Configured CI/CD pipeline with GitHub Actions reducing manual deployment errors",
      "Managed MongoDB for pipeline state storage enabling audit trails and retry mechanisms"
    ]
  },
  {
    id: uuid(),
    title: "Backend Developer - Leadgrowth",
    date: "2025 Mar - 2025 Sept",
    description: "I was responsible for the development, planning, and integration of various services across different platforms—including a specific one called GoHighLevel(ghl)using tools such as EC2, S3 buckets, and Hostinguer for hosting. I also used tools such as Nginx and Docker for the VPS where the created APIs were stored, and for the coding portion, I used Python as the primary language with FastAPI as the main framework; for databases, Postgres and MySQL; and for the architecture, I primarily used monolithic and hexagonal patterns. In some workflows, I used n8n for automations, including the ChatGPT API and DeepSeek R8",
    achievements: [
      "Integrated GoHighLevel API for cross-platform service integration(ghl)",
      "Designed and implemented monolithic and hexagonal architecture patterns",
      "Deployed and managed VPS infrastructure with Nginx and Docker",
      "Automated workflows using n8n with ChatGPT API and DeepSeek R8",
      "Built RESTful APIs using Python and FastAPI with PostgreSQL and MySQL"
    ]
  },
  {
    id: uuid(),
    title: "Backend Developer - Nextstation",
    date: "2024 Ago - 2024 DEC",
    description: "I was responsible for managing various parts of projects using microservices built with Python/FastAPI, SQLAlchemy, PostgreSQL, and Docker. I created controllers, routes, and services for the business logic of a solar panel company and for providing services for a church management API, integrating login with Apple and Google and using Firebase.",
    achievements: [
      "Developed microservices architecture with Python, FastAPI, and Docker",
      "Built business logic for solar panel company management system",
      "Created church management API with role-based access control",
      "Integrated social authentication (Apple, Google) with Firebase"
    ]
  },
  {
    id: uuid(),
    title: 'Backend Developer - Travel Company',
    date: '2024 Mar - 2024 AGO',
    description: 'With the guidance of a semi senior backend I was able to take over a monolith project with Python (FastAPI), PostgreSQL and Docker, realizing controllers, routes and services for the business logic of a travel company.',
    achievements: [
      "Successfully took over and maintained legacy monolith project",
      "Built RESTful controllers, routes, and services for travel company logic",
      "Worked with Python FastAPI, PostgreSQL, and Docker in production environment",
      "Collaborated with senior developers to deliver project within deadline"
    ]
  },
  {
    id: uuid(),
    title: 'Backend Developer - Recipe Web Platform',
    date: '2023 FEB - 2024 FEB',
    description: 'Spearheaded the backend development of a recipe web platform using a robust dual-framework architecture with **Laravel** and **Django REST Framework**, powered by a **PostgreSQL** database. Engineered video mirroring functionality by integrating the YouTube API, and built a real-time comment system to foster user engagement. Architected a scalable and reliable infrastructure by containerizing the application with **Docker** and implementing **Celery** for efficient asynchronous task processing. Deployed the entire system on **Amazon Web Services (AWS)** to ensure high availability and performance. Maintained clean, maintainable code by applying software design patterns throughout the development lifecycle, utilizing **Git** for version control and **JIRA** for agile project tracking and sprint management.',
    achievements: [
      "Integrated YouTube API for seamless video mirroring and content management",
      "Implemented a dynamic comment system to boost user engagement",
      "Designed and deployed a secure authentication system with Role-Based Access Control (Admin/User)",
      "Built scalable RESTful APIs using Django REST Framework and Laravel"
    ]
  }
];