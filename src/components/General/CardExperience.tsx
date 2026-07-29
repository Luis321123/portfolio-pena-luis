import { Experience } from "@/interfaces";

type PropsType = {
  experience: Experience;
};

const CardExperience = ({ experience }: PropsType) => {
  return (
    <div className="w-full mb-12 ">
      <div className="flex flex-col sm:justify-between px-2 pb-4 sm:flex-row">
        <h3 className="text-lg text-third font-semibold underline md:text-xl">
          {experience.title}
        </h3>
        <h4 className="text-third font-semibold ">{experience.date}</h4>
      </div>
      <p className="text-third">{experience.description}</p>
    </div>
  );
};

export default CardExperience;
