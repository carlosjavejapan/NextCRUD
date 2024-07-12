import {TaskCard} from "@/components";
import {TaskTable} from "@/components";
import {ViewToggle} from "@/components";
// import { prisma } from "@/libs/prisma";

// async function loadTask() {
//   return await prisma.task.findMany()
// }

async function HomePage() {
  // const tasks = await loadTask()
  
  return (
    <section className="container mx-auto">
      {/* <ViewToggle /> */}
      <div className="mt-10">
        <TaskCard />
      </div>
      <div className="mt-10">
        <TaskTable />
      </div>
    </section>
  );
}

export default HomePage
