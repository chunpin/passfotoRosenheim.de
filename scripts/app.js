// Define the `app` module
var app = angular.module('app', []);

// Define the `testimonialCtrl` controller on the `app` module
app.controller('testimonialCtrl', function app($scope) {
  $scope.currentDate = Date.now();
  $scope.convertToWeekNum = 604800000;

  $scope.headline = {
    mainText:'Warum unsere Kunden unseren Service lieben',
    subText:'Weil wir nur mit dem besten Service der Stadt zufrieden sind! Nur wenn du zufrieden bist, sind wir es auch!'
  }

  $scope.comments = [
    { author: 'James',
      text: 'Fast just got faster with Nexus S.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-01.png',
      alt:'quick-shot-kunden-01',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-05-01"))) /  $scope.convertToWeekNum  )
    }, 
    { author: 'Veroll',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png',
      alt:'quick-shot-kunden-02',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-3-25"))) /  $scope.convertToWeekNum  )
    }, 
    { author: 'Maya',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-03.png',
      alt:'quick-shot-kunden-03',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-2-28"))) /  $scope.convertToWeekNum  )
    }, 
    { author: 'Basti',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-04.png',
      alt:'quick-shot-kunden-04',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-1-28"))) /  $scope.convertToWeekNum  )
    }, 
    { author: 'Nani',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-05.png',
      alt:'quick-shot-kunden-05',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-5-28"))) /  $scope.convertToWeekNum  )
    }, 
    { author: 'Paulina',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-06.png',
      alt:'quick-shot-kunden-06',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-6-08"))) /  $scope.convertToWeekNum  )
    }, 
    { author: 'Bibi',
      text: 'The Next, Next Generation tablet.',
      img:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-07.png',
      alt:'quick-shot-kunden-07',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-3-20"))) /  $scope.convertToWeekNum  )
    }

  ];
});








