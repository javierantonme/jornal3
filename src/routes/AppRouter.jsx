import { Routes, Route } from 'react-router-dom'
import { AuthRouter } from '../auth/router/AuthRouter'
import { JournalRoute } from '../journal/routes/JournalRoute'

export const AppRouter = () => {
  return (
    <Routes>



        <Route path='/auth/*' element={<AuthRouter /> } />
        <Route path='/*' element={<JournalRoute /> } />



    </Routes>
  )
}
