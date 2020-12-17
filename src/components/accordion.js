import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  Divider
} from 'theme-ui';
import theme from '../lib/theme';

const Accordion = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let tempItems = [];
    data.forEach((item) => {
      tempItems.push({
        title: item.title,
        content: item.content,
        height: item.height,
        open: false
      });
    });

    setItems(tempItems);
  }, []);

  const clickItem = (item) => {
    console.log(item.height);
    const newAccordion = items.slice();
    const index = newAccordion.indexOf(item);

    newAccordion[index].open = !newAccordion[index].open;
    setItems(newAccordion);
  };

  return (
    <Grid
      columns={[2]}
      gap={[6, 6]}
      sx={{ alignItems: 'center', span: { color: 'white' } }}
    >
      <Image
        src="/images/image2.svg"
        alt="Illustration of Orpheus with a moon"
        // width={512}
      />
      <div>
        {items.map((i, index) => (
          <>
            <div key={items.indexOf(i)}>
              <div
                onClick={() => clickItem(i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  position: 'relative',
                  padding: '10px 0',
                  zIndex: 2000,
                  borderRadius: '4px',
                  marginTop: '0',
                  transition: 'all 0.2s ease-in',
                  cursor: 'pointer'
                }}
              >
                <Text
                  variant="subtitle"
                  sx={{ margin: '0', color: theme.colors.muted }}
                >
                  {i.title}
                </Text>
              </div>
              <div
                id={index}
                style={
                  i.open
                    ? {
                        width: '100%',
                        fontSize: '14px',
                        position: 'relative',
                        my: 0,
                        zIndex: 1000,
                        textAlign: 'left',
                        marginTop: '0px',
                        height: i.height,
                        transition:
                          'all 800ms cubic-bezier(0.08, 1.09, 0.32, 1.275)'
                      }
                    : {
                        height: i.height,
                        width: '100%',
                        color: 'white',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1000,
                        marginTop: `-${i.height}`,
                        textAlign: 'left',
                        transition:
                          'all 800ms cubic-bezier(0.6, -0.28, 0.735, 0.045)'
                      }
                }
              >
                <Text
                  variant="lead"
                  sx={{ fontSize: theme.fontSizes[2], my: 0 }}
                  style={
                    i.open
                      ? {
                          padding: '1rem',
                          overflow: 'auto',
                          fontSize: '1rem',
                          visibility: 'visible',
                          margin: 0,
                          opacity: 1,
                          transition: 'all 0.8s ease-in'
                        }
                      : {
                          padding: '1rem',
                          overflow: 'auto',
                          fontSize: '1rem',
                          visibility: 'hidden',
                          margin: 0,
                          opacity: 0,
                          transition: 'all 0.2s ease-in'
                        }
                  }
                >
                  {i.content}
                </Text>
              </div>
            </div>
            <Divider sx={{ borderColor: theme.colors.slate, my: [0] }} />
          </>
        ))}
      </div>
    </Grid>
  );
};

export default Accordion;
