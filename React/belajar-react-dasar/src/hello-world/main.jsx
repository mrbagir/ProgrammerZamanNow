import {createRoot} from "react-dom/client"
import HelloWorld from "./HelloWorld.jsx"
import { StrictMode } from "react"
import Container from "./Container.jsx"
import TodoList from "../todolist/TodoList.jsx"
import Table from "../table/Table.jsx"
import AlertButton from "../button/AlertButton.jsx"
import MyButton from "../button/MyButton.jsx"

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>

                <AlertButton text="Click Me" message="You click me"/>
                
                <MyButton text="Smash me" onSmash={() => alert("You smash me")}/>
            </Container>
        </StrictMode>
    )