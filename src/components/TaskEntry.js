import React from "react";

const TaskEntry = () => {
  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label style={{ paddingTop: "5px" }}>Enter Task</label>
          <input type="text" name="task" placeholder="Task" />
          <input
            type="submit"
            className="ui primary button"
            value="Add task "
          />
        </div>
      </div>
    </div>
  );
};
export default TaskEntry;
