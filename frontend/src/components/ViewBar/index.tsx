import { useEffect, useState } from 'react';
import { MockedData } from 'mocks/ViewBar';
import { ViewBarProps, ViewBarMocks } from 'types/ViewBar';
import * as Styles from './styles';

export function ViewBar(props: ViewBarProps) {
  const [mockedData, setMockedData] = useState<ViewBarMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Styles.Container className={props.className}>
      {
        props.className === 'horizontalBar'
          ? <>
            {
              mockedData?.horizontal.map((col) => {
                return (
                  <Styles.Col width={col.width}>
                    <Styles.Label>{col.label}</Styles.Label>
                  </Styles.Col>
                )
              })
            }
          </>
          : <Styles.Sidebar>
            {
              mockedData?.vertical.map((row) => {
                return (
                  <Styles.Row>
                    <Styles.Label>{row.label}</Styles.Label>
                  </Styles.Row>
                )
              })
            }
          </Styles.Sidebar>
      }
    </Styles.Container>
  );
};