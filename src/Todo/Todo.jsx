import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, doneTodo } from './TodoSlice'
import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

function Todo() {
    const [input, setInput] = useState("")
    const { todos, count } = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <Box sx={{ width: "60%", margin: "20px auto", textAlign: "center", backgroundColor: "#2596be", color: "white", minHeight: "80vh", borderRadius: "50px" }}>
            <Typography sx={{ margin: '20px auto' }} variant="h4" gutterBottom>
                Redux Todo App
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <TextField sx={{ width: "80%", margin: "3px auto" }} onChange={handleChange} value={input} id="standard-basic" label="todo" variant="standard" />
                <Button sx={{ width: "50%", margin: "3px auto" }} onClick={() => dispatch(addTodo(input))} variant='contained'>add</Button>
            </Box>
            <Box>
                {todos.map((item, index) => {
                    return (
                        <Box key={index} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "white", color: "#2596be", fontWeight: "bold", borderRadius: "10px", width: "90%", padding: "10px", margin: "10px auto", boxShadow: "box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;" }}>
                            <Box>{index + 1}-{item.text}</Box>
                            <Box>
                                <IconButton onClick={() => dispatch(deleteTodo(item.id))} aria-label="delete" color="primary">
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton disabled={item.completed} onClick={() => dispatch(doneTodo(item.id))} aria-label="delete" color="primary">
                                    <DomainVerificationIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Todo