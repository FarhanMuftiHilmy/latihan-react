import React, { Component } from 'react'
import './App.css'

class Tugas4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: 'Farhan Mufti Hilmy',
            kelas: 'TRPL B',
            NIM: '19/441222/SV/16574',
            semester: 4
        };
    }

    gantiNamaPanggilan = () => {
        this.setState({
            nama: 'Hilmy'
        })
    }

    tambahSemester = () => {
        this.setState({
            semester: this.state.semester+=1
        })
    }

    kurangiSemester = () => {
        this.setState({
            semester: this.state.semester-=1
        })
    }
    render() {
        return (
            <div className="tugas4">
                {this.state.nama}
                <br/>
                <button className="btn-hilmy" onClick={this.gantiNamaPanggilan}>Ganti Nama Panggilan</button>
                <br/>
                {this.state.kelas}
                <br/>
                {this.state.NIM}
                <br/>
                {this.state.semester}
                <br/>
                <button className="btn-tambah-semester" onClick={this.tambahSemester}>+</button>
                <button className="btn-kurangi-semester" onClick={this.kurangiSemester}>-</button>
            </div>
        );
    }
}

export default Tugas4;
