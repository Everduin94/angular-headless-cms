import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  show = false;
  obs$;

  constructor(private cs: ContentfulService, private router: Router) { }

  ngOnInit() {
    this.obs$ = this.cs.getBlogPosts();
    setTimeout(() => {
      this.show = true;
    }, 50);
  }

  onClick(id) {
    console.log(id)
    this.router.navigate(['/post', id])
  }

}
