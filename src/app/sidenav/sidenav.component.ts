import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  opened = false;
  curr: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.curr = this.activatedRoute.snapshot.params['rover'];

    this.activatedRoute.params.subscribe((param: Params) => {
      this.curr = param['rover'];
      console.log('subscribe methodd');
    });
  }

  toggleSidebar() {
    this.opened = !this.opened;
    console.log('toggle side bar');
  }
}
