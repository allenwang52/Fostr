'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more animals in your area</Text>
      </View>
    )
  }
}

const cards = [
  {name: 'Winky', image: 'https://media.giphy.com/media/jp2KXzsPtoKFG/giphy.gif'},
  {name: 'Tappy Tips', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  {name: 'Jeff', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  {name: 'Da Bois', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {name: 'Doug', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {name: 'Poug', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {name: 'Fish', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {name: 'Cat', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {name: 'X AE A-12', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
]

const cards2 = [
  {name: 'L', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: 'M', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: 'A', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: 'O', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup (card) {
    console.log("Liked!")
  }

  handleNope (card) {
    console.log("Disliked")
  }

  handleMaybe (card) {
    console.log("Pawfect!")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    }

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        showYup={true}
        showNope={true}
        hasMaybeAction={true}
        dragY={false} // Disabling Y drag because it is buggy (shows both maybe action and yup/nope depending which it is closer too)

        yupText="Like"
        nopeText="Dislike"
        maybeText="Pawfect!"

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: '#b089d0',
    borderWidth: 1,
    elevation: 5,
  },
  thumbnail: {
    width: Dimensions.get("window").width - 10,
    height: "90%",
  },
  text: {
    color:"white",
    fontSize: 30,
    paddingTop: "2%",
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})