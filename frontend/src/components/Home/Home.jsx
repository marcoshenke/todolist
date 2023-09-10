import { useState, useEffect } from 'react'
import { fetchTasks } from '../../services'

const Home = () => {

	const [todos, setTodos] = useState([]) 
	const [loading, setLoading] = useState(true) 
 
	useEffect(() => {
		const fetchAndDisplayTasks = async () => {
			try {
				const tasks = await fetchTasks()
				setTodos(tasks)
				setLoading(false)
			} catch (error) {
				console.error('Ocorreu um erro ao buscar as tarefas:', error)
			}
		}
 
		fetchAndDisplayTasks()
	}, []) 

	console.log(todos)
 
	if (loading) {
		return <p>Carregando...</p>
	}
 
	return (
		<div className="app">
			<h1>Lista de Tarefas</h1>
			<div className="todo-list">
				{
					todos?.map((todo) => (
						<div className="todo" key={todo?.id}>
							<div className="content">
								<p>{todo?.title}</p>
								<p>{todo?.status}</p>
							</div>
							<div>
								<button>Completar</button>
								<button>X</button>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Home