import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled, { css } from 'styled-components'

import { colorsType, ICell, settingsState, sudokuState } from '../../control'

export interface CellProps {
  cell: ICell
}

export const Cell: React.FC<CellProps> = observer(({ cell }) => {
  const {
    disabled: { text: disabledText, background: disabledBackground },
    highlighted: { text: highlightedText, background: highlightedBackground },
    focus: { text: focusText, background: focusBackground },
    hover: { text: hoverText, background: hoverBackground },
  } = settingsState.colors

  return (
    <Container
      disabled={cell.disabled}
      onClick={() => cell.onSelect()}
      onFocus={() => cell.onSelect()}
      onKeyDown={(e) => cell.onUpdateNumber(e.key, sudokuState.selectedNumber)}
      highlighted={cell.highlighted}
      cellSide={settingsState.cellSide}
      colors={settingsState.colors}
    >
      <NotesWrapper
        notesLength={cell.notes?.length || 0}
        cellSide={settingsState.cellSide}
      >
        {cell.notes?.map((note, index) => (
          <NotedNumber key={index}>{note === 0 ? ' ' : note}</NotedNumber>
        ))}
      </NotesWrapper>
    </Container>
  )
})

const Container = styled.button<{
  cellSide: number
  highlighted: boolean
  colors: colorsType
}>`
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: inset 0px 0px 0px 0.1px rgba(0, 0, 0, 1);
  font-size: ${({ cellSide }) => `${cellSide / 2}px`};

  ${({ highlighted, colors }) =>
    highlighted
      ? css`
          background-color: ${colors.highlighted.background};
          color: ${colors.highlighted.text};
        `
      : css`
          &:disabled {
            cursor: not-allowed;
            background-color: ${colors.disabled.background};
            color: ${colors.disabled.text};
          }

          &:hover:not([disabled]) {
            background-color: ${colors.hover.background};
            color: ${colors.hover.text};
          }

          &:focus:not([disabled]) {
            background-color: ${colors.focus.background};
            color: ${colors.focus.text};
          }
        `}
`

const NotedNumber = styled.div`
  transition: transform 0.15s;
`

const NotesWrapper = styled.div<{ notesLength: number; cellSide: number }>`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: space-around;
  transition: transform 0.15s;

  ${({ notesLength, cellSide }) =>
    notesLength == 1
      ? css`
          justify-content: center;
        `
      : notesLength == 2
      ? css`
          transform: rotate(45deg);

          ${NotedNumber} {
            transform: rotate(-45deg);
            font-size: ${`${cellSide / 2.5}px`};
          }
        `
      : notesLength === 3
      ? css`
          transform: rotate(0);

          ${NotedNumber} {
            transform: rotate(0);
            font-size: ${`${cellSide / 3.4}px`};
          }

          ${NotedNumber}:nth-child(3) {
            transform: translateX(100%);
          }
        `
      : css`
          transform: rotate(0);

          ${NotedNumber} {
            transform: rotate(0);
            font-size: ${`${cellSide / 3.4}px`};
          }
        `}
`
