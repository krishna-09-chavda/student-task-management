function TaskList({ tasks , editingTask ,deletingTask}) {
  const handleEditClick=(task)=>{
  editingTask(task);
  };
  const handleDeleteclick=(taskId)=>{
    deletingTask(taskId)
  }
  return (
    <div className="task-grid">
      {/*task card 1 */}
      {tasks.map((task) => (
        <div className="task-card" style={{ position: "relative" }}>
          <h3>{task.title}</h3>
          <p>{task.decription}</p>

          <div className="task-meta">
            <span>Due : {task.dueDate}</span>
            <span className="priority-badge priority-high">
              {task.priority}
            </span>
          </div>
          <div className="task-action">
            <button
              className="btn-icon"
              style={{ background: "#00d2ff" }}
              title="Edit Task"
              onClick={()=>handleEditClick(task)}
            >
              ✏️
            </button>
            <button
              className="btn-icon"
              style={{ background: "#00b894" }}
              title="Mark Complete"
            >
              ✔️
            </button>
            <button
              className="btn-icon"
              style={{ background: "#ff416c" }}
              title="Delete Task"
              onClick={()=>handleDeleteclick(task.id)}
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TaskList;
