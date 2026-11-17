const API_BASE = '/api'

async function request(path) {
	const response = await fetch(`${API_BASE}${path}`)
	if (!response.ok) {
		throw new Error(`ページ情報を取得できませんでした (${response.status})`)
	}
	return response.json()
}

// ページ一覧: GET /api/pages.json
export function getPages() {
	return request('/pages.json')
}

// パスでページを検索します。例: getPageByPath('/about')
export async function getPageByPath(path) {
	const pages = await getPages()
	return pages.find((page) => page.path === path) ?? null
}
