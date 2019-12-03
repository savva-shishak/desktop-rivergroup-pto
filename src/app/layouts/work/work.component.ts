import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router, public ui: UiService) {
    this.navLinks = [
      {
        icon: 'fas fa-home',
        link: '/',
        label: 'Домашняя страница',
        index: 0
      }, {
        icon: 'fas fa-file-contract',
        link: '/contracts',
        label: 'Договоры и КП',
        index: 1
      }, {
        icon: 'far fa-address-card',
        link: '/empls',
        label: 'Сотрудники',
        index: 2
      }, {
        icon: 'fas fa-hammer',
        link: '/equipments',
        label: 'Оборудование и техника',
        index: 3
      }, {
        icon: 'fas fa-boxes',
        link: '/materials',
        label: 'Материалы',
        index: 4
      }
    ];
    }
  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '' + this.router.url));
  });
  }

}
