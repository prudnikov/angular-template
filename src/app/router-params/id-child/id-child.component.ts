import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-id-child',
  templateUrl: './id-child.component.html',
  styleUrls: ['./id-child.component.scss'],
})
export class IdChildComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}
