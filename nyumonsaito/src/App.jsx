import { useEffect } from 'react'
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
	useLocation,
	useNavigate,
	useRouteError,
} from 'react-router-dom'
import AdvancedPage from './pages/advance.jsx'
import BeginnerExamPage from './pages/beg-exam.jsx'
import BeginnerPage from './pages/beginner.jsx'
import BeginnerSitePage from './pages/beginner-site.jsx'
import ContactPage from './pages/contact.jsx'
import ExplanationPage from './pages/about.jsx'
import GraduationExamPage from './pages/grad-exam.jsx'
import HomePage from './pages/home.jsx'
import IntermediateExamPage from './pages/int-exam.jsx'
import IntermediatePage from './pages/intermed.jsx'
import GenreTopPage from './pages/genre.jsx'
import GenreSelectPage from './pages/genre-select.jsx'
import NotFoundPage from './pages/notfound.jsx'
import PageLayout from './pages/layout.jsx'

function getErrorInfo(error) {
	if (error instanceof Error) {
		return {
			errorName: error.name,
			errorMessage: error.message,
			errorStack: error.stack ?? '',
		}
	}

	return {
		errorName: 'ApplicationError',
		errorMessage: String(error),
		errorStack: '',
	}
}

function navigateToError(error, sourcePath, navigate) {
	navigate('/error', {
		replace: true,
		state: {
			...getErrorInfo(error),
			sourcePath,
			timestamp: new Date().toISOString(),
		},
	})
}

function GlobalErrorListener() {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const handleError = (event) => {
			const error = event.error ?? new Error(event.message || '詳細不明のエラー')
			navigateToError(error, location.pathname, navigate)
		}
		const handleRejection = (event) => {
			navigateToError(event.reason ?? new Error('Promiseでエラーが発生しました'), location.pathname, navigate)
		}

		window.addEventListener('error', handleError)
		window.addEventListener('unhandledrejection', handleRejection)
		return () => {
			window.removeEventListener('error', handleError)
			window.removeEventListener('unhandledrejection', handleRejection)
		}
	}, [location.pathname, navigate])

	return null
}

function RouteErrorRedirect() {
	const error = useRouteError()
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		navigateToError(error, location.pathname, navigate)
	}, [error, location.pathname, navigate])

	return <p role="status">エラー情報を準備しています…</p>
}

function ErrorPage() {
	const { state } = useLocation()
	const navigate = useNavigate()
	const errorName = state?.errorName ?? 'エラー情報なし'
	const errorMessage = state?.errorMessage ?? 'このページを直接開いたため、エラーの詳細はありません。'

	return (
		<PageLayout
			eyebrow="APPLICATION ERROR"
			title="エラーが発生しました"
			description="ページの表示中に問題が発生しました。エラー内容を確認して、もう一度お試しください。"
		>
			<section className="content-panel error-panel" aria-live="polite">
				<span className="status-label">エラー内容</span>
				<h2>{errorName}</h2>
				<p className="error-message">{errorMessage}</p>
				{state?.sourcePath && <p>発生したページ: <code>{state.sourcePath}</code></p>}
				{state?.timestamp && <p>発生時刻: <time dateTime={state.timestamp}>{new Date(state.timestamp).toLocaleString('ja-JP')}</time></p>}
				{state?.errorStack && (
					<details className="error-details">
						<summary>調査用の詳細を表示</summary>
						<pre>{state.errorStack}</pre>
					</details>
				)}
			</section>
			<div className="error-actions">
				<button className="primary-button" type="button" onClick={() => navigate(state?.sourcePath ?? '/')}>
					元のページをもう一度開く
				</button>
				<Link className="text-link" to="/">ホームへ戻る</Link>
			</div>
		</PageLayout>
	)
}

function RootRoute() {
	return (
		<>
			<GlobalErrorListener />
			<Outlet />
		</>
	)
}

const router = createBrowserRouter([
	{
		element: <RootRoute />,
		errorElement: <RouteErrorRedirect />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/about', element: <ExplanationPage /> },
			{ path: '/contact', element: <ContactPage /> },
			{ path: '/genre', element: <GenreSelectPage /> },
			{ path: '/genre/site', element: <GenreTopPage genre="site" /> },
			{ path: '/genre/site/beginner', element: <BeginnerPage genre="site" /> },
			{ path: '/genre/site/beginner/lesson', element: <BeginnerSitePage genre="site" /> },
			{ path: '/genre/site/beginner/exam', element: <BeginnerSitePage genre="site" examMode /> },
			{ path: '/genre/site/intermediate/html-css-js', element: <IntermediatePage /> },
			{ path: '/genre/site/intermediate/html-css-js/exam', element: <IntermediateExamPage /> },
			{ path: '/genre/site/advanced/html-css-js', element: <AdvancedPage /> },
			{ path: '/genre/site/advanced/html-css-js/exam', element: <GraduationExamPage /> },
			{ path: '/genre/game', element: <GenreTopPage genre="game" /> },
			{ path: '/genre/game/beginner', element: <BeginnerPage genre="game" /> },
			{ path: '/genre/game/beginner/lesson', element: <BeginnerSitePage genre="game" /> },
			{ path: '/genre/game/beginner/exam', element: <BeginnerExamPage genre="game" /> },
			{ path: '/genre/robot', element: <GenreTopPage genre="robot" /> },
			{ path: '/genre/robot/beginner', element: <BeginnerPage genre="robot" /> },
			{ path: '/genre/robot/beginner/lesson', element: <BeginnerSitePage genre="robot" /> },
			{ path: '/genre/robot/beginner/exam', element: <BeginnerExamPage genre="robot" /> },
			{ path: '/error', element: <ErrorPage /> },
			{ path: '*', element: <NotFoundPage /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
