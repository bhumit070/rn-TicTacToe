import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,
  H3,
  Button,
  Title,
} from 'native-base';
import Snackbar from 'react-native-snackbar';
import Icon from './components/Icons';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState(null);

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#000',
        textColor: '#fff',
      });
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
      checkIsWinner();
    } else {
      return Snackbar.show({
        text: 'Position is Already Filled',
        backgroundColor: '#000',
        textColor: '#fff',
      });
    }
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage(null);
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    if (itemArray.includes('empty') === false) {
      setWinMessage('Game is Draw 😲😲');
    }
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} WON !! 🎉🎉`);
    }
    if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} WON !! 🎉🎉`);
    }
    if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} WON !! 🎉🎉`);
    }
    if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} WON !! 🎉🎉`);
    }
    if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} WON !! 🎉🎉`);
    }
    if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} WON !! 🎉🎉`);
    }
  };

  return (
    <>
      <Container style={{backgroundColor: '333945', padding: 5, marginTop: 10}}>
        <Header>
          <Body>
            <Title style={{marginLeft: '30%'}}>Tic Tac Toe</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.grid}>
            {itemArray.map((item, index) => (
              <TouchableOpacity
                style={styles.box}
                key={index}
                onPress={() => changeItem(index)}>
                <Card style={styles.card}>
                  <Icon icon={item} />
                </Card>
              </TouchableOpacity>
            ))}
            {winMessage ? (
              <View>
                <H1 style={styles.message}> {winMessage} </H1>
                <Button
                  onPress={reloadGame}
                  style={styles.message}
                  primary
                  block>
                  <Text> Reload Game </Text>
                </Button>
              </View>
            ) : (
              <H3 style={styles.message}>
                {isCross ? 'Cross' : 'Circle'} 's Turn
              </H3>
            )}
          </View>
        </Content>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: 30,
    backgroundColor: '#4652b3',
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default App;
