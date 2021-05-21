import React, { Component } from 'react';
import ExactGif from './ExactGif';

class Random2 extends Component {
    constructor(){
        super()
        this.state ={
            anime: "",
            character: "",
            quote: "",
        }
    }
   async componentDidMount(){
        const url = `https://animechan.vercel.app/api/random`
        const response = await fetch(url)
        const data = await response.json()
       console.log(data.character)
       this.setState({anime: data.anime})
       this.setState({character: data.character})
       this.setState({quote: data.quote})
       // gif
       const urla = `https://api.giphy.com/v1/gifs/search?api_key=kSRfXgwbzEaX6F8BuWaoKoHFN6zcbKaX&q=${this.state.anime}&limit=25&offset=0&rating=g&lang=en`
       const response2 = await fetch(urla)
       const data2 = await response2.json()
       const gif = data2.data[0].images.fixed_height.url
       this.setState({gifURL:gif})
       console.log(this.state.gifURL)

    }

    render() {
        return (
            <div className="outer">
            <div className="box2">
                <ExactGif gifURL ={this.state.gifURL} />
                <div className="textHolder">
               {this.state.quote} <br/>
               - {this.state.character} <br/>
               {this.state.anime}
               </div>
            </div>
            </div>
        );
    }
}

export default Random2;