import React, { useEffect, useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      state: "TODO",
      isEditing: true,
    };
    setTaskList(taskList.concat(newTask));
  };

  const onTaskComplete = (index) => {
    let newTaskList = taskList.map((task, idx) => {
      if (idx == index) task.state = "DONE";
      return task;
    });
    setTaskList(newTaskList);
  };

  const onTaskNameChange = (value, index) => {
    let newTaskList = taskList.map((task, idx) => {
      if (idx == index) {
        task.name = value;
        task.isEditing = false;
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  useEffect(() => {
    const currentTaskList = JSON.parse(localStorage.getItem("tasklist"));
    if (currentTaskList === null) return;
    setTaskList(currentTaskList);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map(
          (task, index) =>
            task.state === "TODO" && (
              <Task
                key={index}
                onTaskComplete={() => onTaskComplete(index)}
                onTaskNameChange={(value) => onTaskNameChange(value, index)}
                defaultName={task.name}
                defaultIsEditing={task.isEditing}
              />
            )
        )}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  & > * {
    margin-top: 10px;
  }
`;
