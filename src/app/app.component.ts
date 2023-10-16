import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css', "./app.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
// implements OnInit
export class AppComponent implements OnInit {
  url?: String;
  ngOnInit(): void {
    this.url = this.url1;
  }
  title = 'first-app';
  url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";
  url2 = "https://bilginc.com/editorFiles/3147aa77.png";
  jours = ["lundi", "mardi", "mercredi", "saturday"];

  show = true;

  changeVisibilty() {
    this.show = !this.show;
  }

  changeLogo = () => {
    this.url = (this.url == this.url1 ? this.url2 : this.url1);
    console.log("button clicked");
  }


}
