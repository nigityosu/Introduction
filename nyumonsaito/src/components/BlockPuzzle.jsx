import { useState } from 'react'
import { Link } from 'react-router-dom'

function BlockPuzzle({ title, instruction, pieces, solution, nextHref }) {
	const [arrangement, setArrangement] = useState(() => solution.map(() => null))
	const [selectedPiece, setSelectedPiece] = useState(null)
	const [checked, setChecked] = useState(false)
	const [showHint, setShowHint] = useState(false)
	const complete = arrangement.every((pieceId, index) => pieceId === solution[index])
	const usedPieces = new Set(arrangement.filter(Boolean))
	const placedCount = arrangement.filter(Boolean).length
	const blocksById = Object.fromEntries(pieces.map((piece) => [piece.id, piece]))

	function placePiece(slotIndex, pieceId) {
		setArrangement((current) => {
			const next = current.map((item) => item === pieceId ? null : item)
			next[slotIndex] = pieceId
			return next
		})
		setSelectedPiece(null)
		setChecked(false)
	}

	function handleSlotClick(slotIndex) {
		if (selectedPiece) {
			placePiece(slotIndex, selectedPiece)
			return
		}
		setArrangement((current) => current.map((item, index) => index === slotIndex ? null : item))
		setChecked(false)
	}

	function handleDrop(event, slotIndex) {
		event.preventDefault()
		const pieceId = event.dataTransfer.getData('text/plain')
		if (blocksById[pieceId]) placePiece(slotIndex, pieceId)
	}

	function resetPuzzle() {
		setArrangement(solution.map(() => null))
		setSelectedPiece(null)
		setChecked(false)
	}

	function checkPuzzle() {
		setChecked(true)
	}

	return (
		<section className="content-panel puzzle-panel" aria-labelledby="puzzle-title">
			<span className="status-label">{title}</span>
			<h2 id="puzzle-title">{instruction}</h2>
			<p className="puzzle-help">部品を選んで空いている場所を押すか、部品をドラッグして順番に並べてください。置いた部品を押すと外せます。</p>
			<div className="puzzle-board" aria-label="組み立てエリア">
				{arrangement.map((pieceId, index) => (
					<button
						className={`puzzle-slot${pieceId ? ' has-piece' : ''}`}
						type="button"
						key={index}
						aria-label={`順番 ${index + 1}: ${pieceId ? `${blocksById[pieceId].label}を外す` : '部品を置く'}`}
						onClick={() => handleSlotClick(index)}
						onDragOver={(event) => event.preventDefault()}
						onDrop={(event) => handleDrop(event, index)}
					>
						<span className="slot-number">{index + 1}</span>
						<code>{pieceId ? blocksById[pieceId].code : 'ここに部品を置く'}</code>
					</button>
				))}
			</div>
			<div className="puzzle-pieces" aria-label="使える部品">
				{pieces.filter((piece) => !usedPieces.has(piece.id)).map((piece) => (
					<button
						className={`puzzle-piece${selectedPiece === piece.id ? ' is-selected' : ''}`}
						type="button"
						key={piece.id}
						draggable
						onDragStart={(event) => event.dataTransfer.setData('text/plain', piece.id)}
						onClick={() => setSelectedPiece((current) => current === piece.id ? null : piece.id)}
						aria-pressed={selectedPiece === piece.id}
					>
						<span>{piece.label}</span>
						<code>{piece.code}</code>
					</button>
				))}
			</div>
			<div className="puzzle-actions">
				<button className="primary-button" type="button" onClick={checkPuzzle} disabled={placedCount !== solution.length}>できあがりを確認</button>
				<button className="secondary-button" type="button" onClick={resetPuzzle}>最初からやり直す</button>
				<button className="text-button" type="button" onClick={() => setShowHint((current) => !current)}>{showHint ? 'ヒントを隠す' : 'ヒントを見る'}</button>
			</div>
			{showHint && <p className="puzzle-hint" role="status">最初の部品は「{blocksById[solution[0]].label}」です。部品の説明を読み、プログラムの流れを考えてみましょう。</p>}
			{checked && (
				<div className={`puzzle-result${complete ? ' is-correct' : ' is-incorrect'}`} role="status" aria-live="polite">
					<strong>{complete ? '完成です！' : '順番を見直してみましょう。'}</strong>
					<p>{complete ? '部品を正しい順番に組み立てられました。' : '空いている場所を押して部品を外し、並べ直せます。'}</p>
					{complete && nextHref && <Link className="primary-button" to={nextHref}>次へ進む →</Link>}
				</div>
			)}
		</section>
	)
}

export default BlockPuzzle
