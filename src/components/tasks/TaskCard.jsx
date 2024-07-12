// "use client"
// import { useRouter } from "next/navigation";
import { prisma } from "@/libs/prisma";
import Link from "next/link";

async function loadTask() {
  return await prisma.task.findMany();
}

async function TaskCard() {
  const tasks = await loadTask();
  // const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {tasks.map((task) => (
        <Link
          key={task.id}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
          href={`/tasks/edit/` + task.id}
          // onClick={() => {
          //   router.push("/tasks/edit/" + task.id);
          // }}
        >
          <h3 className="font-bold text-xl mb-2 tracking-tight text-gray-900 dark:text-white">
            {task.title}
          </h3>
          <p className="font-normal text-gray-700 dark:text-white">
            {task.name}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {task.email}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {task.description}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-right">
            {new Date(task.createdAt).toLocaleDateString()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default TaskCard
