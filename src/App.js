import React, { Component } from 'react';
import { getBreakingNews } from "./services/fakeBreakingNewsService";
import { getSportNews } from "./services/httpService";
import NewsTable from "./components/newsTable";
import './App.css';

class App extends Component {
  state = {
    breakingNews: [],
    sportNews: []
  }

  async componentDidMount() {
    const breakingNews = [...getBreakingNews()];
    this.setState({ breakingNews });
    const { data } = await getSportNews();
    this.setState({ sportNews: data });
  }

  render() {
    const { breakingNews, sportNews } = this.state;
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">LATEST NEWS</h1>
        </header>
        <div className="App-body">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <NewsTable
                data={breakingNews}
                id="breakingNews"
                heading={<React.Fragment>BREAKING NEWS <i className="fa fa-caret-right" aria-hidden="true"></i></React.Fragment>}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewsTable data={sportNews} id="sportNews" heading="MOST POPULAR SPORT NEWS" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
