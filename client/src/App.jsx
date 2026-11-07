import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete DSA practice",
      category: "Learning",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Finish MERN course",
      category: "Development",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      title: "Prepare for aptitude test",
      category: "Placement",
      priority: "High",
      status: "Completed",
    },
    {
      id: 4,
      title: "Update project documentation",
      category: "Project",
      priority: "Low",
      status: "Pending",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    category: "",
    priority: "Medium",
  });

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">TaskFlow.</h2>

        <nav>
          <a href="#dashboard" className="action">
            Dashboard
          </a>
          <a href="#tasks">My tasks</a>
          <a href="#upcoming">Upcoming</a>
          <a href="#completed">Completed</a>
        </nav>

        <div className="sidebar-bottom">
          <p>Personal Workspace</p>
          <h3>My Account</h3>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Manage your tasks and stay productive.</p>
          </div>
          <button className="add-button" onClick={() => setShowForm(true)}>
            + Add Task
          </button>{" "}
        </header>

        {showForm && (
          <form className="task-form">
            <h2>Add New Task</h2>

            <input type="text" placeholder="Enter task title" />

            <input type="text" placeholder="Enter category" />

            <select defaultValue="Medium">
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>

            <button type="submit">Save Task</button>

            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        )}

        <section className="stats">
          <div className="stat-cards">
            <h2>Total Tasks</h2>
            <p>24</p>
          </div>
          <div className="stat-cards">
            <h2>Pending Tasks</h2>
            <p>12</p>
          </div>
          <div className="stat-cards">
            <h2>Completed Tasks</h2>
            <p>10</p>
          </div>
          <div className="stat-cards">
            <h2>Overdue Tasks</h2>
            <p>2</p>
          </div>
        </section>

        <section className="task-section" id="tasks">
          <div className="section-heading">
            <h2>Today's Tasks</h2>
            <span>{tasks.length} tasks</span>
          </div>

          <div className="task-list">
            {tasks.map((task, index) => (
              <div className="task-card" key={index}>
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.category}</p>
                </div>

                <div className="task-details">
                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                  <span>{task.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
