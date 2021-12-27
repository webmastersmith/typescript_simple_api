import axios from 'axios'
// const axios = require('axios')

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
  console.table(res.data)
  const todo = res.data as Todo

  const id = todo.id;
  const title = todo.title
  const completed = todo.completed


  console.log(`Title: ${title}, with Id: ${id} is ${completed ? 'completed': 'not completed'}`)
})
