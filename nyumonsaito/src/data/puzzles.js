export const beginnerPuzzles = {
	site: {
		title: 'WEB SITE · LESSON 01',
		instruction: 'Webページの部品を、正しい順番で組み立てましょう。',
		pieces: [
			{ id: 'heading', label: '見出し', code: '<h1>はじめてのページ</h1>' },
			{ id: 'close', label: '閉じタグ', code: '</main>' },
			{ id: 'button', label: 'ボタン', code: '<button>はじめる</button>' },
			{ id: 'open', label: '全体を囲む', code: '<main>' },
			{ id: 'paragraph', label: '説明文', code: '<p>ページを作ってみよう。</p>' },
			{ id: 'wrong', label: 'まちがい部品', code: '</p>' },
		],
		solution: ['open', 'heading', 'paragraph', 'button', 'close'],
	},
	game: {
		title: 'GAME · LESSON 01',
		instruction: 'ゲームの開始から画面更新まで、処理の順番を組み立てましょう。',
		pieces: [
			{ id: 'input', label: '入力を受け取る', code: 'プレイヤーの操作を読む' },
			{ id: 'start', label: 'ゲーム開始', code: 'ゲームを開始する' },
			{ id: 'update', label: '画面を更新', code: '新しい状態を画面に表示する' },
			{ id: 'state', label: '状態を準備', code: 'スコアとプレイヤーを初期化する' },
			{ id: 'wrong', label: 'まちがい部品', code: 'ゲームを終了する' },
		],
		solution: ['start', 'state', 'input', 'update'],
	},
	robot: {
		title: 'ROBOT · LESSON 01',
		instruction: 'センサーを使ってロボットを動かす流れを組み立てましょう。',
		pieces: [
			{ id: 'move', label: '前進する', code: 'ロボットを前に進める' },
			{ id: 'sensor', label: '距離を調べる', code: 'センサーで前方の距離を読む' },
			{ id: 'stop', label: '停止する', code: 'ロボットを停止する' },
			{ id: 'condition', label: '条件を確認', code: '障害物が近いか調べる' },
			{ id: 'wrong', label: 'まちがい部品', code: 'センサーを無効にする' },
		],
		solution: ['sensor', 'condition', 'move', 'stop'],
	},
}

export const intermediatePuzzle = {
	title: 'HTML・CSS・JavaScript · PRACTICE',
	instruction: 'ボタンをクリックしたときに文章が変わる処理を組み立てましょう。',
	pieces: [
		{ id: 'select', label: 'ボタンを取得', code: "const button = document.querySelector('#greet');" },
		{ id: 'message', label: '文章の要素を取得', code: "const message = document.querySelector('#message');" },
		{ id: 'update', label: '文章を変更', code: "message.textContent = 'こんにちは！';" },
		{ id: 'wrong', label: 'イベント名を指定', code: "button.addEventListener('hover', () => {" },
		{ id: 'listen', label: 'クリックを待つ', code: "button.addEventListener('click', () => {" },
		{ id: 'close', label: '処理を閉じる', code: '});' },
	],
	solution: ['select', 'message', 'listen', 'update', 'close'],
}

export const beginnerExamPuzzles = {
	site: {
		title: 'BEGINNER EXAM · WEB',
		instruction: 'プロフィールページの構造を完成させましょう。',
		pieces: [
			{ id: 'title', label: 'ページ全体', code: '<main>' },
			{ id: 'close', label: 'ページを閉じる', code: '</main>' },
			{ id: 'heading', label: '見出し', code: '<h1>わたしの紹介</h1>' },
			{ id: 'text', label: '紹介文', code: '<p>好きなことを紹介します。</p>' },
			{ id: 'wrong', label: 'まちがい部品', code: '<footer>' },
		],
		solution: ['title', 'heading', 'text', 'close'],
	},
	game: {
		title: 'BEGINNER EXAM · GAME',
		instruction: 'ゲームの1ターンに必要な処理を順番に並べましょう。',
		pieces: [
			{ id: 'input', label: '操作を読む', code: 'プレイヤーの入力を受け取る' },
			{ id: 'draw', label: '画面を描く', code: '現在の状態を画面に表示する' },
			{ id: 'end', label: 'ゲームを終える', code: 'ゲームを終了する' },
			{ id: 'update', label: '状態を更新', code: '入力に合わせてゲームの状態を更新する' },
		],
		solution: ['input', 'update', 'draw'],
	},
	robot: {
		title: 'BEGINNER EXAM · ROBOT',
		instruction: '障害物を見つけて止まるロボットの処理を並べましょう。',
		pieces: [
			{ id: 'read', label: '距離を読む', code: 'センサーから距離を取得する' },
			{ id: 'check', label: '条件を確認', code: '距離が近いか判定する' },
			{ id: 'stop', label: '停止', code: 'ロボットを停止する' },
			{ id: 'wrong', label: 'まちがい部品', code: '障害物に向かって進む' },
		],
		solution: ['read', 'check', 'stop'],
	},
}
