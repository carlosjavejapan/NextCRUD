"use client"
import { useState } from "react";
import { TaskCard, TaskTable, ViewToggle } from "@/components";

export default function Task() {
  const [viewToggle, setViewToggle] = useState(true);
  const handleToggle = () => {
    setViewToggle(!viewToggle);
  };
  return (
    <>
      <ViewToggle viewToggle={viewToggle} onToggle={handleToggle} />
      {viewToggle ? (
        <div>
          <TaskCard />
        </div>
      ) : (
        <div className="mt-10">
          <TaskTable />
        </div>
      )}

      {/* <div className="grid grid-cols-3 gap-4 mt-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div> */}
    </>
  );
}
