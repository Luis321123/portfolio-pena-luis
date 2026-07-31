import { typeStack } from "@/interfaces";

const SelectTech = ({ stack }: { stack: typeStack }) => {
  const techActions: any = {
    javascript: "/tech/javascript.png",
    typescript: "/tech/typescript.png",
    python: "/tech/python.svg",
    mysql: "/tech/mysql.svg",
    fastapi: "/tech/fastapi.svg",
    react: "/tech/react.png",
    next: "/tech/next.png",
    vue: "/tech/vue.png",
    laravel: "/tech/laravel.png",
    inertia: "/tech/inertia.png",
    firebase: "/tech/firebase.png",
    nuxt: "/tech/nuxt.png",
    postgresql: "/tech/postgresql.png",
    mongodb: "/tech/mongodb.png",
    ghl: "/tech/ghl.png",
    rabbitMQ: "/tech/rabbit.png",
    RAG: "/tech/RAG.png",
    aws: "/tech/aws.png"
  };
  return (
    <div className="w-10 h-10 ">
      <img
        className="bg-cover w-full h-full"
        src={techActions[stack]}
        alt={techActions[stack]}
      />
    </div>
  );
};

export default SelectTech;
