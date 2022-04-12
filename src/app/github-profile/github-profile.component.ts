import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private anotherRoute?: Router) {}

  ngOnInit() {
    // console.log(this.route.snapshot);
    // console.log(this.route.snapshot.params);
    // console.log(this.route.snapshot.queryParams);
    // this.route.params.subscribe({
    //   next: (param) => console.log(param),
    // });

    // this.route.queryParamMap.subscribe({
    //   next: (res) => console.log(res['params']),
    // });

    // this.route.queryParams.subscribe({
    //   next: (query) => console.log(query),
    // });

    combineLatest([this.route.params, this.route.queryParams]).subscribe({
      next: ([params, querys]) => {
        console.log(params, querys);
      },
    });
  }

  submit() {
    this.anotherRoute?.navigate(['/posts'], {
      queryParams: { name: 'post', id: 'unknown' },
    });
  }
}
