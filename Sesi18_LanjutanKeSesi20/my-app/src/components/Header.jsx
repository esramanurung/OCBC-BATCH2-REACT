import React, { Component } from 'react';

// Class Component ini berbasis OOP, dan memiliki 4 karakteristik:
// Abstraction, Encapsulation, Inheritance, dan Polymorphism

class Header extends Component {

	// Membuat state:
  // 1. Buat constructor() yang di dalamnya ada super()
  constructor() {
    super() // jangan lupa tambahkan ini

  // 2. Lalu, kita dapat tentukan state-nya di sini.
    this.state = {
      name: "FSD OCBC Batch ke-2!!!!"
    }
  }

  render() {
    return (
      <h3>
         {/* 3. Kemudian, kita dapat tampilkan state-nya di sini  */}
        Halo kelas {this.state.name}
      </h3>
    )
  }
}

// Agar dapat digunakan di aplikasi lain, jangan lupa di-export seperti ini

export default Header
