import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdvancedPage from './pages/advance.jsx'
import BeginnerExamPage from './pages/beg-exam.jsx'
import BeginnerPage from './pages/beginner.jsx'
import ContactPage from './pages/contact.jsx'
import ExplanationPage from './pages/about.jsx'
import GraduationExamPage from './pages/grad-exam.jsx'
import HomePage from './pages/home.jsx'
import IntermediateExamPage from './pages/int-exam.jsx'
import IntermediatePage from './pages/intermed.jsx'
import GenreTopPage from './pages/genre.jsx'
import NotFoundPage from './pages/notfound.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<ExplanationPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/genre/site" element={<GenreTopPage genre="site" />} />
				<Route path="/genre/site/beginner" element={<BeginnerPage genre="site" />} />
				<Route path="/genre/site/beginner/exam" element={<BeginnerExamPage genre="site" />} />
				<Route path="/genre/site/intermediate/html-css-js" element={<IntermediatePage />} />
				<Route path="/genre/site/intermediate/html-css-js/exam" element={<IntermediateExamPage />} />
				<Route path="/genre/site/advanced/html-css-js" element={<AdvancedPage />} />
				<Route path="/genre/site/advanced/html-css-js/exam" element={<GraduationExamPage />} />
				<Route path="/genre/game" element={<GenreTopPage genre="game" />} />
				<Route path="/genre/game/beginner" element={<BeginnerPage genre="game" />} />
				<Route path="/genre/game/beginner/exam" element={<BeginnerExamPage genre="game" />} />
				<Route path="/genre/robot" element={<GenreTopPage genre="robot" />} />
				<Route path="/genre/robot/beginner" element={<BeginnerPage genre="robot" />} />
				<Route path="/genre/robot/beginner/exam" element={<BeginnerExamPage genre="robot" />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
