import { Injectable } from '@angular/core';

import { createClient } from 'contentful';
import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const CONFIG = environment.contentful_config;

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  /* BEGIN 2.1 */
  getBlogPost(id) {
    const promise = this.cdaClient.getEntry(id);
    return from(promise).pipe(map(entry => entry.fields));
  }
  /* END 2.1 */

  /* BEGIN 1.1 */
  getBlogPosts() {
    const promise = this.cdaClient.getEntries({content_type: CONFIG.contentTypeIds.blogPost})
    return from(promise).pipe(map(entries => entries.items), tap(console.log))
  }
  /* END 1.1 */

}
