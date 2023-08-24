import React, { useMemo, useState } from 'react'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

import { Numbers, Settings, Timer } from './components'
import { settingsState, sudokuState } from './control'

const Board = dynamic(import('./components/Board/Board'), { ssr: false })

export const IndexPage: React.FC = observer(() => {
  const [isInvalidated, setIsInvalidated] = useState(false)
  const { isSolved, generatingBoard } = sudokuState

  const isCheckAvailable = sudokuState.board.some((row) =>
    row.some((cell) => cell.number === 0 || cell.notes?.length > 1),
  )

  const onCheckClick = () => {
    setIsInvalidated(!sudokuState.validateBoard())

    setTimeout(() => setIsInvalidated(false), 1200)
  }

  return (
    <Container>
      <SettingsWrapper>
        <Settings />
      </SettingsWrapper>

      <Menu>
        <Button
          onClick={onCheckClick}
          type="primary"
          danger={isInvalidated}
          disabled={isCheckAvailable}
        >
          {isSolved ? 'Верно' : isInvalidated ? 'Неверно' : 'Проверить'}
        </Button>

        <Button
          onClick={() => {
            sudokuState.getAnswer()
          }}
          disabled={sudokuState.isSolved}
        >
          Решить
        </Button>

        <Button
          onClick={() => {
            sudokuState.clearBoard()
            sudokuState.selectNumber(0)
          }}
          disabled={sudokuState.isSolved}
        >
          Очистить
        </Button>

        <Button
          onClick={() => {
            sudokuState.generateBoard(settingsState.difficulty)
            sudokuState.selectNumber(0)
          }}
          disabled={generatingBoard}
        >
          Новая игра
        </Button>

        <Timer />
      </Menu>

      <Board />

      {settingsState.showLeftNumber && <Numbers />}
    </Container>
  )
})

const Container = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  gap: 32px;
`

const SettingsWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Menu = styled.div`
  display: grid;
  grid-template-columns: 120px repeat(3, min-content);
  align-items: center;
  gap: 0 24px;
`
