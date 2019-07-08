import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { CssSelector } from '@angular/compiler';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  obs$;
  show = false;

  constructor(private cs: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit() {
    /* BEGIN 2.2 */
    this.obs$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.cs.getBlogPost(params.get('id'))
    ));
    /* END 2.2 */
    
    setTimeout(() => {
      this.show = true;
    }, 150);
  }

}
