(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kurswahlMultiplatform', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kurswahlMultiplatform'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kurswahlMultiplatform_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kurswahlMultiplatform_test'.");
    }
    if (typeof kurswahlMultiplatform === 'undefined') {
      throw new Error("Error loading module 'kurswahlMultiplatform_test'. Its dependency 'kurswahlMultiplatform' was not found. Please, check whether 'kurswahlMultiplatform' is loaded prior to 'kurswahlMultiplatform_test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'kurswahlMultiplatform_test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'kurswahlMultiplatform_test'.");
    }
    root.kurswahlMultiplatform_test = factory(typeof kurswahlMultiplatform_test === 'undefined' ? {} : kurswahlMultiplatform_test, kotlin, kurswahlMultiplatform, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$kurswahlMultiplatform, $module$kotlin_test) {
  'use strict';
  var Sample = $module$kurswahlMultiplatform.sample.Sample;
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_ifx8ge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function SampleTests() {
  }
  SampleTests.prototype.testMe = function () {
    assertTrue((new Sample()).checkMe() > 0);
  };
  SampleTests.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTests',
    interfaces: []
  };
  function SampleTestsJS() {
  }
  SampleTestsJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTestsJS',
    interfaces: []
  };
  var package$sample = _.sample || (_.sample = {});
  package$sample.SampleTests = SampleTests;
  package$sample.SampleTestsJS = SampleTestsJS;
  suite('sample', false, function () {
    suite('SampleTests', false, function () {
      test('testMe', false, function () {
        return (new SampleTests()).testMe();
      });
    });
  });
  Kotlin.defineModule('kurswahlMultiplatform_test', _);
  return _;
}));

//# sourceMappingURL=kurswahlMultiplatform_test.js.map
