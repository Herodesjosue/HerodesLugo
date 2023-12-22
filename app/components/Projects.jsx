import Card from "./Card";

const Projects = () => {
  return (
    <div className="bg-base-300  lg:p-20" id="projects">
      <div className="p-10">
        <h1 className="text-5xl text-center lg:text-left font-bold">Projects</h1>
      </div>
      <div className=" lg:flex p-0 gap-3 mt-5">
        <Card
          src={"/images/realEstate.png"}
          title={"Real Estate Management and Control Website"}
          description={
            "Development of a Real Estate Management Web Application that allows keeping an order of information within the Organization using NextJS and Bootstrap technologies for the Frontend Section and the Supabase service as a database"
          }
        />
        <Card
          src={"/images/taskmanager.png"}
          title={"task-card-react"}
          description={"A little Crud made with Typescript"}
        />
        <Card
          src={"/images/porfolio.png"}
          title={"A Page about me"}
          description={"Welcome to My Page, Where I Share Everything I Do"}
        />
      </div>
    </div>
  );
};

export default Projects;
