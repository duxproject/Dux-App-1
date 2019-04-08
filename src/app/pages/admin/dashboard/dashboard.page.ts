import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage {

  constructor(private menu: MenuController) { }

  getUrl()
  {
    return "url('https://loveincorporated.blob.core.windows.net/contentimages/fullsize/8d311461-e6ec-4e5a-9eab-6a117a43f9c1-woman-travelling-alone.jpg')";
  }

}
