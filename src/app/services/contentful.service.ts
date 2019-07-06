import { Injectable } from '@angular/core';

import { createClient, Entry } from 'contentful';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// https://www.contentful.com/developers/docs/references/authentication/
const CONFIG = {
  space: 'SPACE_ID',
  accessToken: 'READ_ACCESS_TOKEN',

  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M' // EXAMPLE
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  // ud = CONFIG.contentTypeIds.product
  getEntries( id, query?: object): Observable<Entry<any>[]> {
    // TODO: Double check this, because I updated to ES6 Spread
    return from(this.cdaClient.getEntries({...query, content_type: id})).pipe(map(entries => entries.items));
  }

  getEntry(id): Observable<any> {
      const promise = this.cdaClient.getEntry(id);
      return from(promise).pipe(map(entry => entry.fields));
  }
}
