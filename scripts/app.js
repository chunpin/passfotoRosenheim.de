// Define the `app` module
var app = angular.module('app', []);

// Define the `testimonialCtrl` controller on the `app` module
app.controller('testimonialCtrl',['$scope', function($scope){
      $scope.currentDate = Date.now();
  $scope.convertToWeekNum = 604800000;

  $scope.headline = {
    mainText:'Warum unsere Kunden unseren Service lieben',
    subText:'Weil wir nur mit dem besten Service der Stadt zufrieden sind! Nur wenn du zufrieden bist, sind wir es auch!'
  }

  $scope.gender = {
    male:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-01.png',
    female:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png' 
  }

  $scope.comments = [
    { author: 'Bianca',
      text: 'Hab echt tolle Passfotos bekommen! Das Team war auch super nett und professionell.',
      img: $scope.gender.female,
      alt:'quick-shot-kunden-01',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-06-14"))) /  $scope.convertToWeekNum  )
    }, 
    { author: 'Sonja',
      text: 'Ich habe Passbilder für meine Tochter machen lassen. Nettes Team, schneller Service, tolle Fotoqualität!',
      img: $scope.gender.female,
      alt:'quick-shot-kunden-02',
      weeks: Math.round(  ($scope.currentDate -  (new Date("2016-6-16"))) /  $scope.convertToWeekNum  )
    }
  ];
}]);







