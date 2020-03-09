import React from 'react';
import './App.css';
import { ProviderNew } from './context/provider'
import ItemList from './item/itemList';
import Form from './form/form';
import ColorList from './color/colorList';


class App extends React.Component {
  state = {
    colors: ['red', 'green'],
    items: ['keyboard', 'mouse'],

    setColors: (color) => {
      let colorsCp = this.state.colors;
      colorsCp.push(color);
      this.setState({ colors: colorsCp });
    },
    setItems: (item) => {
      let itemsCp = this.state.items;
      itemsCp.push(item);
      this.setState({ items: itemsCp });
    }
  }
  render() {
    return (
      <ProviderNew store={this.state}>
        <div className="App">
          <Form />
          <ItemList />
          <ColorList />
        </div>
      </ProviderNew>

    );
  }
}

export default App;
