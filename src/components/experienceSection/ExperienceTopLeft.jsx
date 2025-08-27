import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="60+" text="Websites" />
      </div>
      <p className="text-center">
        With 1 years of experience developing dynamic web applications, AI/ML
        models, and computer vision projects.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
