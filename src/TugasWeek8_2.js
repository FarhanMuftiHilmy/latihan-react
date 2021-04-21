import React, { Component } from 'react'
import './App.css' 


export default class TugasWeek8_2 extends Component {
        
    constructor(){
        super();
        this.state = {articles: []}
    }
    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=713ae87c31854452b8234e414b66bd9e")
        .then(response => response.json())
        .then((articles) => {
            this.setState({articles: articles.articles})
        })
    }
    render() {
        return (            
            <div id="news">
            <h1>Tugas 2 : Menampilkan API</h1>
            <h1 class="headline">HEADLINE NEWS!</h1>
            {
                this.state.articles.map((dinamis, key)=>
                <div class="gallery" key={dinamis.source.id}>
                <a target="_blank" href={dinamis.url}>
                    {dinamis.urlToImage != null ? <img key={dinamis.urlToImage} src={dinamis.urlToImage}/> : <img src={window.location.origin + '/no_image_avaliable.jpg'} /> }
                   
                </a>    
                {/* <div class="desc"><strong>{dinamis.title}</strong><br/><p>{dinamis.description}</p></div> */}
                <div class="desc">{dinamis.title != null ? <><strong>{dinamis.title}</strong><br/></> : <p>Judul tidak tersedia</p>}</div>

                <div class="desc">{dinamis.description != null ?  <p>{dinamis.description}</p> : <p>Deskripsi tidak tersedia</p>}</div>



               
                </div>
                )
            }
            </div>
        );
    }

}

// constructor(){
    //     super();
    //     this.state = {movie: "sdfd"}
    // }

    // componentDidMount(){
    //     fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", { 
    //         "method": "GET", "headers": {
    //             "x-rapidapi-key": "479b3acf0emshb2cdb6b0017c536p180070jsnf3c0ac36b27c",
    //             "x-rapidapi-host": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then((response) => {
    //         this.setState({movie: response})
    //     });
    // }

    // render(){
    //     console.log(this.state.movie);
    //     return(
    //         <div>
    //             <h1>{this.state.title}</h1>
    //             <h2>
    //                 <span>
    //                     Tahun Rilis: {this.state.title}, Durasi: {this.state.length}
    //                 </span>
    //             </h2>
    //             <img src={this.state.poster} />
    //             <p>
    //                 <strong>Rating: {this.state.rating}</strong>
    //                 <strong>Votes: {this.state.rating_votes}</strong>
    //             </p>
    //             <p><strong>Sinopsis: {this.state.plot}</strong></p>
    //         </div>
    //     );
    // }