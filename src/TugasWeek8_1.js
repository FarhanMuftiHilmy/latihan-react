import React, { Component } from 'react'
import './Form.css'

export default class TugasWeek8_1 extends Component {
    constructor(){
        super();
        this.state = {nama: '', alamat: '', jenis_kelamin: ''};
    }

    

    handleChangeNama = (event) =>{
        this.setState({nama: event.target.value})        
    }

    handleChangeAlamat = (event) =>{
        this.setState({alamat: event.target.value})        
    }

    handleChangeJenisKelamin = (event) =>{
        this.setState({jenis_kelamin: event.target.value})        
    }

    render() {
        return (
            <div>
                <h1>Tugas 1 : Formulir</h1>
                <label>Masukkan nama: </label>
                <input type="text" onChange={this.handleChangeNama}/>
                <br/><br/>              
                <label>Masukkan alamat: </label>
                <br/><br/>
                <textarea type="textarea" onChange={this.handleChangeAlamat} rows="5" cols="33"/>
                <br/><br/>
                <label>Pilih Jenis Kelamin: </label> 
                <br/>
                <br/>
        
                <input type="radio" id="male" name="gender" value="Laki - laki" onChange={this.handleChangeJenisKelamin}/>
                <label for="male">Laki - laki</label>
                <br/>
                <input type="radio" id="female" name="gender" value="Perempuan" onChange={this.handleChangeJenisKelamin}/>
                <label for="female">Perempuan</label>
                <br/>
                <input type="radio" id="other" name="gender" value="Lainnya" onChange={this.handleChangeJenisKelamin}/>
                <label for="other">Lainnya</label>

                <div class="berhasil-bergabung">
                    <h2>Selamat Bergabung !</h2>
                    <label>Nama : {this.state.nama}</label>
                    <br/>
                    <label>Alamat : {this.state.alamat}</label>
                    <br/>
                    <label>Jenis Kelamin : {this.state.jenis_kelamin}</label>
                </div>
            </div>
        )
    }
}
