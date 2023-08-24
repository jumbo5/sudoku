import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { SettingOutlined } from '@ant-design/icons'
import { Button, Drawer, Popover, Select, Slider, Switch } from 'antd'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import {
  colorKeys,
  difficulties,
  difficultiesType,
  settingsState,
  sudokuState,
} from '../../control'

export interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = observer(() => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  const onToggleDrawer = () => setIsDrawerVisible((isVisible) => !isVisible)

  return (
    <Container>
      <Button
        type="primary"
        shape="circle"
        icon={<SettingOutlined />}
        onClick={onToggleDrawer}
      />

      <Drawer
        title="Settings"
        placement="right"
        closable
        onClose={onToggleDrawer}
        open={isDrawerVisible}
      >
        <Setting>
          <p>Размер ячеек</p>
          <Slider
            min={48}
            max={96}
            value={settingsState.cellSide}
            step={2}
            onChange={(num: number) => settingsState.updateCellSide(num)}
          />
        </Setting>

        <Setting>
          <p>Цвета</p>
          <ColorsWrapper>
            {colorKeys.map((key) => (
              <Popover
                key={key}
                placement="left"
                content={
                  <>
                    <p>Фон</p>
                    <HexColorPicker
                      color={settingsState.colors[key].background}
                      onChange={(color) => {
                        settingsState.updateColor(key, 'background', color)
                      }}
                    />
                    <br />
                    <p>Текст</p>
                    <HexColorPicker
                      color={settingsState.colors[key].text}
                      onChange={(color) => {
                        settingsState.updateColor(key, 'text', color)
                      }}
                    />
                  </>
                }
              >
                <Button>{key}</Button>
              </Popover>
            ))}
          </ColorsWrapper>
        </Setting>

        <Setting>
          <p>Показывать таймер</p>
          <Switch
            checked={settingsState.showTimer}
            onChange={() => settingsState.toggleShowTimer()}
          />
        </Setting>

        <Setting>
          <p>Показывать оставшиеся числа</p>
          <Switch
            checked={settingsState.showLeftNumber}
            onChange={() => {
              settingsState.toggleShowLeftNumber()
              sudokuState.selectNumber(0)
            }}
          />
        </Setting>

        <Setting>
          <p>Сложность</p>
          <StyledSelect
            value={settingsState.difficulty}
            options={difficulties.map((difficulty, index) => ({
              value: index,
              label: difficulty,
            }))}
            loading={sudokuState.generatingBoard}
            onSelect={(value) => {
              sudokuState.generateBoard(value as number)
              settingsState.changeDifficulty(value as number)

              return value
            }}
          />
        </Setting>
      </Drawer>
    </Container>
  )
})

const Container = styled.div``

const Setting = styled.div`
  p {
    margin-bottom: 4px;
  }
  & + & {
    margin-top: 20px;
  }
`

const ColorsWrapper = styled.div`
  display: grid;
  gap: 0 4px;
`

const StyledSelect = styled(Select)`
  width: 100%;
`
