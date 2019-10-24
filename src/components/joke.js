import React from "react";
import Chuck from "chucknorris-io";

const chuckApi = new Chuck();

export default class Joke extends React.Component {
  state = { joke: null, loading: false, url: null };

  fetchJoke = async () => {
    this.setState({ loading: true });

    const categories = await chuckApi.getJokeCategories();
    console.log("Original category", categories);

    // filter out the "explicit" category
    const filteredCategories = categories.filter( (category) => category !== 'explicit');
    console.log("Filtered category", filteredCategories);

    // get a random category
    const category = filteredCategories[Math.floor(Math.random()*filteredCategories.length)];
    console.log("Random category", category);

    const res = await chuckApi.getRandomJoke(category);
    console.log(res);
    this.setState({ joke: res.value, url: res.sourceUrl, loading: false });
  };

  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    return (
      <section>
        <div className="joke">{this.state.joke}</div>
        <button className="btn" onClick={this.fetchJoke}>Get Joke</button>
      </section>
    )
  }
}
