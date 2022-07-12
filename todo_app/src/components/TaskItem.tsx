import React from "react"; //このReactはどういうモジュールだっけ？
import { Task } from './Types' //ここのimportはcomponents/Type.tsxを持ってきている

type Props = { //これもpropsの型を定義している
    task: Task //ここのtaskの型定義はTypeコンポーネントをtaskにしている
    handleDone: (task: Task) => void //voidを再度調べ直す
    handleDelete: (task: Task) => void //(task: Task) => voidはどのようなロジックで動いている？
}

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => { //React.FC<Props> ここの書いている意味を調べる

    return ( //ここのreturnの処理がよくわからない
        <li className = { task.done ? 'done' : ''}>
            <label>
                <input
                    type = 'checkbox'
                    className = 'checkbox-input'
                    onClick = { () => handleDone(task) }
                    defaultChecked = { task.done }
                    />
                </label>

                <button
                onClick = { () => handleDelete(task) }
                className = 'btn is-delete'
                >削除</button>
        </li>
    )
}

export default TaskItem