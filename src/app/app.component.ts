import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MenubarModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "PrimeNgThemeBuilder";

  menuItems: MenuItem[] = [
    {
      label: "Browse Prebuilt Themes",
      icon: PrimeIcons.SEARCH,
    },
    {
      label: "Start From Scratch",
      icon: PrimeIcons.FILE_EDIT,
    },
  ];
}
