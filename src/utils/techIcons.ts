// utils/techiconsStack.ts
import PythonIcon from "@/assets/iconsStack/python.svg";
import FastAPIIcon from "@/assets/iconsStack/fastapi.svg";
import DjangoIcon from "@/assets/iconsStack/django.svg";
import FlaskIcon from "@/assets/iconsStack/flask.svg";
import SQLAlchemyIcon from "@/assets/iconsStack/sqlalchemy.svg";
import PyMongoIcon from "@/assets/iconsStack/pymongo.svg";
import PhpIcon from "@/assets/iconsStack/php.svg";
import LaravelIcon from "@/assets/iconsStack/laravel.svg";
import NodeIcon from "@/assets/iconsStack/nodejs.svg";
import ExpressIcon from "@/assets/iconsStack/express.svg";
import TypeScriptIcon from "@/assets/iconsStack/typescript.svg";
import NestIcon from "@/assets/iconsStack/nestjs.svg";
import ReactIcon from "@/assets/iconsStack/react.svg";
import VueIcon from "@/assets/iconsStack/vue.svg";
import AwsIcon from "@/assets/iconsStack/aws.svg";
import GcpIcon from "@/assets/iconsStack/gcp.svg";
import DockerIcon from "@/assets/iconsStack/docker.svg";
import PostgreIcon from "@/assets/iconsStack/postgresql.svg";
import MySqlIcon from "@/assets/iconsStack/mysql.svg";
import MongoIcon from "@/assets/iconsStack/mongodb.svg";
import GitIcon from "@/assets/iconsStack/git.svg";
import TestingIcon from "@/assets/iconsStack/testing.svg";
import N8nIcon from "@/assets/iconsStack/n8n.svg";
import FirebaseIcon from "@/assets/iconsStack/firebase.svg";
import NginxIcon from "@/assets/iconsStack/nginx.svg";
import VpsIcon from "@/assets/iconsStack/vps.svg";
import OpenAIIcon from "@/assets/iconsStack/openai.svg";
import GeminiIcon from "@/assets/iconsStack/gemini.svg";
import GitHubIcon from "@/assets/iconsStack/github.svg";

// --- NUEVOS ICONOS AGREGADOS (AWS, AI & Tools) ---
import BucketIcon from "@/assets/iconsStack/s3.svg";            // S3
import CodeIcon from "@/assets/iconsStack/lambda.svg";                // Lambda / Code
import GraphIcon from "@/assets/iconsStack/API Gateway.svg";              // Gateway / API
import CloudSearchIcon from "@/assets/iconsStack/cloudwatch.svg"; // CloudWatch
import IdVerifyIcon from "@/assets/iconsStack/cognito.svg";   
import CpuIcon from "@/assets/iconsStack/ec2.svg";
import CpuIcon2 from "@/assets/iconsStack/ecs.svg";                  // EC2 / ECS / ECR
import ecr from "@/assets/iconsStack/ecr.svg";                  // EC2 / ECS / ECR
import HexagonIcon from "@/assets/iconsStack/.svg";          // General AWS/Architecture
import RagIcon from "@/assets/iconsStack/rag.svg";                  // RAG (Retrieval Augmented Generation)

export const techIconMap: Record<string, string> = {
  'python': PythonIcon,
  'fastapi': FastAPIIcon,
  'django': DjangoIcon,
  'flask': FlaskIcon,
  'sqlalchemy': SQLAlchemyIcon,
  'pymongo': PyMongoIcon,
  
  'php': PhpIcon,
  'laravel': LaravelIcon,
  
  'nodejs': NodeIcon,
  'express': ExpressIcon,
  'typescript': TypeScriptIcon,
  'nestjs': NestIcon,
  
  'react': ReactIcon,
  'vue': VueIcon,
  
  'aws': AwsIcon,
  'gcp': GcpIcon,
  'docker': DockerIcon,
  'nginx': NginxIcon,
  'vps': VpsIcon,
  
  'postgresql': PostgreIcon,
  'mysql': MySqlIcon,
  'mongodb': MongoIcon,
  
  'git': GitIcon,
  'testing': TestingIcon,
  'n8n': N8nIcon,
  'firebase': FirebaseIcon,
  'github': GitHubIcon,
  
  'openai': OpenAIIcon,
  'gemini': GeminiIcon,
  'rag': RagIcon,

  'gateway': GraphIcon,      
  'cognito': IdVerifyIcon,    
  's3': BucketIcon,           
  'cloudwatch': CloudSearchIcon,
  'ec2': CpuIcon2,              
  'ecs': CpuIcon,               
  'ecr': ecr,             
  'lambda': CodeIcon,           
};

export const getTechIcon = (techName: string): string | null => {
  const normalized = techName.toLowerCase().trim();
  return techIconMap[normalized] || null;
};