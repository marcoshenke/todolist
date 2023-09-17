import { useState, useEffect } from 'react'
import { fetchTasks } from '../../services'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button  }  from '@mui/material'

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
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Título</TableCell>
							<TableCell align="center">status</TableCell>
							<TableCell align="center">Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{todos?.map((row) => (
							<TableRow
								key={row?.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="center">
									{row?.title}
								</TableCell>
								<TableCell align="center">{row?.status}</TableCell>
								<TableCell align='center'>
									<Box >
										<Button >Completar</Button>
										<Button className='Buttons'>Excluir</Button>
									</Box>									
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default Home