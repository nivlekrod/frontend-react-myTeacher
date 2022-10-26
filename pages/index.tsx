import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import List from '../src/components/list/list'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
    listProfessores,
    name,
    setName,
    email,
    setEmail,
    selectedProfessor,
    setSelectedProfessor,
    bookAClass,
    message,
    setMessage
  } = useIndex();

  return (
    <div>
      <Box sx={({ backgroundColor: 'secondary.main' })}>
        <List
          professores={listProfessores}
          onSelect={(professor) => setSelectedProfessor(professor)}
        ></List>
      </Box>

      <Dialog open={selectedProfessor !== null} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setSelectedProfessor(null)}>Cancelar</Button>
          <Button onClick={() => bookAClass()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        message={message}
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </div>
  )
}

export default Home
