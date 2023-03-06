// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1Ijoic2FhczAyIiwiYSI6ImNsZXhhNTF1NDAwbHIzdG8ycmN4NGkweW4ifQ.D3KW7zGOmX-IAiWqFCGD2Q',
  },
  routes:{
    base: 'http://localhost:8002',
    url: '/v1/api',
    users: '/users',
    auth: '/auth'
  },
  user:{
    id: "generic",
    date: new Date(),
    address: "Cra 89D # 32 15 Sur",
    video: "http://player.vimeo.com/video/4749536",
    latitude: 4.635517934252235,
    longitude: -74.14845602276542  
  },
  tokenApi: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzYWFzMDJAZ21haWwuY29tIiwiaWF0IjoxNjczNDc1NTMxLCJleHAiOjE3MDUwMzMxMzF9.scle4uC_S5yWI5UzzwCdxVYLlrzY_cCirhc_U_GmDiY',
  URL: 'https://api.whatsapp.com/send?phone=',
  PHONE: '573167259347',
  MESSAGE: '&text=Confirmo asistencia al baby Shower!!!',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
