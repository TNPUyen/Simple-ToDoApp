import React, {useState, useEffect, createContext} from "react";

export const TaskDataContext = createContext();

export const TaskDataProvider = (props) => {
    const [taskList, setTaskList] = useState([])

    return(
        <TaskDataContext value={[taskList, setTaskList]}>
            {props.childern}
        </TaskDataContext>
    )
}
