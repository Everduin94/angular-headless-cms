export const environment = {
  production: true,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  },
  contentful_config: {
    space: '<YOUR-SPACE-ID>',
    accessToken: '<YOUR-CONTENT-DELIVERY-TOKEN>',
  
    contentTypeIds: {
      blogPost: 'blogPost' // EXAMPLE
    }
  }
};
