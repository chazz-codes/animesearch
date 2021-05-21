import React, { Component } from 'react';
import ExactGif from './ExactGif';

class SearchAnime extends Component {
constructor(){
    super()
    this.state={
        name:'',
        character:'',
        quote:'',
        userInput:'',
        gifCall:false,
        gifURL: ''
    }
}

handleSubmit = async (e) => {
    e.preventDefault()
    const userInput = this.state.userInput
    // search based on character input
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${userInput}`
    const character = this.state.character

    try{
        //fetch data from quote api
        const response = await fetch(url)
        const data = await response.json()
        this.setState({name:data[0].anime})
        this.setState({character:data[0].character})
        this.setState({quote: data[0].quote})
        this.setState({gifCall: true})
        console.log(this.state.name + ", " + this.state.character + ", " + this.state.quote)
        //use info from quote api to modify gif api
        const urla = `https://api.giphy.com/v1/gifs/search?api_key=kSRfXgwbzEaX6F8BuWaoKoHFN6zcbKaX&q=${this.state.character}&limit=25&offset=0&rating=g&lang=en`
        const response2 = await fetch(urla)
        const data2 = await response2.json()
        const gif = data2.data[0].images.fixed_height.url
        this.setState({gifURL:gif})
        console.log(this.state.gifURL)
    }
    catch{
        console.log('err')
    }
    //fetch anime quote
    //change state to reflect searched info
    //use state to create props for child components

}

handleChange = (e) => {this.setState({userInput: e.target.value})}

    render() {
        return (
            <div className="outer">
            <div className="searchBox">
                <ExactGif character={this.state.character} gifCall={this.state.gifCall} gifURL={this.state.gifURL}/>
                <h1>{this.state.quote}</h1> <br/>
                <h3>{this.state.character}</h3> <br/>
                <h3>{this.state.name}</h3>
                <div></div> <br/>
            <div className='form'>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.userInput} onChange={this.handleChange} placeholder="search by anime"/>
                    
                   
                    <button type="submit"> Search </button>
                </form>
            </div>
            </div>
                
            </div>
        );
    }
}

export default SearchAnime;