import { v4 as uuid } from "uuid";
import { Details } from "@/interfaces/Details";

export const detail: Details[] = [
  {
    id: uuid(),
    title: "Web Developer - Contractor",
    date: "2025 Sept - Currently",
    description: "I was part of a cross-functional team responsible for developing an AI-powered platform for intelligent product processing. The team worked under an agile model, with continuous integration and automated deployment. I helped integrate language models (OpenAI API, Gemini) into the product processing workflow, using OpenAI Batch for high-volume asynchronous tasks. The team defined the prompts and the validation logic for AI-generated results. I participated in the design and deployment of services on AWS Lambda, EC2, ECS, ECR, API Gateway, Cognito, S3, and CloudWatch. This enabled the team to automatically scale according to the demand of the product pipeline. Together with the data team, I implemented a workflow where raw products were transformed using RAG (Retrieval-Augmented Generation). Each stage of the pipeline validated that the AI correctly processed the information and generated results aligned with business requirements. I also participated in backend development using Python and FastAPI and actively collaborated with the frontend team using React and TypeScript/JavaScript to visualize the pipeline’s results. I helped manage MongoDB to store pipeline states, facilitating audits and retries in the event of failures, and contributed to configuring GitHub Actions to automate tests, builds, and deployments, reducing manual errors and accelerating the team’s deliveries."
  },
  {
    id: uuid(),
    title: "Backend Developer - Leadgrowth",
    date: "2025 Mar - 2025 Sept",
    description: "I was responsible for the development, planning, and integration of various services across different platforms—including a specific one called GoHighLevel—using tools such as EC2, S3 buckets, and Hostinguer for hosting. I also used tools such as Nginx and Docker for the VPS where the created APIs were stored, and for the coding portion, I used Python as the primary language with FastAPI as the main framework; for databases, Postgres and MySQL; and for the architecture, I primarily used monolithic and hexagonal patterns. In some workflows, I used n8n for automations, including the ChatGPT API and DeepSeek R8"
  },
  {
    id: uuid(),
    title: "Backend Developer - Nextstation",
    date: "2024 Ago - 2024 DEC",
    description: "I was responsible for managing various parts of projects using microservices built with Python/FastAPI, SQLAlchemy, PostgreSQL, and Docker. I created controllers, routes, and services for the business logic of a solar panel company and for providing services for a church management API, integrating login with Apple and Google and using Firebase."
  },
  {
    id: uuid(),
    title: 'Backend Developer',
    date: '2024 Mar - 2024 AGO',
    description: 'With the guidance of a semi senior backend I was able to take over a monolith project with Python (FastApi(FastApi), Sql (PostgreSQL) and Docker, realizing controllers, routes and services for the business logic of a travel company. in part to the delivery date.'
  },
  {
    id: uuid(),
    title: 'Backend Developer ',
    date: '2023 FEB - 2024 FEB',
    description: 'Development of a project with the logic of a recipe web page using the YouTube API to mirror videos and also contains comments for each of the videos and adding logic for client, authentication and role management (administrator and user).'
  },
];