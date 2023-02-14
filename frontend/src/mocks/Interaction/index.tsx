import { InteracionMocks } from "types/Interaction";

export const MockedData: InteracionMocks = {
  classHover: 'Hover',
  classFocus: 'interactionFocus',
  classNameInteraction: [
    {
      id: 'interactionPrimary',
      class: 'interactionDisabled'
    },
    {
      id: 'interactionSecondary',
      class: 'interactionLoading'
    },
    {
      id: 'interactionTertiary',
      class: 'interactionMovable'
    }
  ],
  textDocMock: {
    className: 'interaction',
    header: 'Teste os botões',
    text: `Interaja com os botões e observe a mudança de aparência e de
      cursores`
  },
  buttons: [
    {
      id: 'interactionPrimary',
      className: 'interaction primary',
      label: 'Interaja Comigo',
    },
    {
      id: 'interactionSecondary',
      className: 'interaction secondary',
      label: 'Interaja Comigo',
    },
    {
      id: 'interactionTertiary',
      className: 'interaction tertiary',
      label: 'Interaja Comigo',
    }
  ]
};