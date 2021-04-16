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
