import { Component } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books = [
    { id: 1, titre: 'Atomic habits', auteur: 'James Clear', prix: "30" },
    { id: 2, titre: 'Power of habits', auteur: 'Jeff Olsen', prix: "25" }
  ];

  visib = false;
  changeVisib() {
    this.visib = !this.visib;
  }

  titre = "";
  auteur = "";
  prix = "";
  addLivre() {
    this.books.push({ id: this.books[this.books.length - 1].id + 1, titre: this.titre, auteur: this.auteur, prix: this.prix });
    this.titre = "";
    this.auteur = "";
    this.prix = "";
  }
  deleteLivre(id: Number) {
    this.books = this.books.filter(book => book.id != id);
  }
  disabledID = 0;
  isEditing = false;
  editerLivre(id: number) {
    if (!this.isEditing) {
      this.disabledID = id;
      this.isEditing = true;
    }
    else {
      if (this.disabledID != id) {
        this.disabledID = id;
      }
      else {
        this.disabledID = 0;
        this.isEditing = false;
      }
    }
  } isEditingForReal(id: number) {
    return this.isEditing && id == this.disabledID;
  }
}
