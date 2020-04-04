import React, { Component } from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import Gallery from './Gallery'

class Global extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      items: []
    }
  }

  search(){
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    console.log('state.query:', this.state.query);

    fetch(`${baseURL}${this.state.query}`, { method:'GET'})
    .then(response => response.json())
    .then(json => {
      let {items} = json;
      this.setState({items})
      console.log('items:', items);
    })
  }

  render(){
    return (
      <div className="text-center">
        <h1>Book Explorer</h1>
        <InputGroup>
          <Input 
            type="text"
            placeholder="Search for a book..."
            onChange={event => this.setState({query: event.target.value})}
            onKeyPress={event => {
              if (event.key === 'Enter'){
                this.search();
              }
            }}
          />
          <InputGroupAddon addonType="append"><Button color="success" onClick={() => this.search()}>Search</Button></InputGroupAddon>
        </InputGroup>
        <hr/>
        <Gallery items={this.state.items}/>
      </div>
    )
  }
}

export default Global;
