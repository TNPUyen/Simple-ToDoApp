import React from 'react'
import Tasks from '../../../../actions/taskActions'
import { Checkbox} from '@mui/material';

export default class TaskFooter extends Tasks {
    render() {
        return (
            <div className="footer-row">
                <label>
                    <Checkbox id="all" name="all" size="small" onClick={() => this.props.handleCheckAll()}></Checkbox>
                    All
                </label>
                <p>{this.props.taskToDo} to do</p>
                <button id="Delete" onClick={this.props.handleDeleteTask}>Delete</button>
            </div>
        )
    }
}
