(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kurswahlMultiplatform'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kurswahlMultiplatform'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kurswahlMultiplatform'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kurswahlMultiplatform'.");
    }
    root.kurswahlMultiplatform = factory(typeof kurswahlMultiplatform === 'undefined' ? {} : kurswahlMultiplatform, kotlin, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var equals = Kotlin.equals;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var toString = Kotlin.toString;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var throwUPAE = Kotlin.throwUPAE;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var drop = Kotlin.kotlin.text.drop_6ic1pp$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var last = Kotlin.kotlin.text.last_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var throwCCE = Kotlin.throwCCE;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var println_0 = Kotlin.kotlin.io.println;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var dropLast = Kotlin.kotlin.text.dropLast_6ic1pp$;
  var unboxChar = Kotlin.unboxChar;
  var toList_0 = Kotlin.kotlin.text.toList_gw00vp$;
  var removeRange = Kotlin.kotlin.text.removeRange_i511yc$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var Unit = Kotlin.kotlin.Unit;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var get_br = $module$kotlinx_html_js.kotlinx.html.get_br_6s7ubj$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var setOf_0 = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var checkBoxInput = $module$kotlinx_html_js.kotlinx.html.checkBoxInput_ap9uf6$;
  var last_0 = Kotlin.kotlin.collections.last_2p1efm$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table = $module$kotlinx_html_js.kotlinx.html.table_dmqmme$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  Belegung$Überschrift.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$Überschrift.prototype.constructor = Belegung$Überschrift;
  Belegung$Kommentarart.prototype = Object.create(Enum.prototype);
  Belegung$Kommentarart.prototype.constructor = Belegung$Kommentarart;
  Belegung$Summe.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$Summe.prototype.constructor = Belegung$Summe;
  Belegung$Kommentar.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$Kommentar.prototype.constructor = Belegung$Kommentar;
  Belegung$ZeileDarstellung.prototype = Object.create(Belegung$Zeile.prototype);
  Belegung$ZeileDarstellung.prototype.constructor = Belegung$ZeileDarstellung;
  Belegung$Companion$Kursart.prototype = Object.create(Enum.prototype);
  Belegung$Companion$Kursart.prototype.constructor = Belegung$Companion$Kursart;
  Belegung$Companion$Aktion.prototype = Object.create(Enum.prototype);
  Belegung$Companion$Aktion.prototype.constructor = Belegung$Companion$Aktion;
  Aufgabenfeld.prototype = Object.create(Enum.prototype);
  Aufgabenfeld.prototype.constructor = Aufgabenfeld;
  Fachattribute.prototype = Object.create(Enum.prototype);
  Fachattribute.prototype.constructor = Fachattribute;
  Variablen$Ansichten.prototype = Object.create(Enum.prototype);
  Variablen$Ansichten.prototype.constructor = Variablen$Ansichten;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function main() {
    Belegung$Companion_getInstance().initialisiereFächer();
    var aktuelleBelegung = new Belegung('Belegung');
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Mathematik', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Englisch', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Geschichte', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Geographie', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Gemeinschaftskunde', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Religionslehre', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), ['Religionslehre', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Deutsch', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), ['Deutsch', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Sport', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Physik', Belegung$Companion$Kursart$LF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Biologie', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Chemie', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), ['Bildende Kunst', Belegung$Companion$Kursart$BF_getInstance()]);
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
    Belegung$Companion_getInstance().belegungsObjekt = aktuelleBelegung;
    (new Sample()).checkMe();
  }
  function Belegung(name) {
    Belegung$Companion_getInstance();
    this.name = name;
    this.aktuelleBelegung_0 = ArrayList_init();
  }
  function Belegung$Zeile() {
  }
  Belegung$Zeile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Zeile',
    interfaces: []
  };
  function Belegung$Überschrift(text) {
    Belegung$Zeile.call(this);
    this.text = text;
  }
  Belegung$Überschrift.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '\xDCberschrift',
    interfaces: [Belegung$Zeile]
  };
  Belegung$Überschrift.prototype.component1 = function () {
    return this.text;
  };
  Belegung$Überschrift.prototype.copy_61zpoe$ = function (text) {
    return new Belegung$Überschrift(text === void 0 ? this.text : text);
  };
  Belegung$Überschrift.prototype.toString = function () {
    return '\xDCberschrift(text=' + Kotlin.toString(this.text) + ')';
  };
  Belegung$Überschrift.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Belegung$Überschrift.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.text, other.text))));
  };
  function Belegung$Kommentarart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Belegung$Kommentarart_initFields() {
    Belegung$Kommentarart_initFields = function () {
    };
    Belegung$Kommentarart$GUT_instance = new Belegung$Kommentarart('GUT', 0);
    Belegung$Kommentarart$SCHLECHT_instance = new Belegung$Kommentarart('SCHLECHT', 1);
    Belegung$Kommentarart$NEUTRAL_instance = new Belegung$Kommentarart('NEUTRAL', 2);
  }
  var Belegung$Kommentarart$GUT_instance;
  function Belegung$Kommentarart$GUT_getInstance() {
    Belegung$Kommentarart_initFields();
    return Belegung$Kommentarart$GUT_instance;
  }
  var Belegung$Kommentarart$SCHLECHT_instance;
  function Belegung$Kommentarart$SCHLECHT_getInstance() {
    Belegung$Kommentarart_initFields();
    return Belegung$Kommentarart$SCHLECHT_instance;
  }
  var Belegung$Kommentarart$NEUTRAL_instance;
  function Belegung$Kommentarart$NEUTRAL_getInstance() {
    Belegung$Kommentarart_initFields();
    return Belegung$Kommentarart$NEUTRAL_instance;
  }
  Belegung$Kommentarart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kommentarart',
    interfaces: [Enum]
  };
  function Belegung$Kommentarart$values() {
    return [Belegung$Kommentarart$GUT_getInstance(), Belegung$Kommentarart$SCHLECHT_getInstance(), Belegung$Kommentarart$NEUTRAL_getInstance()];
  }
  Belegung$Kommentarart.values = Belegung$Kommentarart$values;
  function Belegung$Kommentarart$valueOf(name) {
    switch (name) {
      case 'GUT':
        return Belegung$Kommentarart$GUT_getInstance();
      case 'SCHLECHT':
        return Belegung$Kommentarart$SCHLECHT_getInstance();
      case 'NEUTRAL':
        return Belegung$Kommentarart$NEUTRAL_getInstance();
      default:throwISE('No enum constant sample.Belegung.Kommentarart.' + name);
    }
  }
  Belegung$Kommentarart.valueOf_61zpoe$ = Belegung$Kommentarart$valueOf;
  function Belegung$Summe(stunden) {
    Belegung$Zeile.call(this);
    this.stunden = stunden;
  }
  Belegung$Summe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Summe',
    interfaces: [Belegung$Zeile]
  };
  Belegung$Summe.prototype.component1 = function () {
    return this.stunden;
  };
  Belegung$Summe.prototype.copy_pqoyrt$ = function (stunden) {
    return new Belegung$Summe(stunden === void 0 ? this.stunden : stunden);
  };
  Belegung$Summe.prototype.toString = function () {
    return 'Summe(stunden=' + Kotlin.toString(this.stunden) + ')';
  };
  Belegung$Summe.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    return result;
  };
  Belegung$Summe.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stunden, other.stunden))));
  };
  function Belegung$Kommentar(kommentarart, text) {
    Belegung$Zeile.call(this);
    this.kommentarart = kommentarart;
    this.text = text;
  }
  Belegung$Kommentar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kommentar',
    interfaces: [Belegung$Zeile]
  };
  Belegung$Kommentar.prototype.component1 = function () {
    return this.kommentarart;
  };
  Belegung$Kommentar.prototype.component2 = function () {
    return this.text;
  };
  Belegung$Kommentar.prototype.copy_i98wu4$ = function (kommentarart, text) {
    return new Belegung$Kommentar(kommentarart === void 0 ? this.kommentarart : kommentarart, text === void 0 ? this.text : text);
  };
  Belegung$Kommentar.prototype.toString = function () {
    return 'Kommentar(kommentarart=' + Kotlin.toString(this.kommentarart) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  Belegung$Kommentar.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kommentarart) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Belegung$Kommentar.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kommentarart, other.kommentarart) && Kotlin.equals(this.text, other.text)))));
  };
  function Belegung$ZeileDarstellung(name, aufgabenfeld, gewählt, klickbar, mündlich, mündlichKlickbar, stunden, stundenAlternativVorhanden, fachnameOriginal, anrechnungspflichtig) {
    Belegung$Zeile.call(this);
    this.name = name;
    this.aufgabenfeld = aufgabenfeld;
    this.gewählt = gewählt;
    this.klickbar = klickbar;
    this.mündlich = mündlich;
    this.mündlichKlickbar = mündlichKlickbar;
    this.stunden = stunden;
    this.stundenAlternativVorhanden = stundenAlternativVorhanden;
    this.fachnameOriginal = fachnameOriginal;
    this.anrechnungspflichtig = anrechnungspflichtig;
  }
  Belegung$ZeileDarstellung.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZeileDarstellung',
    interfaces: [Belegung$Zeile]
  };
  Belegung$ZeileDarstellung.prototype.component1 = function () {
    return this.name;
  };
  Belegung$ZeileDarstellung.prototype.component2 = function () {
    return this.aufgabenfeld;
  };
  Belegung$ZeileDarstellung.prototype.component3 = function () {
    return this.gewählt;
  };
  Belegung$ZeileDarstellung.prototype.component4 = function () {
    return this.klickbar;
  };
  Belegung$ZeileDarstellung.prototype.component5 = function () {
    return this.mündlich;
  };
  Belegung$ZeileDarstellung.prototype.component6 = function () {
    return this.mündlichKlickbar;
  };
  Belegung$ZeileDarstellung.prototype.component7 = function () {
    return this.stunden;
  };
  Belegung$ZeileDarstellung.prototype.component8 = function () {
    return this.stundenAlternativVorhanden;
  };
  Belegung$ZeileDarstellung.prototype.component9 = function () {
    return this.fachnameOriginal;
  };
  Belegung$ZeileDarstellung.prototype.component10 = function () {
    return this.anrechnungspflichtig;
  };
  Belegung$ZeileDarstellung.prototype.copy_rdjyyj$ = function (name, aufgabenfeld, gewählt, klickbar, mündlich, mündlichKlickbar, stunden, stundenAlternativVorhanden, fachnameOriginal, anrechnungspflichtig) {
    return new Belegung$ZeileDarstellung(name === void 0 ? this.name : name, aufgabenfeld === void 0 ? this.aufgabenfeld : aufgabenfeld, gewählt === void 0 ? this.gewählt : gewählt, klickbar === void 0 ? this.klickbar : klickbar, mündlich === void 0 ? this.mündlich : mündlich, mündlichKlickbar === void 0 ? this.mündlichKlickbar : mündlichKlickbar, stunden === void 0 ? this.stunden : stunden, stundenAlternativVorhanden === void 0 ? this.stundenAlternativVorhanden : stundenAlternativVorhanden, fachnameOriginal === void 0 ? this.fachnameOriginal : fachnameOriginal, anrechnungspflichtig === void 0 ? this.anrechnungspflichtig : anrechnungspflichtig);
  };
  Belegung$ZeileDarstellung.prototype.toString = function () {
    return 'ZeileDarstellung(name=' + Kotlin.toString(this.name) + (', aufgabenfeld=' + Kotlin.toString(this.aufgabenfeld)) + (', gew\xE4hlt=' + Kotlin.toString(this.gewählt)) + (', klickbar=' + Kotlin.toString(this.klickbar)) + (', m\xFCndlich=' + Kotlin.toString(this.mündlich)) + (', m\xFCndlichKlickbar=' + Kotlin.toString(this.mündlichKlickbar)) + (', stunden=' + Kotlin.toString(this.stunden)) + (', stundenAlternativVorhanden=' + Kotlin.toString(this.stundenAlternativVorhanden)) + (', fachnameOriginal=' + Kotlin.toString(this.fachnameOriginal)) + (', anrechnungspflichtig=' + Kotlin.toString(this.anrechnungspflichtig)) + ')';
  };
  Belegung$ZeileDarstellung.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.aufgabenfeld) | 0;
    result = result * 31 + Kotlin.hashCode(this.gewählt) | 0;
    result = result * 31 + Kotlin.hashCode(this.klickbar) | 0;
    result = result * 31 + Kotlin.hashCode(this.mündlich) | 0;
    result = result * 31 + Kotlin.hashCode(this.mündlichKlickbar) | 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.stundenAlternativVorhanden) | 0;
    result = result * 31 + Kotlin.hashCode(this.fachnameOriginal) | 0;
    result = result * 31 + Kotlin.hashCode(this.anrechnungspflichtig) | 0;
    return result;
  };
  Belegung$ZeileDarstellung.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.aufgabenfeld, other.aufgabenfeld) && Kotlin.equals(this.gewählt, other.gewählt) && Kotlin.equals(this.klickbar, other.klickbar) && Kotlin.equals(this.mündlich, other.mündlich) && Kotlin.equals(this.mündlichKlickbar, other.mündlichKlickbar) && Kotlin.equals(this.stunden, other.stunden) && Kotlin.equals(this.stundenAlternativVorhanden, other.stundenAlternativVorhanden) && Kotlin.equals(this.fachnameOriginal, other.fachnameOriginal) && Kotlin.equals(this.anrechnungspflichtig, other.anrechnungspflichtig)))));
  };
  Belegung.prototype.anzahlLeistungsfächer_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Belegung.prototype.anzahlMündlichePrüfungen_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance()))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  Belegung.prototype.seminarFachGewählt_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()))
        destination.add_11rb$(element);
    }
    var sf = firstOrNull(destination);
    if (sf != null) {
      return sf.aufgabenfeld;
    }
    return null;
  };
  Belegung.prototype.fachAlsBasisfachOderWahlfachGewählt_0 = function (fach) {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.name, fach))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.typ === Belegung$Companion$Kursart$BF_getInstance() || element_0.typ === Belegung$Companion$Kursart$WF_getInstance())
        destination_0.add_11rb$(element_0);
    }
    return destination_0.size > 0;
  };
  Belegung.prototype.alleHalbjahreBelegt_0 = function (fach, typ) {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.name, fach) && element.typ === typ)
        destination.add_11rb$(element);
    }
    var fach_0 = firstOrNull(destination);
    if (fach_0 != null) {
      if (fach_0.alternativStunden) {
        var $receiver_0 = fach_0.stundenAlternativ;
        var destination_0 = ArrayList_init();
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          if (element_0 !== 0)
            destination_0.add_11rb$(element_0);
        }
        return destination_0.size >= 3;
      }
       else {
        var $receiver_1 = fach_0.stunden;
        var destination_1 = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver_1.iterator();
        while (tmp$_1.hasNext()) {
          var element_1 = tmp$_1.next();
          if (element_1 !== 0)
            destination_1.add_11rb$(element_1);
        }
        return destination_1.size >= 3;
      }
    }
     else {
      return false;
    }
  };
  Belegung.prototype.holeFehler = function () {
    this.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
    return toList(Belegung$Companion_getInstance().fehlerMeldungen);
  };
  Belegung.prototype.getBelegung = function () {
    return this.aktuelleBelegung_0;
  };
  Belegung.prototype.deleteBelegung = function () {
    this.aktuelleBelegung_0.clear();
    Belegung$Companion_getInstance().initialisiereFächer();
  };
  Belegung.prototype.holeDarstellung = function () {
    var tmp$, tmp$_0, tmp$_1;
    var text = LinkedHashSet_init();
    var $receiver = Belegung$Companion_getInstance().fächerauswahl;
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (!Variablen_getInstance().excludedList.contains_11rb$(element.id))
        destination.add_11rb$(element);
    }
    var destination_0 = LinkedHashMap_init();
    var tmp$_3;
    tmp$_3 = destination.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      var key = element_0.aufgabenfeld;
      var tmp$_0_0;
      var value = destination_0.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_0.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element_0);
    }
    var bereiche = destination_0;
    tmp$ = bereiche.entries.iterator();
    while (tmp$.hasNext()) {
      var bereich = tmp$.next();
      text.add_11rb$(new Belegung$Überschrift('Bereich ' + toString(bereich.key)));
      var $receiver_0 = bereich.value;
      var destination_1 = LinkedHashMap_init();
      var tmp$_4;
      tmp$_4 = $receiver_0.iterator();
      while (tmp$_4.hasNext()) {
        var element_1 = tmp$_4.next();
        var key_0 = element_1.name;
        var tmp$_0_1;
        var value_0 = destination_1.get_11rb$(key_0);
        if (value_0 == null) {
          var answer_0 = ArrayList_init();
          destination_1.put_xwzc9p$(key_0, answer_0);
          tmp$_0_1 = answer_0;
        }
         else {
          tmp$_0_1 = value_0;
        }
        var list_0 = tmp$_0_1;
        list_0.add_11rb$(element_1);
      }
      var fächer = destination_1;
      tmp$_0 = fächer.entries.iterator();
      while (tmp$_0.hasNext()) {
        var f = tmp$_0.next();
        var aufgabenfeld = bereich.key;
        var name;
        var gewählt = null;
        var mündlich = false;
        var mündlichKlickbar = false;
        var klickbarWahl = LinkedHashSet_init();
        var stunden = ArrayList_init();
        var stundenAlternativVorhanden = false;
        var anrechnung = mutableListOf([0, 0, 0, 0]);
        name = f.key;
        var fachnameOriginal = f.key;
        var varianten = f.value;
        tmp$_1 = varianten.iterator();
        while (tmp$_1.hasNext()) {
          var v = tmp$_1.next();
          if (this.anzahlLeistungsfächer_0() < 3 && !v.attribute.contains_11rb$(Fachattribute$Orchidee_getInstance()) && !v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()) && !v.attribute.contains_11rb$(Fachattribute$GeGe_getInstance())) {
            klickbarWahl.add_11rb$(Belegung$Companion$Kursart$LF_getInstance());
          }
          if (this.aktuelleBelegung_0.contains_11rb$(v)) {
            gewählt = v.typ;
            v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance());
            klickbarWahl.add_11rb$(v.typ);
            stunden = v.alternativStunden === false ? v.stunden : v.stundenAlternativ;
            if (v.typ === Belegung$Companion$Kursart$WF_getInstance() && !v.stundenAlternativ.isEmpty()) {
              stundenAlternativVorhanden = true;
            }
            if (v.typ === Belegung$Companion$Kursart$BF_getInstance() && v.attribute.contains_11rb$(Fachattribute$spaetbeginnend_getInstance())) {
              stundenAlternativVorhanden = true;
            }
            if (v.typ === Belegung$Companion$Kursart$BF_getInstance() && v.attribute.contains_11rb$(Fachattribute$Geo_getInstance())) {
              stundenAlternativVorhanden = true;
            }
            if (v.typ === Belegung$Companion$Kursart$BF_getInstance() && v.attribute.contains_11rb$(Fachattribute$Gk_getInstance())) {
              stundenAlternativVorhanden = true;
            }
            if (v.attribute.contains_11rb$(Fachattribute$GeGe_getInstance()) && v.typ === Belegung$Companion$Kursart$BF_getInstance()) {
              v.stunden = mutableListOf([2, 2, 2, 2]);
              var $receiver_1 = this.aktuelleBelegung_0;
              var destination_2 = ArrayList_init();
              var tmp$_5;
              tmp$_5 = $receiver_1.iterator();
              while (tmp$_5.hasNext()) {
                var element_2 = tmp$_5.next();
                if (equals(element_2.name, 'Wirtschaft') && element_2.typ === Belegung$Companion$Kursart$LF_getInstance())
                  destination_2.add_11rb$(element_2);
              }
              if (destination_2.size > 0) {
                stundenAlternativVorhanden = true;
              }
              var $receiver_2 = this.aktuelleBelegung_0;
              var destination_3 = ArrayList_init();
              var tmp$_6;
              tmp$_6 = $receiver_2.iterator();
              while (tmp$_6.hasNext()) {
                var element_3 = tmp$_6.next();
                if (equals(element_3.name, 'Gemeinschaftskunde') && element_3.typ === Belegung$Companion$Kursart$LF_getInstance())
                  destination_3.add_11rb$(element_3);
              }
              if (destination_3.size > 0) {
                stundenAlternativVorhanden = false;
                v.stunden = mutableListOf([0, 2, 2, 0]);
                name = 'Geographie';
                stunden = v.stunden;
              }
              var $receiver_3 = this.aktuelleBelegung_0;
              var destination_4 = ArrayList_init();
              var tmp$_7;
              tmp$_7 = $receiver_3.iterator();
              while (tmp$_7.hasNext()) {
                var element_4 = tmp$_7.next();
                if (equals(element_4.name, 'Geographie') && element_4.typ === Belegung$Companion$Kursart$LF_getInstance())
                  destination_4.add_11rb$(element_4);
              }
              if (destination_4.size > 0) {
                stundenAlternativVorhanden = false;
                v.stunden = mutableListOf([2, 0, 0, 2]);
                stunden = v.stunden;
                name = 'Gemeinschaftskunde';
              }
            }
            if (Belegung$Companion_getInstance().holeKurswahlKorrekt()) {
              var $receiver_4 = Belegung$Companion_getInstance().anrechnungspflichtig;
              var destination_5 = ArrayList_init();
              var tmp$_8;
              tmp$_8 = $receiver_4.iterator();
              while (tmp$_8.hasNext()) {
                var element_5 = tmp$_8.next();
                if (element_5.id === v.id)
                  destination_5.add_11rb$(element_5);
              }
              var stelle = firstOrNull(destination_5);
              if (stelle != null) {
                anrechnung = toMutableList(stelle.stunden);
              }
            }
          }
          if (v.attribute.contains_11rb$(Fachattribute$GeGe_getInstance())) {
            var $receiver_5 = this.aktuelleBelegung_0;
            var destination_6 = ArrayList_init();
            var tmp$_9;
            tmp$_9 = $receiver_5.iterator();
            while (tmp$_9.hasNext()) {
              var element_6 = tmp$_9.next();
              if (equals(element_6.name, 'Gemeinschaftskunde') && element_6.typ === Belegung$Companion$Kursart$LF_getInstance())
                destination_6.add_11rb$(element_6);
            }
            if (destination_6.size > 0) {
              name = 'Geographie';
            }
            var $receiver_6 = this.aktuelleBelegung_0;
            var destination_7 = ArrayList_init();
            var tmp$_10;
            tmp$_10 = $receiver_6.iterator();
            while (tmp$_10.hasNext()) {
              var element_7 = tmp$_10.next();
              if (equals(element_7.name, 'Geographie') && element_7.typ === Belegung$Companion$Kursart$LF_getInstance())
                destination_7.add_11rb$(element_7);
            }
            if (destination_7.size > 0) {
              name = 'Gemeinschaftskunde';
            }
          }
          if (v.typ === Belegung$Companion$Kursart$BF_getInstance() || v.typ === Belegung$Companion$Kursart$WF_getInstance()) {
            if (v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()) && equals(this.seminarFachGewählt_0(), v.aufgabenfeld)) {
              klickbarWahl.add_11rb$(v.typ);
            }
             else if (v.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance()) && this.seminarFachGewählt_0() != null && !equals(this.seminarFachGewählt_0(), v.aufgabenfeld)) {
              klickbarWahl.remove_11rb$(v.typ);
            }
             else {
              klickbarWahl.add_11rb$(v.typ);
            }
            if (this.anzahlMündlichePrüfungen_0() < 2 && this.fachAlsBasisfachOderWahlfachGewählt_0(v.name) && this.alleHalbjahreBelegt_0(v.name, v.typ)) {
              if (v.typ === Belegung$Companion$Kursart$BF_getInstance()) {
                mündlichKlickbar = true;
              }
               else if (v.typ === Belegung$Companion$Kursart$WF_getInstance() && v.mündlichMöglich) {
                mündlichKlickbar = true;
              }
            }
            if (v.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
              mündlichKlickbar = true;
              mündlich = true;
            }
          }
        }
        text.add_11rb$(new Belegung$ZeileDarstellung(name == null ? throwUPAE('name') : name, aufgabenfeld, gewählt, klickbarWahl, mündlich, mündlichKlickbar, stunden, stundenAlternativVorhanden, fachnameOriginal, anrechnung));
      }
    }
    text.add_11rb$(new Belegung$Summe(this.holeWochenStunden_0()));
    return toList(text);
  };
  Belegung.prototype.getFächer = function () {
    return Belegung$Companion_getInstance().fächerauswahl;
  };
  Belegung.prototype.toString = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name + ' ' + item.typ + ' ' + item.attribute);
    }
    return '\n\nAktuelleBelegung:\n' + joinToString(destination, '\n');
  };
  Belegung.prototype.testeMehrfach_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.name;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var tmp$_1;
    var result = LinkedHashMap_init();
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var entry = tmp$_1.next();
      if (entry.value.size > 1) {
        result.put_xwzc9p$(entry.key, entry.value);
      }
    }
    var mehrfach = toList(result.keys);
    if (mehrfach.size > 0) {
      println('Die folgenden F\xE4cher sind mehrfach belegt: ' + joinToString(mehrfach, ','));
      return false;
    }
     else {
      return true;
    }
  };
  Belegung.prototype.testeSprachenOderNaturwissenschaft_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$Fremdsprache_getInstance()))
        destination.add_11rb$(element);
    }
    var sprachen = destination;
    var $receiver_0 = this.aktuelleBelegung_0;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$Naturwissenschaft_getInstance()) || element_0.attribute.contains_11rb$(Fachattribute$kannNawiErsetzen_getInstance()))
        destination_0.add_11rb$(element_0);
    }
    var naturwissenschaften = destination_0;
    var $receiver_1 = this.aktuelleBelegung_0;
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (element_1.attribute.contains_11rb$(Fachattribute$kannNawiErsetzen_getInstance()))
        destination_1.add_11rb$(element_1);
    }
    var naturwissenschaftersatz = destination_1;
    var tmp$_2 = sprachen.size > 0;
    if (tmp$_2) {
      tmp$_2 = naturwissenschaften.size > 0;
    }
    var tmp$_3 = tmp$_2;
    if (tmp$_3) {
      tmp$_3 = (sprachen.size + naturwissenschaften.size | 0) > 2;
    }
    var kommentarart = tmp$_3 ? Belegung$Kommentarart$GUT_getInstance() : Belegung$Kommentarart$SCHLECHT_getInstance();
    Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(kommentarart, sprachen.size.toString() + ' Fremdsprache' + (sprachen.size !== 1 ? 'n' : '') + ' und ' + naturwissenschaften.size + ' Naturwissenschaft' + (naturwissenschaften.size !== 1 ? 'en' : '') + ' gew\xE4hlt.'));
    var tmp$_4 = sprachen.size === 0;
    if (!tmp$_4) {
      tmp$_4 = naturwissenschaften.size === 0;
    }
    if (tmp$_4) {
      println('Es wurde noch keine Fremdsprache gew\xE4hlt.');
      if ((naturwissenschaften.size - naturwissenschaftersatz.size | 0) === 0) {
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es wurde noch keine klassische Naturwissenschaft gew\xE4hlt.'));
      }
      if (sprachen.size === 0) {
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es wurde noch keine Fremdsprache gew\xE4hlt.'));
      }
      return false;
    }
    var tmp$_5 = sprachen.size < 2;
    if (tmp$_5) {
      tmp$_5 = naturwissenschaften.size < 2;
    }
    if (tmp$_5) {
      println('Es m\xFCssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt.');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es m\xFCssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt.'));
      return false;
    }
     else {
      var tmp$_6 = sprachen.size < 2;
      if (tmp$_6) {
        tmp$_6 = naturwissenschaften.size >= 2;
      }
      if (tmp$_6) {
        var anzahlKlassischeNaturwissenschaften = naturwissenschaften.size - naturwissenschaftersatz.size | 0;
        if (anzahlKlassischeNaturwissenschaften === 0) {
          println('Es muss mindestens eine klassische Naturwissenschaft belegt werden.');
          Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es muss mindestens eine klassische Naturwissenschaft (Biologie, Chemie, Physik) belegt werden.'));
          return false;
        }
         else if (anzahlKlassischeNaturwissenschaften === 1) {
          var destination_2 = ArrayList_init();
          var tmp$_7;
          tmp$_7 = naturwissenschaften.iterator();
          while (tmp$_7.hasNext()) {
            var element_2 = tmp$_7.next();
            if (element_2.typ === Belegung$Companion$Kursart$LF_getInstance())
              destination_2.add_11rb$(element_2);
          }
          var anzahlLeistungsfächer = destination_2.size;
          println('G\xFCltige Ersetzung der zweiten Naturwissenschaft');
          Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'G\xFCltige Ersetzung der zweiten Naturwissenschaft.'));
          return true;
        }
         else {
          return true;
        }
      }
       else {
        var tmp$_8 = sprachen.size >= 2;
        if (tmp$_8) {
          tmp$_8 = naturwissenschaften.size <= 2;
        }
        if (tmp$_8) {
          var anzahlKlassischeNaturwissenschaften_0 = naturwissenschaften.size - naturwissenschaftersatz.size | 0;
          if (anzahlKlassischeNaturwissenschaften_0 === 0) {
            Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es muss mindestens eine klassische Naturwissenschaft (Biologie, Chemie, Physik) belegt werden.'));
            return false;
          }
           else {
            return true;
          }
        }
         else {
          return true;
        }
      }
    }
  };
  Belegung.prototype.testeObFachSchonVorhanden_0 = function (name) {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.name, name))
        destination.add_11rb$(element);
    }
    var anzahl = destination.size;
    return anzahl > 0;
  };
  Belegung.prototype.testeBereichsabdeckungPrüfung_0 = function () {
    var rueckgabe = false;
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance()) || element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    var prüfungsfächer = destination;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = prüfungsfächer.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$Deutsch_getInstance()) || element_0.attribute.contains_11rb$(Fachattribute$Mathematik_getInstance()))
        destination_0.add_11rb$(element_0);
    }
    if (destination_0.size < 2) {
      println('Mathematik und Deutsch m\xFCssen Pr\xFCfungsf\xE4cher im Abitur sein.');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Mathematik und Deutsch m\xFCssen Pr\xFCfungsf\xE4cher im Abitur sein.'));
      return false;
    }
     else {
      print('Mathematik und Deutsch sind in den Pr\xFCfungsf\xE4chern enthalten. ');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Mathematik und Deutsch sind in den Pr\xFCfungsf\xE4chern enthalten. '));
      rueckgabe = true;
    }
    if (prüfungsfächer.size < 5) {
      println('Es m\xFCssen drei Leistungsf\xE4cher f\xFCr die schriftliche und zwei Basisf\xE4cher f\xFCr die m\xFCndliche Pr\xFCfung gew\xE4hlt werden');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es m\xFCssen drei Leistungsf\xE4cher f\xFCr die schriftliche und zwei Basisf\xE4cher f\xFCr die m\xFCndliche Pr\xFCfung gew\xE4hlt werden.'));
      return false;
    }
     else {
      println('Es sind drei Leistungsf\xE4cher und f\xFCr die m\xFCndliche Pr\xFCfung zwei Basisf\xE4cher gew\xE4hlt');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Es sind f\xFCr die Abiturpr\xFCfung drei Leistungsf\xE4cher und zwei m\xFCndliche Pr\xFCfungsf\xE4cher gew\xE4hlt.'));
      rueckgabe = true;
    }
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(prüfungsfächer, 10));
    var tmp$_1;
    tmp$_1 = prüfungsfächer.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_1.add_11rb$(item.aufgabenfeld);
    }
    var bereiche = toSet(destination_1);
    var fehlendeBereiche = minus(setOf([Aufgabenfeld$I_getInstance(), Aufgabenfeld$II_getInstance(), Aufgabenfeld$III_getInstance()]), bereiche);
    if (fehlendeBereiche.size > 0) {
      var destination_2 = ArrayList_init_0(collectionSizeOrDefault(fehlendeBereiche, 10));
      var tmp$_2;
      tmp$_2 = fehlendeBereiche.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_2.add_11rb$(Belegung$Companion_getInstance().Text.get_11rb$(item_0));
      }
      println('Die folgenden Aufgabenfelder sind noch nicht in der Abiturpr\xFCfung abgedeckt: ' + joinToString(destination_2, ',') + '.');
      var tmp$_3 = Belegung$Companion_getInstance().fehlerMeldungen;
      var tmp$_4 = Belegung$Kommentarart$SCHLECHT_getInstance();
      var destination_3 = ArrayList_init_0(collectionSizeOrDefault(fehlendeBereiche, 10));
      var tmp$_5;
      tmp$_5 = fehlendeBereiche.iterator();
      while (tmp$_5.hasNext()) {
        var item_1 = tmp$_5.next();
        destination_3.add_11rb$(Belegung$Companion_getInstance().Text.get_11rb$(item_1));
      }
      tmp$_3.add_11rb$(new Belegung$Kommentar(tmp$_4, 'Die folgenden Aufgabenfelder sind noch nicht in der Abiturpr\xFCfung abgedeckt: ' + joinToString(destination_3, ',') + '.'));
      return false;
    }
    return rueckgabe;
  };
  Belegung.prototype.testePflichtbelegungRest_0 = function () {
    var pflichtfächer = {v: ArrayList_init()};
    var Bereichsnamen = listOf(['Geschichte', 'Geographie', 'Gemeinschaftskunde', 'Religion oder Ethik', 'Bildende Kunst oder Musik', 'Sport']);
    var $receiver = this.aktuelleBelegung_0;
    var tmp$ = pflichtfächer.v;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (equals(element.name, 'Geschichte'))
        destination.add_11rb$(element);
    }
    tmp$.add_11rb$(destination.size);
    var tmp$_1 = pflichtfächer.v;
    var destination_0 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$Geo_getInstance()))
        destination_0.add_11rb$(element_0);
    }
    tmp$_1.add_11rb$(destination_0.size);
    var tmp$_3 = pflichtfächer.v;
    var destination_1 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var element_1 = tmp$_4.next();
      if (element_1.attribute.contains_11rb$(Fachattribute$Gk_getInstance()))
        destination_1.add_11rb$(element_1);
    }
    tmp$_3.add_11rb$(destination_1.size);
    var tmp$_5 = pflichtfächer.v;
    var destination_2 = ArrayList_init();
    var tmp$_6;
    tmp$_6 = $receiver.iterator();
    while (tmp$_6.hasNext()) {
      var element_2 = tmp$_6.next();
      if (equals(element_2.name, 'Religionslehre') || equals(element_2.name, 'Ethik'))
        destination_2.add_11rb$(element_2);
    }
    tmp$_5.add_11rb$(destination_2.size);
    var tmp$_7 = pflichtfächer.v;
    var destination_3 = ArrayList_init();
    var tmp$_8;
    tmp$_8 = $receiver.iterator();
    while (tmp$_8.hasNext()) {
      var element_3 = tmp$_8.next();
      if (equals(element_3.name, 'Bildende Kunst') || equals(element_3.name, 'Musik'))
        destination_3.add_11rb$(element_3);
    }
    tmp$_7.add_11rb$(destination_3.size);
    var tmp$_9 = pflichtfächer.v;
    var destination_4 = ArrayList_init();
    var tmp$_10;
    tmp$_10 = $receiver.iterator();
    while (tmp$_10.hasNext()) {
      var element_4 = tmp$_10.next();
      if (equals(element_4.name, 'Sport'))
        destination_4.add_11rb$(element_4);
    }
    tmp$_9.add_11rb$(destination_4.size);
    var fehlendeFächer = ArrayList_init();
    var index = 0;
    for (var tmp$_11 = pflichtfächer.v.iterator(); tmp$_11.hasNext(); ++index) {
      var pf = tmp$_11.next();
      if (pf === 0) {
        fehlendeFächer.add_11rb$(Bereichsnamen.get_za3lpa$(index));
      }
    }
    if (fehlendeFächer.size > 0) {
      println('Folgende F\xE4cher fehlen noch: ' + joinToString(fehlendeFächer, ', ') + '.');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Folgende F\xE4cher fehlen noch: ' + joinToString(fehlendeFächer, ', ') + '.'));
    }
    return fehlendeFächer.size === 0;
  };
  Belegung.prototype.testeMindestens42Kurse_0 = function () {
    var tmp$;
    var kurssumme = 0;
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      var tmp$_0 = kurssumme;
      var tmp$_1;
      if (fach.alternativStunden === false) {
        var $receiver = fach.stunden;
        var destination = ArrayList_init();
        var tmp$_2;
        tmp$_2 = $receiver.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          if (element !== 0)
            destination.add_11rb$(element);
        }
        tmp$_1 = destination.size;
      }
       else {
        var $receiver_0 = fach.stundenAlternativ;
        var destination_0 = ArrayList_init();
        var tmp$_3;
        tmp$_3 = $receiver_0.iterator();
        while (tmp$_3.hasNext()) {
          var element_0 = tmp$_3.next();
          if (element_0 !== 0)
            destination_0.add_11rb$(element_0);
        }
        tmp$_1 = destination_0.size;
      }
      kurssumme = tmp$_0 + tmp$_1 | 0;
    }
    println('Anzahl der gew\xE4hlten Kurse: ' + kurssumme);
    if (kurssumme < 42) {
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Anzahl der gew\xE4hlten Kurse: ' + kurssumme + '. Es m\xFCssen jedoch mindestens 42 Kurse gew\xE4hlt werden.'));
    }
    if (kurssumme >= 42) {
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Mit ' + kurssumme + ' belegten Kursen ist die Bedingung von mindestens 42 belegten Kursen erf\xFCllt.'));
    }
    return kurssumme >= 42;
  };
  function Belegung$testeAnrechnungspflichtigeStunden$lambda(it) {
    return it.typ;
  }
  Belegung.prototype.testeAnrechnungspflichtigeStunden_0 = function () {
    var tmp$;
    var mukuSchonGeprüft = false;
    var kurssumme = 0;
    var nawiSprZähler = 0;
    var nawiZähler = 0;
    var fsZähler = 0;
    var reliZähler = 0;
    Belegung$Companion_getInstance().anrechnungspflichtig = ArrayList_init();
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.attribute.contains_11rb$(Fachattribute$MuKu_getInstance()) && element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    if (destination.size > 0) {
      mukuSchonGeprüft = true;
    }
    var $receiver_0 = this.aktuelleBelegung_0;
    var destination_0 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      if (element_0.attribute.contains_11rb$(Fachattribute$MuKu_getInstance()) && element_0.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance()))
        destination_0.add_11rb$(element_0);
    }
    if (destination_0.size > 0) {
      mukuSchonGeprüft = true;
    }
    var $receiver_1 = this.aktuelleBelegung_0;
    if ($receiver_1.size > 1) {
      sortWith($receiver_1, new Comparator$ObjectLiteral(compareBy$lambda(Belegung$testeAnrechnungspflichtigeStunden$lambda)));
    }
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var f = tmp$.next();
      var tmp$_2;
      if (f.alternativStunden) {
        var $receiver_2 = f.stundenAlternativ;
        var destination_1 = ArrayList_init();
        var tmp$_3;
        tmp$_3 = $receiver_2.iterator();
        while (tmp$_3.hasNext()) {
          var element_1 = tmp$_3.next();
          if (element_1 !== 0)
            destination_1.add_11rb$(element_1);
        }
        tmp$_2 = destination_1.size;
      }
       else {
        var $receiver_3 = f.stunden;
        var destination_2 = ArrayList_init();
        var tmp$_4;
        tmp$_4 = $receiver_3.iterator();
        while (tmp$_4.hasNext()) {
          var element_2 = tmp$_4.next();
          if (element_2 !== 0)
            destination_2.add_11rb$(element_2);
        }
        tmp$_2 = destination_2.size;
      }
      var anzahlKurse = tmp$_2;
      println('Anrechnung\xFCbersicht:  Fach: ' + f.name + ', ' + (f.alternativStunden ? f.stundenAlternativ : f.stunden) + ', ' + f.attribute + ', ' + anzahlKurse + ', Geo oder Gk: ' + (f.attribute.contains_11rb$(Fachattribute$Gk_getInstance()) || f.attribute.contains_11rb$(Fachattribute$Geo_getInstance())) + ', Typ: ' + f.typ);
      if (f.typ === Belegung$Companion$Kursart$LF_getInstance()) {
        println('Anrechnung LF:  Fach: ' + f.name + ', ' + (f.alternativStunden ? f.stundenAlternativ : f.stunden) + ', ' + anzahlKurse);
        kurssumme = kurssumme + 4 | 0;
        Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 1, 1])));
        if (f.attribute.contains_11rb$(Fachattribute$Naturwissenschaft_getInstance()) || f.attribute.contains_11rb$(Fachattribute$kannNawiErsetzen_getInstance())) {
          nawiSprZähler = nawiSprZähler + 1 | 0;
          nawiZähler = nawiZähler + 1 | 0;
        }
        if (f.attribute.contains_11rb$(Fachattribute$Fremdsprache_getInstance())) {
          nawiSprZähler = nawiSprZähler + 1 | 0;
          fsZähler = fsZähler + 1 | 0;
        }
      }
       else if (f.typ === Belegung$Companion$Kursart$BF_getInstance()) {
        println('Anrechnung\xFCbersicht BF:  Fach: ' + f.name + ', ' + (f.alternativStunden ? f.stundenAlternativ : f.stunden) + ', ' + f.attribute + ', ' + anzahlKurse + ', Geo oder Gk: ' + (f.attribute.contains_11rb$(Fachattribute$Gk_getInstance()) || f.attribute.contains_11rb$(Fachattribute$Geo_getInstance())));
        if (f.attribute.contains_11rb$(Fachattribute$Geschichte_getInstance())) {
          println('Anrechnung Geschichte:  Fach: ' + f.name + ', ' + (f.alternativStunden ? f.stundenAlternativ : f.stunden) + ', ' + anzahlKurse);
          kurssumme = kurssumme + 4 | 0;
          Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 1, 1])));
        }
         else if (f.attribute.contains_11rb$(Fachattribute$ReliEthik_getInstance())) {
          var $receiver_4 = this.aktuelleBelegung_0;
          var destination_3 = ArrayList_init();
          var tmp$_5;
          tmp$_5 = $receiver_4.iterator();
          while (tmp$_5.hasNext()) {
            var element_3 = tmp$_5.next();
            if (element_3.attribute.contains_11rb$(Fachattribute$ReliEthik_getInstance()) && element_3.typ === Belegung$Companion$Kursart$LF_getInstance())
              destination_3.add_11rb$(element_3);
          }
          var leistungsfachEthikReli = destination_3;
          if (leistungsfachEthikReli.isEmpty()) {
            if (reliZähler === 0) {
              kurssumme = kurssumme + 4 | 0;
              Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 1, 1])));
              reliZähler = reliZähler + 1 | 0;
            }
          }
        }
         else if (f.attribute.contains_11rb$(Fachattribute$MuKu_getInstance()) && !mukuSchonGeprüft) {
          kurssumme = kurssumme + 2 | 0;
          Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 0, 0])));
          mukuSchonGeprüft = true;
        }
         else if (f.attribute.contains_11rb$(Fachattribute$Naturwissenschaft_getInstance()) || f.attribute.contains_11rb$(Fachattribute$kannNawiErsetzen_getInstance())) {
          if (nawiSprZähler < 3 && nawiZähler < 2 && fsZähler <= 2) {
            kurssumme = kurssumme + 4 | 0;
            Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 1, 1])));
            nawiSprZähler = nawiSprZähler + 1 | 0;
            nawiZähler = nawiZähler + 1 | 0;
          }
        }
         else if (f.attribute.contains_11rb$(Fachattribute$Fremdsprache_getInstance())) {
          if (f.alternativStunden) {
            kurssumme = kurssumme + 2 | 0;
            Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 0, 0])));
          }
           else {
            if (nawiSprZähler < 3 && nawiZähler <= 2 && fsZähler < 2) {
              kurssumme = kurssumme + 4 | 0;
              Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 1, 1])));
              nawiSprZähler = nawiSprZähler + 1 | 0;
              fsZähler = fsZähler + 1 | 0;
            }
          }
        }
         else if (f.attribute.contains_11rb$(Fachattribute$Gk_getInstance()) || f.attribute.contains_11rb$(Fachattribute$Geo_getInstance())) {
          println('Anrechnung Gk/Geo:  Fach: ' + f.name + ', ' + (f.alternativStunden ? f.stundenAlternativ : f.stunden) + ', ' + anzahlKurse);
          var anrechnungskurse = mutableListOf([0, 0, 0, 0]);
          if (anzahlKurse === 1) {
            kurssumme = kurssumme + 1 | 0;
            anrechnungskurse = mutableListOf([1, 0, 0, 0]);
          }
           else if (anzahlKurse === 2) {
            kurssumme = kurssumme + 2 | 0;
            anrechnungskurse = mutableListOf([1, 1, 0, 0]);
          }
           else if (anzahlKurse === 3) {
            if (f.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
              kurssumme = kurssumme + 3 | 0;
              anrechnungskurse = mutableListOf([1, 0, 1, 1]);
            }
             else {
              kurssumme = kurssumme + 1 | 0;
              anrechnungskurse = mutableListOf([1, 0, 0, 0]);
            }
          }
           else if (anzahlKurse === 4) {
            if (f.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
              kurssumme = kurssumme + 4 | 0;
              anrechnungskurse = mutableListOf([1, 1, 1, 1]);
            }
             else {
              kurssumme = kurssumme + 2 | 0;
              anrechnungskurse = mutableListOf([1, 1, 0, 0]);
            }
          }
          Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, anrechnungskurse));
        }
         else if (f.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
          println('Anrechnung anderes Fach m\xFCndliche Pr\xFCfung:  Fach: ' + f.name + ', ' + (f.alternativStunden ? f.stundenAlternativ : f.stunden) + ', ' + anzahlKurse);
          kurssumme = kurssumme + 4 | 0;
          Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 1, 1])));
        }
         else {
          println('Anrechnung Sonstige:  Fach: ' + f.name + ', ' + (f.alternativStunden ? f.stundenAlternativ : f.stunden) + ', ' + anzahlKurse);
        }
      }
       else if (f.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
        kurssumme = kurssumme + 4 | 0;
        Belegung$Companion_getInstance().anrechnungspflichtig.add_11rb$(new Belegung$Companion$Anrechnung(f.id, mutableListOf([1, 1, 1, 1])));
      }
    }
    if (kurssumme === 40) {
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Es sind genau 40 anrechnungspflichtige Kurse in der Belegung vorhanden.'));
    }
     else if (kurssumme < 40) {
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Es sind mit ' + kurssumme + ' weniger als 40 anrechnungspflichtige Kurse in der Belegung vorhanden. Somit k\xF6nnen neben den anrechnungspflichtigen Kursen noch ' + (40 - kurssumme | 0) + ' Kurse aus der aktuellen Auswahl angerechnet werden.'));
    }
     else if (kurssumme > 40) {
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es sind mit ' + kurssumme + ' mehr als 40 anrechnungspflichtige Kurse in der Belegung vorhanden.'));
    }
    var tmp$_6;
    tmp$_6 = Belegung$Companion_getInstance().anrechnungspflichtig.iterator();
    while (tmp$_6.hasNext()) {
      var element_4 = tmp$_6.next();
      var wert = element_4;
      var $receiver_5 = Belegung$Companion_getInstance().fächer;
      var destination_4 = ArrayList_init();
      var tmp$_7;
      tmp$_7 = $receiver_5.iterator();
      while (tmp$_7.hasNext()) {
        var element_5 = tmp$_7.next();
        if (element_5.id === wert.id)
          destination_4.add_11rb$(element_5);
      }
      var fachname = first(destination_4).name;
      println(fachname + ' ' + element_4.stunden);
    }
    return kurssumme <= 40;
  };
  Belegung.prototype.holeWochenStunden_0 = function () {
    var tmp$;
    var stundensumme = mutableListOf([0, 0, 0, 0]);
    var zeilenStunden = ArrayList_init();
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      zeilenStunden = fach.alternativStunden === false ? fach.stunden : fach.stundenAlternativ;
      for (var i = 0; i <= 3; i++) {
        stundensumme.set_wxm5ur$(i, stundensumme.get_za3lpa$(i) + zeilenStunden.get_za3lpa$(i) | 0);
      }
    }
    return toList(stundensumme);
  };
  Belegung.prototype.testeMindestens32Wochenstunden_0 = function () {
    var tmp$;
    var stundensumme = 0;
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      stundensumme = stundensumme + (fach.alternativStunden === false ? sum(fach.stunden) : sum(fach.stundenAlternativ)) | 0;
    }
    var durchschnitt = stundensumme / 4.0;
    println('Durchschnittlich ' + durchschnitt + ' Wochenstunden pro Halbjahr.');
    Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$NEUTRAL_getInstance(), 'Durchschnittlich ' + durchschnitt + ' Wochenstunden pro Halbjahr.'));
    if (durchschnitt < 32) {
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Es m\xFCssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.' + '\n' + 'Somit m\xFCssen noch Kurse im Gesamtwochenstundenumfang von mindestens ' + (32 - durchschnitt) * 4 + ' Stunden belegt werden.'));
      println('\nEs m\xFCssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.');
      println('\n' + 'Somit m\xFCssen noch Kurse im Gesamtwochenstundenumfang von mindestens ' + (32 - durchschnitt) * 4 + ' Stunden belegt werden.');
    }
    return durchschnitt >= 32;
  };
  Belegung.prototype.testeLeistungsfächer_0 = function () {
    var $receiver = this.aktuelleBelegung_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.typ === Belegung$Companion$Kursart$LF_getInstance())
        destination.add_11rb$(element);
    }
    var leistungsfächer = destination;
    var rückgabe = false;
    if (leistungsfächer.size < 3) {
      println('Zu wenige Leistungsf\xE4cher gew\xE4hlt!');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Zu wenige Leistungsf\xE4cher gew\xE4hlt.'));
    }
     else if (leistungsfächer.size > 3) {
      println('Zu viele Leistungsf\xE4cher gew\xE4hlt!');
      Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Zu viele Leistungsf\xE4cher gew\xE4hlt.'));
    }
     else {
      var destination_0 = LinkedHashMap_init();
      var tmp$_0;
      tmp$_0 = leistungsfächer.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var key = element_0.attribute;
        var tmp$_0_0;
        var value = destination_0.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init();
          destination_0.put_xwzc9p$(key, answer);
          tmp$_0_0 = answer;
        }
         else {
          tmp$_0_0 = value;
        }
        var list = tmp$_0_0;
        list.add_11rb$(element_0);
      }
      var lfAuswahl = toSet(flatten(destination_0.keys));
      if (minus(Belegung$Companion_getInstance().leistungsfachBereiche, lfAuswahl).size <= 2) {
        println('Leistungsfachkombination g\xFCltig');
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$GUT_getInstance(), 'Leistungsfachkombination g\xFCltig.'));
        rückgabe = true;
      }
       else {
        println('Leistungsfachkombination ung\xFCltig: zwei der drei Leistungsf\xE4cher m\xFCssen aus D, M, FS, Nawi sein.');
        Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Leistungsfachkombination ung\xFCltig: zwei der drei Leistungsf\xE4cher m\xFCssen aus D, M, FS, Nawi sein.'));
      }
    }
    return rückgabe;
  };
  Belegung.prototype.serialisiere = function () {
    var tmp$;
    var kodierung = '';
    tmp$ = this.aktuelleBelegung_0.iterator();
    while (tmp$.hasNext()) {
      var f = tmp$.next();
      var id = toString_0(f.id, 2);
      id = repeat('0', 6 - id.length | 0) + id;
      var typ = '00';
      if (f.typ === Belegung$Companion$Kursart$LF_getInstance()) {
        typ = '00';
      }
       else if (f.typ === Belegung$Companion$Kursart$BF_getInstance()) {
        if (f.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
          typ = '01';
        }
         else {
          typ = '10';
        }
      }
       else if (f.typ === Belegung$Companion$Kursart$WF_getInstance() && f.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
        typ = '11';
      }
       else {
        println('Das darf nicht sein!');
      }
      var alternativ = f.alternativStunden ? '1' : '0';
      kodierung += id + typ + alternativ;
    }
    println('Serialisierung: 1' + kodierung);
    return Kodierung_getInstance().binarystring2Characterstring_61zpoe$('1' + kodierung);
  };
  Belegung.prototype.deserialisiere_61zpoe$ = function (input) {
    var tmp$;
    Belegung$Companion_getInstance().initialisiereFächer();
    while (this.aktuelleBelegung_0.size > 0) {
      this.aktuelleBelegung_0.removeAt_za3lpa$(0);
    }
    Belegung$Companion_getInstance().fächerauswahl = ArrayList_init();
    Belegung$Companion_getInstance().generiereFächer_n5lu7h$(Belegung$Companion_getInstance().fächer);
    var kombinationNeu = drop(Kodierung_getInstance().characterstring2Binarystring_61zpoe$(input), 1);
    var tmp$_0;
    if (!equals(trim(Kotlin.isCharSequence(tmp$_0 = kombinationNeu) ? tmp$_0 : throwCCE()).toString(), '')) {
      var kombination = cut(kombinationNeu, 9);
      tmp$ = kombination.iterator();
      while (tmp$.hasNext()) {
        var k = tmp$.next();
        println('Kombination: ' + k);
        var fachnummer = Kodierung_getInstance().binarystring2Int_61zpoe$(substring(k, new IntRange(0, 5)));
        var typ = substring(k, new IntRange(6, 7));
        var alternativ = equals(toBoxedChar(last(k)), toBoxedChar(49)) ? true : false;
        println(fachnummer.toString() + ', ' + typ + ', ' + alternativ);
        var $receiver = Belegung$Companion_getInstance().fächer;
        var destination = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element.id === fachnummer)
            destination.add_11rb$(element);
        }
        var fachname = first(destination).name;
        var fachtyp = Belegung$Companion$Kursart$WF_getInstance();
        var mündlich = false;
        if (fachnummer < 32) {
          if (equals(typ, '00')) {
            fachtyp = Belegung$Companion$Kursart$LF_getInstance();
            mündlich = false;
          }
           else if (equals(typ, '10')) {
            fachtyp = Belegung$Companion$Kursart$BF_getInstance();
            mündlich = false;
          }
           else if (equals(typ, '01')) {
            fachtyp = Belegung$Companion$Kursart$BF_getInstance();
            mündlich = true;
          }
        }
         else {
          fachtyp = Belegung$Companion$Kursart$WF_getInstance();
          if (equals(typ, '11')) {
            mündlich = true;
          }
        }
        Belegung$Companion_getInstance().belegungsObjekt.action_4t1mlb$(Belegung$Companion$Aktion$NEU_getInstance(), [fachname, fachtyp]);
        if (mündlich) {
          Belegung$Companion_getInstance().belegungsObjekt.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), [fachname, fachtyp]);
        }
        if (alternativ) {
          Belegung$Companion_getInstance().belegungsObjekt.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance(), [fachname, fachtyp]);
        }
      }
    }
  };
  Belegung.prototype.fachBFoderLF_0 = function (fachAktuell) {
    var kodierung = '';
    if (fachAktuell.typ === Belegung$Companion$Kursart$LF_getInstance()) {
      kodierung += '1';
    }
     else {
      kodierung += '0';
      if (fachAktuell.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
        kodierung += '1';
      }
       else {
        kodierung += '0';
      }
    }
    return kodierung;
  };
  Belegung.prototype.mehrfach_fyomdn$ = function ($receiver) {
    var fachMap = LinkedHashMap_init();
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.name;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var tmp$_1;
    var result = LinkedHashMap_init();
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var entry = tmp$_1.next();
      if (entry.value.size > 1) {
        result.put_xwzc9p$(entry.key, entry.value);
      }
    }
    var mehrfach = toList(result.keys);
    var destination_0 = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var key_0 = element_0.name;
      var tmp$_0_0;
      var value_0 = destination_0.get_11rb$(key_0);
      if (value_0 == null) {
        var answer_0 = ArrayList_init();
        destination_0.put_xwzc9p$(key_0, answer_0);
        tmp$_0_0 = answer_0;
      }
       else {
        tmp$_0_0 = value_0;
      }
      var list_0 = tmp$_0_0;
      list_0.add_11rb$(element_0);
    }
    println(destination_0);
    return mehrfach;
  };
  function Belegung$action$lambda(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  function Belegung$action$lambda$lambda(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  function Belegung$action$lambda$lambda_0(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  Belegung.prototype.action_4t1mlb$ = function (command, parameter) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    loop_label: switch (command.name) {
      case 'NEU':
        var name = typeof (tmp$ = parameter[0]) === 'string' ? tmp$ : throwCCE();
        var typ = Kotlin.isType(tmp$_0 = parameter[1], Belegung$Companion$Kursart) ? tmp$_0 : throwCCE();
        var $receiver = Belegung$Companion_getInstance().fächerauswahl;
        var destination = ArrayList_init();
        var tmp$_8;
        tmp$_8 = $receiver.iterator();
        while (tmp$_8.hasNext()) {
          var element = tmp$_8.next();
          if (equals(element.name, name) && element.typ === typ)
            destination.add_11rb$(element);
        }

        var fach = firstOrNull(destination);
        if (!this.testeObFachSchonVorhanden_0(name)) {
          if (fach != null) {
            if (!this.aktuelleBelegung_0.contains_11rb$(fach)) {
              fach.attribute.remove_11rb$(Fachattribute$muendlichePruefung_getInstance());
              fach.alternativStunden = false;
              this.aktuelleBelegung_0.add_11rb$(fach);
            }
             else {
              println('Fach ' + name + ' bereits enthalten');
            }
          }
           else {
            println('Fach existiert so nicht');
          }
        }
         else {
          println('Fach ' + name + ' ist bereits in der Belegung vorhanden');
        }

        break loop_label;
      case 'L\xD6SCHE':
        var name_0 = typeof (tmp$_1 = parameter[0]) === 'string' ? tmp$_1 : throwCCE();
        removeAll(this.aktuelleBelegung_0, Belegung$action$lambda(name_0));
        break loop_label;
      case 'TOGGLESTUNDEN':
        var name_1 = typeof (tmp$_2 = parameter[0]) === 'string' ? tmp$_2 : throwCCE();
        var typ_0 = Kotlin.isType(tmp$_3 = parameter[1], Belegung$Companion$Kursart) ? tmp$_3 : throwCCE();
        var $receiver_0 = this.aktuelleBelegung_0;
        var destination_0 = ArrayList_init();
        var tmp$_9;
        tmp$_9 = $receiver_0.iterator();
        while (tmp$_9.hasNext()) {
          var element_0 = tmp$_9.next();
          if (equals(element_0.name, name_1) && element_0.typ === typ_0)
            destination_0.add_11rb$(element_0);
        }

        var fach_0 = firstOrNull(destination_0);
        if (fach_0 != null) {
          fach_0.alternativStunden = !fach_0.alternativStunden;
          var tmp$_10 = fach_0.alternativStunden;
          if (tmp$_10) {
            var $receiver_1 = fach_0.stundenAlternativ;
            var destination_1 = ArrayList_init();
            var tmp$_11;
            tmp$_11 = $receiver_1.iterator();
            while (tmp$_11.hasNext()) {
              var element_1 = tmp$_11.next();
              if (element_1 > 0)
                destination_1.add_11rb$(element_1);
            }
            tmp$_10 = destination_1.size < 3;
          }
          if (tmp$_10) {
            fach_0.attribute.remove_11rb$(Fachattribute$muendlichePruefung_getInstance());
          }
          var tmp$_12 = !fach_0.alternativStunden;
          if (tmp$_12) {
            var $receiver_2 = fach_0.stunden;
            var destination_2 = ArrayList_init();
            var tmp$_13;
            tmp$_13 = $receiver_2.iterator();
            while (tmp$_13.hasNext()) {
              var element_2 = tmp$_13.next();
              if (element_2 > 0)
                destination_2.add_11rb$(element_2);
            }
            tmp$_12 = destination_2.size < 3;
          }
          if (tmp$_12) {
            fach_0.attribute.remove_11rb$(Fachattribute$muendlichePruefung_getInstance());
          }
        }

        break loop_label;
      case 'CHECK':
        Belegung$Companion_getInstance().fehlerMeldungen = ArrayList_init();
        Belegung$Companion_getInstance().kurswahlKorrekt = false;
        Belegung$Companion_getInstance().anrechnungspflichtig = ArrayList_init();
        var fehlerListe = ArrayList_init();
        fehlerListe.add_11rb$(this.testeMehrfach_0());
        fehlerListe.add_11rb$(this.testeLeistungsfächer_0());
        fehlerListe.add_11rb$(this.testeBereichsabdeckungPrüfung_0());
        fehlerListe.add_11rb$(this.testeSprachenOderNaturwissenschaft_0());
        fehlerListe.add_11rb$(this.testePflichtbelegungRest_0());
        fehlerListe.add_11rb$(this.testeMindestens42Kurse_0());
        var destination_3 = ArrayList_init();
        var tmp$_14;
        tmp$_14 = fehlerListe.iterator();
        while (tmp$_14.hasNext()) {
          var element_3 = tmp$_14.next();
          if (element_3 === false)
            destination_3.add_11rb$(element_3);
        }

        if (destination_3.size === 0) {
          fehlerListe.add_11rb$(this.testeAnrechnungspflichtigeStunden_0());
          var destination_4 = ArrayList_init();
          var tmp$_15;
          tmp$_15 = fehlerListe.iterator();
          while (tmp$_15.hasNext()) {
            var element_4 = tmp$_15.next();
            if (element_4 === false)
              destination_4.add_11rb$(element_4);
          }
          if (destination_4.size === 0) {
            Belegung$Companion_getInstance().kurswahlKorrekt = true;
          }
        }

        break loop_label;
      case 'TOGGLEM\xDCNDLICH':
        var name_2 = typeof (tmp$_4 = parameter[0]) === 'string' ? tmp$_4 : throwCCE();
        var typ_1 = Kotlin.isType(tmp$_5 = parameter[1], Belegung$Companion$Kursart) ? tmp$_5 : throwCCE();
        var $receiver_3 = this.aktuelleBelegung_0;
        var destination_5 = ArrayList_init();
        var tmp$_16;
        tmp$_16 = $receiver_3.iterator();
        while (tmp$_16.hasNext()) {
          var element_5 = tmp$_16.next();
          if (element_5.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance()))
            destination_5.add_11rb$(element_5);
        }

        var anzahlPrüfungsfächer = destination_5.size;
        var $receiver_4 = this.aktuelleBelegung_0;
        var indexOfFirst$result;
        indexOfFirst$break: do {
          var tmp$_17;
          var index = 0;
          tmp$_17 = $receiver_4.iterator();
          while (tmp$_17.hasNext()) {
            var item = tmp$_17.next();
            if (equals(item.name, name_2) && item.typ === typ_1) {
              indexOfFirst$result = index;
              break indexOfFirst$break;
            }
            index = index + 1 | 0;
          }
          indexOfFirst$result = -1;
        }
         while (false);
        var schriftlichIndex = indexOfFirst$result;
        if (schriftlichIndex >= 0) {
          var $receiver_5 = this.aktuelleBelegung_0.get_za3lpa$(schriftlichIndex).attribute;
          if ($receiver_5.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
            $receiver_5.remove_11rb$(Fachattribute$muendlichePruefung_getInstance());
          }
           else {
            if (anzahlPrüfungsfächer < 2) {
              $receiver_5.add_11rb$(Fachattribute$muendlichePruefung_getInstance());
            }
             else {
              Belegung$Companion_getInstance().fehlerMeldungen.add_11rb$(new Belegung$Kommentar(Belegung$Kommentarart$SCHLECHT_getInstance(), 'Maximal drei m\xFCndliche Pr\xFCfungsf\xE4cher erlaubt.'));
              println('Maximal drei m\xFCndliche Pr\xFCfungsf\xE4cher erlaubt.');
            }
          }
        }

        break loop_label;
      case 'TOGGLE':
        var name_3 = typeof (tmp$_6 = parameter[0]) === 'string' ? tmp$_6 : throwCCE();
        var typ_2 = Kotlin.isType(tmp$_7 = parameter[1], Belegung$Companion$Kursart) ? tmp$_7 : throwCCE();
        var $receiver_6 = Belegung$Companion_getInstance().fächerauswahl;
        var destination_6 = ArrayList_init();
        var tmp$_18;
        tmp$_18 = $receiver_6.iterator();
        while (tmp$_18.hasNext()) {
          var element_6 = tmp$_18.next();
          if (equals(element_6.name, name_3) && element_6.typ === typ_2)
            destination_6.add_11rb$(element_6);
        }

        var fach_1 = firstOrNull(destination_6);
        if (fach_1 != null) {
          var $receiver_7 = this.aktuelleBelegung_0;
          if ($receiver_7.contains_11rb$(fach_1)) {
            fach_1.attribute.remove_11rb$(Fachattribute$muendlichePruefung_getInstance());
            removeAll($receiver_7, Belegung$action$lambda$lambda(name_3));
            if (equals(fach_1.name, 'Wirtschaft') && fach_1.typ === Belegung$Companion$Kursart$LF_getInstance()) {
              var $receiver_8 = Belegung$Companion_getInstance().fächerauswahl;
              var destination_7 = ArrayList_init();
              var tmp$_19;
              tmp$_19 = $receiver_8.iterator();
              while (tmp$_19.hasNext()) {
                var element_7 = tmp$_19.next();
                if (element_7.attribute.contains_11rb$(Fachattribute$Geo_getInstance()) || element_7.attribute.contains_11rb$(Fachattribute$Gk_getInstance()))
                  destination_7.add_11rb$(element_7);
              }
              var gege = destination_7;
              var tmp$_20;
              tmp$_20 = gege.iterator();
              while (tmp$_20.hasNext()) {
                var element_8 = tmp$_20.next();
                element_8.stundenAlternativ = mutableListOf([2, 2, 2, 2]);
                element_8.stunden = mutableListOf([2, 2, 0, 0]);
              }
            }
            fach_1.alternativStunden = false;
          }
           else {
            var destination_8 = ArrayList_init_0(collectionSizeOrDefault($receiver_7, 10));
            var tmp$_21;
            tmp$_21 = $receiver_7.iterator();
            while (tmp$_21.hasNext()) {
              var item_0 = tmp$_21.next();
              destination_8.add_11rb$(item_0.name);
            }
            if (destination_8.contains_11rb$(name_3)) {
              var $receiver_9 = Belegung$Companion_getInstance().fächerauswahl;
              var destination_9 = ArrayList_init();
              var tmp$_22;
              tmp$_22 = $receiver_9.iterator();
              while (tmp$_22.hasNext()) {
                var element_9 = tmp$_22.next();
                if (equals(element_9.name, name_3))
                  destination_9.add_11rb$(element_9);
              }
              var tmp$_23;
              tmp$_23 = destination_9.iterator();
              while (tmp$_23.hasNext()) {
                var element_10 = tmp$_23.next();
                element_10.attribute.remove_11rb$(Fachattribute$muendlichePruefung_getInstance());
              }
              removeAll($receiver_7, Belegung$action$lambda$lambda_0(name_3));
              fach_1.alternativStunden = false;
              $receiver_7.add_11rb$(fach_1);
            }
             else {
              $receiver_7.add_11rb$(fach_1);
              fach_1.alternativStunden = false;
              if (equals(fach_1.name, 'Wirtschaft') && fach_1.typ === Belegung$Companion$Kursart$LF_getInstance()) {
                var $receiver_10 = Belegung$Companion_getInstance().fächerauswahl;
                var destination_10 = ArrayList_init();
                var tmp$_24;
                tmp$_24 = $receiver_10.iterator();
                while (tmp$_24.hasNext()) {
                  var element_11 = tmp$_24.next();
                  if (element_11.attribute.contains_11rb$(Fachattribute$Geo_getInstance()) || element_11.attribute.contains_11rb$(Fachattribute$Gk_getInstance()))
                    destination_10.add_11rb$(element_11);
                }
                var tmp$_25;
                tmp$_25 = destination_10.iterator();
                while (tmp$_25.hasNext()) {
                  var element_12 = tmp$_25.next();
                  element_12.stundenAlternativ = mutableListOf([2, 0, 2, 2]);
                  element_12.stunden = mutableListOf([2, 0, 0, 0]);
                }
              }
              println_0();
            }
          }
        }

        break loop_label;
      default:Kotlin.noWhenBranchMatched();
        break loop_label;
    }
  };
  function Belegung$Companion() {
    Belegung$Companion_instance = this;
    this.kurswahlKorrekt = false;
    this.anrechnungspflichtig = ArrayList_init();
    this.belegungsObjekt_b3txcs$_0 = this.belegungsObjekt_b3txcs$_0;
    this.aktuelleBelegung = ArrayList_init();
    this.fächer = emptyList();
    this.binär2 = listOf(['00', '01', '10', '11']);
    this.binär3 = listOf(['000', '001', '010', '011', '100', '101', '110', '111']);
    this.naturwissenschaften = listOf(['Physik', 'Chemie', 'Biologie']);
    this.sprachen = listOf(['Englisch', 'Franz\xF6sisch', 'Latein', 'Griechisch', 'Russisch', 'Spanisch', 'Italienisch', 'Portugiesisch', 'Chinesisch', 'Hebr\xE4isch']);
    this.spätbeginnend = listOf(['Franz\xF6sisch', 'Spanisch', 'Latein', 'Hebr\xE4isch', 'Griechisch']);
    this.lfOderBfOderBfMündlich = hashMapOf([to('LF', '10'), to('BF', '01'), to('BFm\xFCndlich', '11')]);
    this.fehlerMeldungen = ArrayList_init();
    this.Text = hashMapOf([to(Belegung$Companion$Kursart$BF_getInstance(), 'Basisfach'), to(Aufgabenfeld$I_getInstance(), 'Sprachlich'), to(Aufgabenfeld$II_getInstance(), 'Gesellschaftswissenschaften'), to(Aufgabenfeld$III_getInstance(), 'Mathematik und Naturwissenschaften')]);
    this.leistungsfachBereiche = setOf([Fachattribute$Mathematik_getInstance(), Fachattribute$Fremdsprache_getInstance(), Fachattribute$Naturwissenschaft_getInstance(), Fachattribute$Deutsch_getInstance()]);
    this.wfZweiKursig = setOf(['Astronomie', 'Darstellende Geometrie', 'Probleml\xF6sen mit CAS', 'Geologie', 'Literatur', 'Philosophie', 'Psychologie']);
    this.fächerauswahl_o9hkti$_0 = this.fächerauswahl_o9hkti$_0;
  }
  Belegung$Companion.prototype.initialisiereFächer = function () {
    var fächer = ArrayList_init();
    fächer.add_11rb$(new Fach('Deutsch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Deutsch_getInstance()), 0, true));
    fächer.add_11rb$(new Fach('Englisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 1, true));
    fächer.add_11rb$(new Fach('Franz\xF6sisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 2, false));
    fächer.add_11rb$(new Fach('Latein', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 3, false));
    fächer.add_11rb$(new Fach('Griechisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 4, false));
    fächer.add_11rb$(new Fach('Hebr\xE4isch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 16, false));
    fächer.add_11rb$(new Fach('Russisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 5, false));
    fächer.add_11rb$(new Fach('Spanisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 6, false));
    fächer.add_11rb$(new Fach('Italienisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 7, false));
    fächer.add_11rb$(new Fach('Portugiesisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 8, false));
    fächer.add_11rb$(new Fach('Chinesisch', Aufgabenfeld$I_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Fremdsprache_getInstance()), 9, false));
    fächer.add_11rb$(new Fach('Bildende Kunst', Aufgabenfeld$I_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$MuKu_getInstance()), 10, true));
    fächer.add_11rb$(new Fach('Musik', Aufgabenfeld$I_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$MuKu_getInstance()), 11, true));
    fächer.add_11rb$(new Fach('Geschichte', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$Geschichte_getInstance()), 12, true));
    fächer.add_11rb$(new Fach('Geographie', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$Geo_getInstance()), 13, true));
    fächer.add_11rb$(new Fach('Gemeinschaftskunde', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$Gk_getInstance()), 14, true));
    fächer.add_11rb$(new Fach('Religionslehre', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$ReliEthik_getInstance()), 17, true));
    fächer.add_11rb$(new Fach('Ethik', Aufgabenfeld$II_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$ReliEthik_getInstance()), 18, true));
    fächer.add_11rb$(new Fach('Wirtschaft', Aufgabenfeld$II_getInstance(), listOf([5, 0, 0]), emptyList(), 19, false));
    fächer.add_11rb$(new Fach('Mathematik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Mathematik_getInstance()), 20, true));
    fächer.add_11rb$(new Fach('Biologie', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance()), 21, true));
    fächer.add_11rb$(new Fach('Chemie', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance()), 22, true));
    fächer.add_11rb$(new Fach('Physik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$Naturwissenschaft_getInstance()), 23, true));
    fächer.add_11rb$(new Fach('Schulversuch Informatik', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$kannNawiErsetzen_getInstance()), 24, false));
    fächer.add_11rb$(new Fach('Schulversuch NwT', Aufgabenfeld$III_getInstance(), listOf([5, 3, 0]), listOf_0(Fachattribute$kannNawiErsetzen_getInstance()), 25, false));
    fächer.add_11rb$(new Fach('Sport', Aufgabenfeld$Sport_getInstance(), listOf([5, 2, 0]), listOf_0(Fachattribute$Sport_getInstance()), 26, true));
    fächer.add_11rb$(new Fach('Literatur und Theater', Aufgabenfeld$I_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 32, false));
    fächer.add_11rb$(new Fach('VK Mathematik', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 33, false));
    fächer.add_11rb$(new Fach('VK Sprache', Aufgabenfeld$I_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 34, false));
    fächer.add_11rb$(new Fach('Wahlfach Informatik', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 35, false));
    fächer.add_11rb$(new Fach('Literatur', Aufgabenfeld$I_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 36, false));
    fächer.add_11rb$(new Fach('Philosophie', Aufgabenfeld$II_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 37, false));
    fächer.add_11rb$(new Fach('Psychologie', Aufgabenfeld$II_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 38, false));
    fächer.add_11rb$(new Fach('Astronomie', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 39, false));
    fächer.add_11rb$(new Fach('Probleml\xF6sen mit CAS', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 40, false));
    fächer.add_11rb$(new Fach('Darstellende Geometrie', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 41, false));
    fächer.add_11rb$(new Fach('Geologie', Aufgabenfeld$III_getInstance(), listOf([0, 0, 2]), listOf_0(Fachattribute$Orchidee_getInstance()), 42, false));
    fächer.add_11rb$(new Fach('Seminarfach I', Aufgabenfeld$I_getInstance(), listOf([0, 3, 0]), listOf_0(Fachattribute$Seminarfach_getInstance()), 27, false));
    fächer.add_11rb$(new Fach('Seminarfach II', Aufgabenfeld$II_getInstance(), listOf([0, 3, 0]), listOf_0(Fachattribute$Seminarfach_getInstance()), 28, false));
    fächer.add_11rb$(new Fach('Seminarfach III', Aufgabenfeld$III_getInstance(), listOf([0, 3, 0]), listOf_0(Fachattribute$Seminarfach_getInstance()), 29, false));
    Belegung$Companion_getInstance().fächer = fächer;
    this.generiereFächer_n5lu7h$(fächer);
  };
  function Belegung$Companion$Anrechnung(id, stunden) {
    this.id = id;
    this.stunden = stunden;
  }
  Belegung$Companion$Anrechnung.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Anrechnung',
    interfaces: []
  };
  Belegung$Companion$Anrechnung.prototype.component1 = function () {
    return this.id;
  };
  Belegung$Companion$Anrechnung.prototype.component2 = function () {
    return this.stunden;
  };
  Belegung$Companion$Anrechnung.prototype.copy_oku237$ = function (id, stunden) {
    return new Belegung$Companion$Anrechnung(id === void 0 ? this.id : id, stunden === void 0 ? this.stunden : stunden);
  };
  Belegung$Companion$Anrechnung.prototype.toString = function () {
    return 'Anrechnung(id=' + Kotlin.toString(this.id) + (', stunden=' + Kotlin.toString(this.stunden)) + ')';
  };
  Belegung$Companion$Anrechnung.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    return result;
  };
  Belegung$Companion$Anrechnung.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.stunden, other.stunden)))));
  };
  Belegung$Companion.prototype.holeKurswahlKorrekt = function () {
    return this.kurswahlKorrekt;
  };
  Belegung$Companion.prototype.holeFächer = function () {
    return this.fächer;
  };
  Object.defineProperty(Belegung$Companion.prototype, 'belegungsObjekt', {
    get: function () {
      if (this.belegungsObjekt_b3txcs$_0 == null)
        return throwUPAE('belegungsObjekt');
      return this.belegungsObjekt_b3txcs$_0;
    },
    set: function (belegungsObjekt) {
      this.belegungsObjekt_b3txcs$_0 = belegungsObjekt;
    }
  });
  function Belegung$Companion$Kursart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Belegung$Companion$Kursart_initFields() {
    Belegung$Companion$Kursart_initFields = function () {
    };
    Belegung$Companion$Kursart$LF_instance = new Belegung$Companion$Kursart('LF', 0);
    Belegung$Companion$Kursart$BF_instance = new Belegung$Companion$Kursart('BF', 1);
    Belegung$Companion$Kursart$WF_instance = new Belegung$Companion$Kursart('WF', 2);
  }
  var Belegung$Companion$Kursart$LF_instance;
  function Belegung$Companion$Kursart$LF_getInstance() {
    Belegung$Companion$Kursart_initFields();
    return Belegung$Companion$Kursart$LF_instance;
  }
  var Belegung$Companion$Kursart$BF_instance;
  function Belegung$Companion$Kursart$BF_getInstance() {
    Belegung$Companion$Kursart_initFields();
    return Belegung$Companion$Kursart$BF_instance;
  }
  var Belegung$Companion$Kursart$WF_instance;
  function Belegung$Companion$Kursart$WF_getInstance() {
    Belegung$Companion$Kursart_initFields();
    return Belegung$Companion$Kursart$WF_instance;
  }
  Belegung$Companion$Kursart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kursart',
    interfaces: [Enum]
  };
  function Belegung$Companion$Kursart$values() {
    return [Belegung$Companion$Kursart$LF_getInstance(), Belegung$Companion$Kursart$BF_getInstance(), Belegung$Companion$Kursart$WF_getInstance()];
  }
  Belegung$Companion$Kursart.values = Belegung$Companion$Kursart$values;
  function Belegung$Companion$Kursart$valueOf(name) {
    switch (name) {
      case 'LF':
        return Belegung$Companion$Kursart$LF_getInstance();
      case 'BF':
        return Belegung$Companion$Kursart$BF_getInstance();
      case 'WF':
        return Belegung$Companion$Kursart$WF_getInstance();
      default:throwISE('No enum constant sample.Belegung.Companion.Kursart.' + name);
    }
  }
  Belegung$Companion$Kursart.valueOf_61zpoe$ = Belegung$Companion$Kursart$valueOf;
  Belegung$Companion.prototype.getBelegungsobjekt = function () {
    return this.belegungsObjekt;
  };
  function Belegung$Companion$Aktion(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Belegung$Companion$Aktion_initFields() {
    Belegung$Companion$Aktion_initFields = function () {
    };
    Belegung$Companion$Aktion$NEU_instance = new Belegung$Companion$Aktion('NEU', 0);
    Belegung$Companion$Aktion$LÖSCHE_instance = new Belegung$Companion$Aktion('L\xD6SCHE', 1);
    Belegung$Companion$Aktion$TOGGLE_instance = new Belegung$Companion$Aktion('TOGGLE', 2);
    Belegung$Companion$Aktion$CHECK_instance = new Belegung$Companion$Aktion('CHECK', 3);
    Belegung$Companion$Aktion$TOGGLEMÜNDLICH_instance = new Belegung$Companion$Aktion('TOGGLEM\xDCNDLICH', 4);
    Belegung$Companion$Aktion$TOGGLESTUNDEN_instance = new Belegung$Companion$Aktion('TOGGLESTUNDEN', 5);
  }
  var Belegung$Companion$Aktion$NEU_instance;
  function Belegung$Companion$Aktion$NEU_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$NEU_instance;
  }
  var Belegung$Companion$Aktion$LÖSCHE_instance;
  function Belegung$Companion$Aktion$LÖSCHE_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$LÖSCHE_instance;
  }
  var Belegung$Companion$Aktion$TOGGLE_instance;
  function Belegung$Companion$Aktion$TOGGLE_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$TOGGLE_instance;
  }
  var Belegung$Companion$Aktion$CHECK_instance;
  function Belegung$Companion$Aktion$CHECK_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$CHECK_instance;
  }
  var Belegung$Companion$Aktion$TOGGLEMÜNDLICH_instance;
  function Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$TOGGLEMÜNDLICH_instance;
  }
  var Belegung$Companion$Aktion$TOGGLESTUNDEN_instance;
  function Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance() {
    Belegung$Companion$Aktion_initFields();
    return Belegung$Companion$Aktion$TOGGLESTUNDEN_instance;
  }
  Belegung$Companion$Aktion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aktion',
    interfaces: [Enum]
  };
  function Belegung$Companion$Aktion$values() {
    return [Belegung$Companion$Aktion$NEU_getInstance(), Belegung$Companion$Aktion$LÖSCHE_getInstance(), Belegung$Companion$Aktion$TOGGLE_getInstance(), Belegung$Companion$Aktion$CHECK_getInstance(), Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance()];
  }
  Belegung$Companion$Aktion.values = Belegung$Companion$Aktion$values;
  function Belegung$Companion$Aktion$valueOf(name) {
    switch (name) {
      case 'NEU':
        return Belegung$Companion$Aktion$NEU_getInstance();
      case 'L\xD6SCHE':
        return Belegung$Companion$Aktion$LÖSCHE_getInstance();
      case 'TOGGLE':
        return Belegung$Companion$Aktion$TOGGLE_getInstance();
      case 'CHECK':
        return Belegung$Companion$Aktion$CHECK_getInstance();
      case 'TOGGLEM\xDCNDLICH':
        return Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance();
      case 'TOGGLESTUNDEN':
        return Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance();
      default:throwISE('No enum constant sample.Belegung.Companion.Aktion.' + name);
    }
  }
  Belegung$Companion$Aktion.valueOf_61zpoe$ = Belegung$Companion$Aktion$valueOf;
  function Belegung$Companion$Belegfach(name, typ, aufgabenfeld, stunden, stundenAlternativ, alternativStunden, attribute, id, mündlichMöglich) {
    this.name = name;
    this.typ = typ;
    this.aufgabenfeld = aufgabenfeld;
    this.stunden = stunden;
    this.stundenAlternativ = stundenAlternativ;
    this.alternativStunden = alternativStunden;
    this.attribute = attribute;
    this.id = id;
    this.mündlichMöglich = mündlichMöglich;
  }
  Belegung$Companion$Belegfach.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Belegfach',
    interfaces: []
  };
  Belegung$Companion$Belegfach.prototype.component1 = function () {
    return this.name;
  };
  Belegung$Companion$Belegfach.prototype.component2 = function () {
    return this.typ;
  };
  Belegung$Companion$Belegfach.prototype.component3 = function () {
    return this.aufgabenfeld;
  };
  Belegung$Companion$Belegfach.prototype.component4 = function () {
    return this.stunden;
  };
  Belegung$Companion$Belegfach.prototype.component5 = function () {
    return this.stundenAlternativ;
  };
  Belegung$Companion$Belegfach.prototype.component6 = function () {
    return this.alternativStunden;
  };
  Belegung$Companion$Belegfach.prototype.component7 = function () {
    return this.attribute;
  };
  Belegung$Companion$Belegfach.prototype.component8 = function () {
    return this.id;
  };
  Belegung$Companion$Belegfach.prototype.component9 = function () {
    return this.mündlichMöglich;
  };
  Belegung$Companion$Belegfach.prototype.copy_3iazsl$ = function (name, typ, aufgabenfeld, stunden, stundenAlternativ, alternativStunden, attribute, id, mündlichMöglich) {
    return new Belegung$Companion$Belegfach(name === void 0 ? this.name : name, typ === void 0 ? this.typ : typ, aufgabenfeld === void 0 ? this.aufgabenfeld : aufgabenfeld, stunden === void 0 ? this.stunden : stunden, stundenAlternativ === void 0 ? this.stundenAlternativ : stundenAlternativ, alternativStunden === void 0 ? this.alternativStunden : alternativStunden, attribute === void 0 ? this.attribute : attribute, id === void 0 ? this.id : id, mündlichMöglich === void 0 ? this.mündlichMöglich : mündlichMöglich);
  };
  Belegung$Companion$Belegfach.prototype.toString = function () {
    return 'Belegfach(name=' + Kotlin.toString(this.name) + (', typ=' + Kotlin.toString(this.typ)) + (', aufgabenfeld=' + Kotlin.toString(this.aufgabenfeld)) + (', stunden=' + Kotlin.toString(this.stunden)) + (', stundenAlternativ=' + Kotlin.toString(this.stundenAlternativ)) + (', alternativStunden=' + Kotlin.toString(this.alternativStunden)) + (', attribute=' + Kotlin.toString(this.attribute)) + (', id=' + Kotlin.toString(this.id)) + (', m\xFCndlichM\xF6glich=' + Kotlin.toString(this.mündlichMöglich)) + ')';
  };
  Belegung$Companion$Belegfach.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.typ) | 0;
    result = result * 31 + Kotlin.hashCode(this.aufgabenfeld) | 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.stundenAlternativ) | 0;
    result = result * 31 + Kotlin.hashCode(this.alternativStunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.attribute) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.mündlichMöglich) | 0;
    return result;
  };
  Belegung$Companion$Belegfach.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.typ, other.typ) && Kotlin.equals(this.aufgabenfeld, other.aufgabenfeld) && Kotlin.equals(this.stunden, other.stunden) && Kotlin.equals(this.stundenAlternativ, other.stundenAlternativ) && Kotlin.equals(this.alternativStunden, other.alternativStunden) && Kotlin.equals(this.attribute, other.attribute) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.mündlichMöglich, other.mündlichMöglich)))));
  };
  Object.defineProperty(Belegung$Companion.prototype, 'f\xE4cherauswahl', {
    get: function () {
      if (this.fächerauswahl_o9hkti$_0 == null)
        return throwUPAE('f\xE4cherauswahl');
      return this.fächerauswahl_o9hkti$_0;
    },
    set: function (fächerauswahl) {
      this.fächerauswahl_o9hkti$_0 = fächerauswahl;
    }
  });
  Belegung$Companion.prototype.generiereFächer_n5lu7h$ = function (listeMitFächern) {
    var tmp$, tmp$_0, tmp$_1;
    var liste = ArrayList_init();
    tmp$ = listeMitFächern.iterator();
    while (tmp$.hasNext()) {
      var fach = tmp$.next();
      tmp$_0 = fach.stunden.size;
      for (var index = 0; index < tmp$_0; index++) {
        var mündlichMöglich = false;
        var stundenbelegung = ArrayList_init();
        var stundenbelegungAlternativ = ArrayList_init();
        if (fach.stunden.get_za3lpa$(index) > 0) {
          for (var i = 0; i <= 3; i++) {
            stundenbelegung.add_11rb$(fach.stunden.get_za3lpa$(index));
          }
          switch (index) {
            case 0:
              tmp$_1 = Belegung$Companion$Kursart$LF_getInstance();
              break;
            case 1:
              tmp$_1 = Belegung$Companion$Kursart$BF_getInstance();
              break;
            default:tmp$_1 = Belegung$Companion$Kursart$WF_getInstance();
              break;
          }
          var art = tmp$_1;
          if (this.spätbeginnend.contains_11rb$(fach.name) && art === Belegung$Companion$Kursart$BF_getInstance()) {
            stundenbelegungAlternativ = mutableListOf([4, 4, 4, 4]);
            var attr2 = toMutableList(fach.attribute);
            if (!attr2.contains_11rb$(Fachattribute$spaetbeginnend_getInstance())) {
              attr2.add_11rb$(Fachattribute$spaetbeginnend_getInstance());
            }
            fach.attribute = toList(attr2);
          }
          if (fach.attribute.contains_11rb$(Fachattribute$GeGe_getInstance())) {
            stundenbelegungAlternativ = mutableListOf([2, 0, 2, 0]);
          }
          if ((fach.attribute.contains_11rb$(Fachattribute$Geo_getInstance()) || fach.attribute.contains_11rb$(Fachattribute$Gk_getInstance())) && art === Belegung$Companion$Kursart$BF_getInstance()) {
            stundenbelegung = mutableListOf([2, 2, 0, 0]);
            stundenbelegungAlternativ = mutableListOf([2, 2, 2, 2]);
          }
          if (fach.attribute.contains_11rb$(Fachattribute$Seminarfach_getInstance())) {
            stundenbelegung = mutableListOf([3, 3, 0, 0]);
          }
          if (art === Belegung$Companion$Kursart$WF_getInstance()) {
            if (setOf(['VK Mathematik', 'Wahlfach Informatik', 'VK Sprache', 'Literatur und Theater']).contains_11rb$(fach.name)) {
              mündlichMöglich = true;
              stundenbelegungAlternativ = mutableListOf([2, 2, 0, 0]);
            }
            if (this.wfZweiKursig.contains_11rb$(fach.name)) {
              stundenbelegung = mutableListOf([2, 2, 0, 0]);
              stundenbelegungAlternativ = ArrayList_init();
            }
          }
          liste.add_11rb$(new Belegung$Companion$Belegfach(fach.name, art, fach.aufgabenfeld, stundenbelegung, stundenbelegungAlternativ, false, toMutableList(fach.attribute), fach.id, mündlichMöglich));
        }
      }
    }
    var tmp$_2, tmp$_0_0;
    var index_0 = 0;
    tmp$_2 = liste.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      println(checkIndexOverflow((tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0)).toString() + ', ' + item);
    }
    this.fächerauswahl = toList(liste);
  };
  Belegung$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Belegung$Companion_instance = null;
  function Belegung$Companion_getInstance() {
    if (Belegung$Companion_instance === null) {
      new Belegung$Companion();
    }
    return Belegung$Companion_instance;
  }
  Belegung.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Belegung',
    interfaces: []
  };
  function Aufgabenfeld(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Aufgabenfeld_initFields() {
    Aufgabenfeld_initFields = function () {
    };
    Aufgabenfeld$I_instance = new Aufgabenfeld('I', 0);
    Aufgabenfeld$II_instance = new Aufgabenfeld('II', 1);
    Aufgabenfeld$III_instance = new Aufgabenfeld('III', 2);
    Aufgabenfeld$Sport_instance = new Aufgabenfeld('Sport', 3);
    Aufgabenfeld$Seminarfach_instance = new Aufgabenfeld('Seminarfach', 4);
  }
  var Aufgabenfeld$I_instance;
  function Aufgabenfeld$I_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$I_instance;
  }
  var Aufgabenfeld$II_instance;
  function Aufgabenfeld$II_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$II_instance;
  }
  var Aufgabenfeld$III_instance;
  function Aufgabenfeld$III_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$III_instance;
  }
  var Aufgabenfeld$Sport_instance;
  function Aufgabenfeld$Sport_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$Sport_instance;
  }
  var Aufgabenfeld$Seminarfach_instance;
  function Aufgabenfeld$Seminarfach_getInstance() {
    Aufgabenfeld_initFields();
    return Aufgabenfeld$Seminarfach_instance;
  }
  Aufgabenfeld.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aufgabenfeld',
    interfaces: [Enum]
  };
  function Aufgabenfeld$values() {
    return [Aufgabenfeld$I_getInstance(), Aufgabenfeld$II_getInstance(), Aufgabenfeld$III_getInstance(), Aufgabenfeld$Sport_getInstance(), Aufgabenfeld$Seminarfach_getInstance()];
  }
  Aufgabenfeld.values = Aufgabenfeld$values;
  function Aufgabenfeld$valueOf(name) {
    switch (name) {
      case 'I':
        return Aufgabenfeld$I_getInstance();
      case 'II':
        return Aufgabenfeld$II_getInstance();
      case 'III':
        return Aufgabenfeld$III_getInstance();
      case 'Sport':
        return Aufgabenfeld$Sport_getInstance();
      case 'Seminarfach':
        return Aufgabenfeld$Seminarfach_getInstance();
      default:throwISE('No enum constant sample.Aufgabenfeld.' + name);
    }
  }
  Aufgabenfeld.valueOf_61zpoe$ = Aufgabenfeld$valueOf;
  function Fachattribute(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Fachattribute_initFields() {
    Fachattribute_initFields = function () {
    };
    Fachattribute$Naturwissenschaft_instance = new Fachattribute('Naturwissenschaft', 0);
    Fachattribute$NawiFe_instance = new Fachattribute('NawiFe', 1);
    Fachattribute$Deutsch_instance = new Fachattribute('Deutsch', 2);
    Fachattribute$Fremdsprache_instance = new Fachattribute('Fremdsprache', 3);
    Fachattribute$Mathematik_instance = new Fachattribute('Mathematik', 4);
    Fachattribute$kannNawiErsetzen_instance = new Fachattribute('kannNawiErsetzen', 5);
    Fachattribute$Seminarfach_instance = new Fachattribute('Seminarfach', 6);
    Fachattribute$GeGe_instance = new Fachattribute('GeGe', 7);
    Fachattribute$Geschichte_instance = new Fachattribute('Geschichte', 8);
    Fachattribute$MuKu_instance = new Fachattribute('MuKu', 9);
    Fachattribute$muendlichePruefung_instance = new Fachattribute('muendlichePruefung', 10);
    Fachattribute$spaetbeginnend_instance = new Fachattribute('spaetbeginnend', 11);
    Fachattribute$Orchidee_instance = new Fachattribute('Orchidee', 12);
    Fachattribute$Geo_instance = new Fachattribute('Geo', 13);
    Fachattribute$Gk_instance = new Fachattribute('Gk', 14);
    Fachattribute$ReliEthik_instance = new Fachattribute('ReliEthik', 15);
    Fachattribute$Sport_instance = new Fachattribute('Sport', 16);
  }
  var Fachattribute$Naturwissenschaft_instance;
  function Fachattribute$Naturwissenschaft_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Naturwissenschaft_instance;
  }
  var Fachattribute$NawiFe_instance;
  function Fachattribute$NawiFe_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$NawiFe_instance;
  }
  var Fachattribute$Deutsch_instance;
  function Fachattribute$Deutsch_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Deutsch_instance;
  }
  var Fachattribute$Fremdsprache_instance;
  function Fachattribute$Fremdsprache_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Fremdsprache_instance;
  }
  var Fachattribute$Mathematik_instance;
  function Fachattribute$Mathematik_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Mathematik_instance;
  }
  var Fachattribute$kannNawiErsetzen_instance;
  function Fachattribute$kannNawiErsetzen_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$kannNawiErsetzen_instance;
  }
  var Fachattribute$Seminarfach_instance;
  function Fachattribute$Seminarfach_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Seminarfach_instance;
  }
  var Fachattribute$GeGe_instance;
  function Fachattribute$GeGe_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$GeGe_instance;
  }
  var Fachattribute$Geschichte_instance;
  function Fachattribute$Geschichte_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Geschichte_instance;
  }
  var Fachattribute$MuKu_instance;
  function Fachattribute$MuKu_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$MuKu_instance;
  }
  var Fachattribute$muendlichePruefung_instance;
  function Fachattribute$muendlichePruefung_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$muendlichePruefung_instance;
  }
  var Fachattribute$spaetbeginnend_instance;
  function Fachattribute$spaetbeginnend_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$spaetbeginnend_instance;
  }
  var Fachattribute$Orchidee_instance;
  function Fachattribute$Orchidee_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Orchidee_instance;
  }
  var Fachattribute$Geo_instance;
  function Fachattribute$Geo_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Geo_instance;
  }
  var Fachattribute$Gk_instance;
  function Fachattribute$Gk_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Gk_instance;
  }
  var Fachattribute$ReliEthik_instance;
  function Fachattribute$ReliEthik_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$ReliEthik_instance;
  }
  var Fachattribute$Sport_instance;
  function Fachattribute$Sport_getInstance() {
    Fachattribute_initFields();
    return Fachattribute$Sport_instance;
  }
  Fachattribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fachattribute',
    interfaces: [Enum]
  };
  function Fachattribute$values() {
    return [Fachattribute$Naturwissenschaft_getInstance(), Fachattribute$NawiFe_getInstance(), Fachattribute$Deutsch_getInstance(), Fachattribute$Fremdsprache_getInstance(), Fachattribute$Mathematik_getInstance(), Fachattribute$kannNawiErsetzen_getInstance(), Fachattribute$Seminarfach_getInstance(), Fachattribute$GeGe_getInstance(), Fachattribute$Geschichte_getInstance(), Fachattribute$MuKu_getInstance(), Fachattribute$muendlichePruefung_getInstance(), Fachattribute$spaetbeginnend_getInstance(), Fachattribute$Orchidee_getInstance(), Fachattribute$Geo_getInstance(), Fachattribute$Gk_getInstance(), Fachattribute$ReliEthik_getInstance(), Fachattribute$Sport_getInstance()];
  }
  Fachattribute.values = Fachattribute$values;
  function Fachattribute$valueOf(name) {
    switch (name) {
      case 'Naturwissenschaft':
        return Fachattribute$Naturwissenschaft_getInstance();
      case 'NawiFe':
        return Fachattribute$NawiFe_getInstance();
      case 'Deutsch':
        return Fachattribute$Deutsch_getInstance();
      case 'Fremdsprache':
        return Fachattribute$Fremdsprache_getInstance();
      case 'Mathematik':
        return Fachattribute$Mathematik_getInstance();
      case 'kannNawiErsetzen':
        return Fachattribute$kannNawiErsetzen_getInstance();
      case 'Seminarfach':
        return Fachattribute$Seminarfach_getInstance();
      case 'GeGe':
        return Fachattribute$GeGe_getInstance();
      case 'Geschichte':
        return Fachattribute$Geschichte_getInstance();
      case 'MuKu':
        return Fachattribute$MuKu_getInstance();
      case 'muendlichePruefung':
        return Fachattribute$muendlichePruefung_getInstance();
      case 'spaetbeginnend':
        return Fachattribute$spaetbeginnend_getInstance();
      case 'Orchidee':
        return Fachattribute$Orchidee_getInstance();
      case 'Geo':
        return Fachattribute$Geo_getInstance();
      case 'Gk':
        return Fachattribute$Gk_getInstance();
      case 'ReliEthik':
        return Fachattribute$ReliEthik_getInstance();
      case 'Sport':
        return Fachattribute$Sport_getInstance();
      default:throwISE('No enum constant sample.Fachattribute.' + name);
    }
  }
  Fachattribute.valueOf_61zpoe$ = Fachattribute$valueOf;
  var anrechnungspflichtigeKurse;
  function Fach(name, aufgabenfeld, stunden, attribute, id, pflicht) {
    this.name = name;
    this.aufgabenfeld = aufgabenfeld;
    this.stunden = stunden;
    this.attribute = attribute;
    this.id = id;
    this.pflicht = pflicht;
  }
  Fach.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fach',
    interfaces: []
  };
  Fach.prototype.component1 = function () {
    return this.name;
  };
  Fach.prototype.component2 = function () {
    return this.aufgabenfeld;
  };
  Fach.prototype.component3 = function () {
    return this.stunden;
  };
  Fach.prototype.component4 = function () {
    return this.attribute;
  };
  Fach.prototype.component5 = function () {
    return this.id;
  };
  Fach.prototype.component6 = function () {
    return this.pflicht;
  };
  Fach.prototype.copy_3faqep$ = function (name, aufgabenfeld, stunden, attribute, id, pflicht) {
    return new Fach(name === void 0 ? this.name : name, aufgabenfeld === void 0 ? this.aufgabenfeld : aufgabenfeld, stunden === void 0 ? this.stunden : stunden, attribute === void 0 ? this.attribute : attribute, id === void 0 ? this.id : id, pflicht === void 0 ? this.pflicht : pflicht);
  };
  Fach.prototype.toString = function () {
    return 'Fach(name=' + Kotlin.toString(this.name) + (', aufgabenfeld=' + Kotlin.toString(this.aufgabenfeld)) + (', stunden=' + Kotlin.toString(this.stunden)) + (', attribute=' + Kotlin.toString(this.attribute)) + (', id=' + Kotlin.toString(this.id)) + (', pflicht=' + Kotlin.toString(this.pflicht)) + ')';
  };
  Fach.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.aufgabenfeld) | 0;
    result = result * 31 + Kotlin.hashCode(this.stunden) | 0;
    result = result * 31 + Kotlin.hashCode(this.attribute) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.pflicht) | 0;
    return result;
  };
  Fach.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.aufgabenfeld, other.aufgabenfeld) && Kotlin.equals(this.stunden, other.stunden) && Kotlin.equals(this.attribute, other.attribute) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.pflicht, other.pflicht)))));
  };
  function cut($receiver, number) {
    var tmp$;
    var länge = $receiver.length;
    var eingabeString = länge % number === 0 ? $receiver : repeat('0', number - länge % number | 0) + $receiver;
    var _liste = ArrayList_init();
    tmp$ = länge / number | 0;
    for (var i = 0; i <= tmp$; i++) {
      if (!equals(eingabeString, '')) {
        _liste.add_11rb$(substring(eingabeString, new IntRange(0, number - 1 | 0)));
        var $receiver_0 = eingabeString;
        var range = new IntRange(0, number - 1 | 0);
        var tmp$_0;
        eingabeString = removeRange(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE(), range).toString();
      }
    }
    return _liste;
  }
  function Kodierung() {
    Kodierung_instance = this;
    this.bs_0 = toList_0('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz_-+;');
  }
  Kodierung.prototype.binarystring2Int_61zpoe$ = function (bs) {
    var zahl = 0;
    var dummy = bs;
    var multiplikator = 1;
    while (dummy.length > 0) {
      zahl = zahl + Kotlin.imul(multiplikator, equals(toBoxedChar(last(dummy)), toBoxedChar(49)) ? 1 : 0) | 0;
      dummy = dropLast(dummy, 1);
      multiplikator = multiplikator * 2 | 0;
    }
    return zahl;
  };
  Kodierung.prototype.binarystring2Characterstring_61zpoe$ = function (input) {
    var tmp$;
    var ergebnis = '';
    if (input.length > 0) {
      var werte = cut(input, 6);
      tmp$ = werte.iterator();
      while (tmp$.hasNext()) {
        var w = tmp$.next();
        ergebnis += String.fromCharCode(unboxChar(this.bs_0.get_za3lpa$(this.binarystring2Int_61zpoe$(w))));
      }
    }
    println('LOG: binarystring2Characterstring: ' + ergebnis);
    return ergebnis;
  };
  Kodierung.prototype.characterstring2Binarystring_61zpoe$ = function (input) {
    var ergebnis = {v: ''};
    if (input.length > 0) {
      var tmp$;
      tmp$ = toList_0(input).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var wert = toString_0(this.bs_0.indexOf_11rb$(element), 2);
        ergebnis.v += repeat('0', 6 - wert.length | 0) + wert;
      }
    }
    var $receiver = ergebnis.v;
    var dropWhile$result;
    dropWhile$break: do {
      var tmp$_0, tmp$_0_0, tmp$_1, tmp$_2;
      tmp$_0 = get_indices($receiver);
      tmp$_0_0 = tmp$_0.first;
      tmp$_1 = tmp$_0.last;
      tmp$_2 = tmp$_0.step;
      for (var index = tmp$_0_0; index <= tmp$_1; index += tmp$_2) {
        if (!equals(toBoxedChar($receiver.charCodeAt(index)), toBoxedChar(48))) {
          dropWhile$result = $receiver.substring(index);
          break dropWhile$break;
        }
      }
      dropWhile$result = '';
    }
     while (false);
    var test = dropWhile$result;
    println('LOG: characterString2Binarystring: ' + test);
    var $receiver_0 = ergebnis.v;
    var dropWhile$result_0;
    dropWhile$break: do {
      var tmp$_3, tmp$_0_1, tmp$_1_0, tmp$_2_0;
      tmp$_3 = get_indices($receiver_0);
      tmp$_0_1 = tmp$_3.first;
      tmp$_1_0 = tmp$_3.last;
      tmp$_2_0 = tmp$_3.step;
      for (var index_0 = tmp$_0_1; index_0 <= tmp$_1_0; index_0 += tmp$_2_0) {
        if (!equals(toBoxedChar($receiver_0.charCodeAt(index_0)), toBoxedChar(48))) {
          dropWhile$result_0 = $receiver_0.substring(index_0);
          break dropWhile$break;
        }
      }
      dropWhile$result_0 = '';
    }
     while (false);
    return dropWhile$result_0;
  };
  Kodierung.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Kodierung',
    interfaces: []
  };
  var Kodierung_instance = null;
  function Kodierung_getInstance() {
    if (Kodierung_instance === null) {
      new Kodierung();
    }
    return Kodierung_instance;
  }
  function Sample() {
  }
  function Sample$checkMe$lambda(this$Sample) {
    return function (event) {
      var parameterSet = Variablen_getInstance().getParameterSet_61zpoe$(window.location.hash);
      if (parameterSet.containsKey_11rb$('id') && !equals(getValue(parameterSet, 'id'), Variablen_getInstance().status)) {
        var aktuelleBelegung = Belegung$Companion_getInstance().getBelegungsobjekt();
        aktuelleBelegung.deserialisiere_61zpoe$(getValue(parameterSet, 'id'));
        var $receiver = aktuelleBelegung.getBelegung();
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (equals(element.name, 'Wirtschaft') && element.typ === Belegung$Companion$Kursart$LF_getInstance())
            destination.add_11rb$(element);
        }
        var leistungsfachWirtschaft = firstOrNull(destination);
        if (leistungsfachWirtschaft != null) {
          aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), ['Wirtschaft', Belegung$Companion$Kursart$LF_getInstance()]);
          aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), ['Wirtschaft', Belegung$Companion$Kursart$LF_getInstance()]);
        }
        Variablen_getInstance().status = getValue(parameterSet, 'id');
        erstelleRaster(aktuelleBelegung);
        visualisiereBelegung(aktuelleBelegung);
        eventsAnhängen(aktuelleBelegung);
      }
       else {
        println('Status unver\xE4ndert');
      }
      return Unit;
    };
  }
  Sample.prototype.checkMe = function () {
    window.addEventListener('hashchange', Sample$checkMe$lambda(this));
    var aktuelleBelegung = Belegung$Companion_getInstance().getBelegungsobjekt();
    var parameterSet = Variablen_getInstance().getParameterSet_61zpoe$(window.location.hash);
    if (parameterSet.containsKey_11rb$('ansicht') || parameterSet.isEmpty()) {
      erstelleAuswahl();
    }
     else {
      if (parameterSet.containsKey_11rb$('ex')) {
        var wert = getValue(parameterSet, 'ex');
        Variablen_getInstance().excluded = wert;
        if (!equals(wert, '')) {
          println('');
          var tmp$ = Variablen_getInstance();
          var $receiver = cut(Kodierung_getInstance().characterstring2Binarystring_61zpoe$(wert), 6);
          var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
          var tmp$_0;
          tmp$_0 = $receiver.iterator();
          while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            destination.add_11rb$(Kodierung_getInstance().binarystring2Int_61zpoe$(item));
          }
          tmp$.excludedList = toMutableList(destination);
          println('Ausgeschlossene F\xE4cher: ' + Variablen_getInstance().excludedList);
        }
      }
      if (parameterSet.containsKey_11rb$('id') || parameterSet.isEmpty()) {
        if (parameterSet.containsKey_11rb$('id')) {
          Belegung$Companion_getInstance().getBelegungsobjekt().deserialisiere_61zpoe$(getValue(parameterSet, 'id'));
        }
        Variablen_getInstance().status = aktuelleBelegung.serialisiere();
        erstelleRaster(aktuelleBelegung);
        visualisiereBelegung(aktuelleBelegung);
        eventsAnhängen(aktuelleBelegung);
      }
      Variablen_getInstance().setzeHash();
    }
    return 42;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Variablen() {
    Variablen_instance = this;
    this.version = '0.1.6_2023_01_19';
    this.status = '';
    this.excluded = '';
    this.excludedList = ArrayList_init();
    this.ansicht = Variablen$Ansichten$WAHL_getInstance();
  }
  function Variablen$Ansichten(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Variablen$Ansichten_initFields() {
    Variablen$Ansichten_initFields = function () {
    };
    Variablen$Ansichten$START_instance = new Variablen$Ansichten('START', 0);
    Variablen$Ansichten$WAHL_instance = new Variablen$Ansichten('WAHL', 1);
  }
  var Variablen$Ansichten$START_instance;
  function Variablen$Ansichten$START_getInstance() {
    Variablen$Ansichten_initFields();
    return Variablen$Ansichten$START_instance;
  }
  var Variablen$Ansichten$WAHL_instance;
  function Variablen$Ansichten$WAHL_getInstance() {
    Variablen$Ansichten_initFields();
    return Variablen$Ansichten$WAHL_instance;
  }
  Variablen$Ansichten.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ansichten',
    interfaces: [Enum]
  };
  function Variablen$Ansichten$values() {
    return [Variablen$Ansichten$START_getInstance(), Variablen$Ansichten$WAHL_getInstance()];
  }
  Variablen$Ansichten.values = Variablen$Ansichten$values;
  function Variablen$Ansichten$valueOf(name) {
    switch (name) {
      case 'START':
        return Variablen$Ansichten$START_getInstance();
      case 'WAHL':
        return Variablen$Ansichten$WAHL_getInstance();
      default:throwISE('No enum constant sample.Variablen.Ansichten.' + name);
    }
  }
  Variablen$Ansichten.valueOf_61zpoe$ = Variablen$Ansichten$valueOf;
  Variablen.prototype.setzeHash = function () {
    window.location.hash = '#id=' + this.status + ';ex=' + this.excluded;
  };
  Variablen.prototype.getParameterSet_61zpoe$ = function (input) {
    var tmp$;
    var hm = HashMap_init();
    var parameter = split(input.substring(1), [';']);
    tmp$ = parameter.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      var teile = split(p, ['=']);
      if (teile.size === 2) {
        hm.put_xwzc9p$(teile.get_za3lpa$(0), teile.get_za3lpa$(1));
      }
    }
    println('ParameterSet: ' + hm);
    return hm;
  };
  Variablen.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Variablen',
    interfaces: []
  };
  var Variablen_instance = null;
  function Variablen_getInstance() {
    if (Variablen_instance === null) {
      new Variablen();
    }
    return Variablen_instance;
  }
  function erstelleHilfe$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Hilfe');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Einf\xFChrung');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Ros\xE9 unterlegt sind die w\xE4hlbaren F\xE4cher. Hierbei steht LF f\xFCr Leistungsfach, BF f\xFCr Basisfach und WF f\xFCr Wahlfach. Die Seminarf\xE4cher werden wie Basisf\xE4cher als BF angezeigt.');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Sobald ein Fach gew\xE4hlt wird, wird die Wahl gelb unterlegt.');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Die drei gew\xE4hlten Leistungsf\xE4cher m\xFCssen schriftlich im Abitur gepr\xFCft werden. ');
    $receiver.unaryPlus_pdl1vz$('Dar\xFCber hinaus m\xFCssen zwei der weiteren belegten F\xE4cher (das k\xF6nnen Basisf\xE4cher oder bestimmte Wahlf\xE4cher sein) als m\xFCndliche Abiturpr\xFCfungsf\xE4cher gew\xE4hlt werden: diese Wahl nimmt man durch das Setzen eines Kreuzchens rechts dieser F\xE4cher vor, wenn dort ein ros\xE9 unterlegtes Feld zu sehen ist.');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Solange die Wahl ung\xFCltig ist, erscheinen unterhalb der Auswahl rote Fehlermeldungen. Sobald die Auswahl korrekt ist, sind alle Zeilen gr\xFCn. ');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('In diesem Fall ist die Auswahl dennoch unbedingt mit dem zust\xE4ndigen Oberstufenberater besprechen, da dieses Programm nicht alle Spezialf\xE4lle abbildet und keine Gew\xE4hr f\xFCr die Richtigkeit des Programms \xFCbernommen wird. ');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Die bei einer korrekten Auswahl blauen Kurse stellen eine m\xF6gliche Anrechnung der Pflichtf\xE4cher dar, es kann aber noch andere Anrechnungsm\xF6glichkeiten geben. Hier kann der Oberstufenberater weiterhelfen.');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Zudem gilt: eine Schule ist nicht verpflichtet, jede g\xFCltige Belegung auch zu erm\xF6glichen. In manchen F\xE4llen k\xF6nnen Kurse z. B. aufgrund zu geringer Teilnehmerzahlen nicht zustandekommen.');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Gut zu wissen');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Empfohlene Reihenfolge (bzw. TL;DR)');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$(' Drei Leistungsf\xE4cher w\xE4hlen (sind automatisch schriftliche Pr\xFCfungsf\xE4cher)');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Zwei weitere F\xE4cher (das k\xF6nnen Basis- oder bestimmte Wahlf\xE4cher sein) w\xE4hlen, die als m\xFCndliches Pr\xFCfungsfach gedacht sind (erst diese F\xE4cher w\xE4hlen, dann jeweils durch ein X dahinter als m\xFCndliches Pr\xFCfungsfach markieren)');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Weitere F\xE4cher w\xE4hlen und dabei die Anmerkungen unter der Kurswahl beachten.');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Alle Anmerkungen gr\xFCn? Dann ist die Kurswahl korrekt! Bitte auf den Oberstufenberater zugehen!');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_5($receiver) {
    li($receiver, void 0, erstelleHilfe$lambda$lambda$lambda);
    li($receiver, void 0, erstelleHilfe$lambda$lambda$lambda_0);
    li($receiver, void 0, erstelleHilfe$lambda$lambda$lambda_1);
    li($receiver, void 0, erstelleHilfe$lambda$lambda$lambda_2);
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('Fehler gefunden?');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('auf der Seite zu den Fehlern dieses Projekts nach deiner Anmeldung bei github');
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_8($receiver) {
    return Unit;
  }
  function erstelleHilfe$lambda$lambda$lambda_3(it) {
    var aktuelleBelegung = Belegung$Companion_getInstance().getBelegungsobjekt();
    erstelleRaster(aktuelleBelegung);
    visualisiereBelegung(aktuelleBelegung);
    eventsAnhängen(aktuelleBelegung);
    Variablen_getInstance().status = aktuelleBelegung.serialisiere();
    Variablen_getInstance().setzeHash();
    return Unit;
  }
  function erstelleHilfe$lambda$lambda_9($receiver) {
    $receiver.text_61zpoe$("Hab's verstanden, zur\xFCck zur Auswahl!");
    set_onClickFunction($receiver, erstelleHilfe$lambda$lambda$lambda_3);
    return Unit;
  }
  function erstelleHilfe$lambda($receiver) {
    h2($receiver, void 0, erstelleHilfe$lambda$lambda);
    h3($receiver, void 0, erstelleHilfe$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('Dieses Programm erm\xF6glicht die Kurswahl f\xFCr die Oberstufe der allgemein bildenden Gymnasien in Baden-W\xFCrttemberg nach der AGVO ab dem Abiturjahrgang 2025.');
    p($receiver, void 0, erstelleHilfe$lambda$lambda_1);
    p($receiver, void 0, erstelleHilfe$lambda$lambda_2);
    h3($receiver, void 0, erstelleHilfe$lambda$lambda_3);
    $receiver.unaryPlus_pdl1vz$('Die Adresszeile im Browser enth\xE4lt stets die aktuelle Auswahl: wird die Belegung ver\xE4ndert, \xE4ndert sich auch die URL in der Adresszeile. Dadurch ist es m\xF6glich, Mitsch\xFClerinnen oder Mitsch\xFClern oder einem Oberstufenberater durch \xDCbersenden dieser Adresszeile, z. B. mithilfe eines Instant Messengers oder per E-Mail, die aktuelle Auswahl zuzusenden. ');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Der Empf\xE4nger sieht im Browser die \xFCbermittelte Auswahl und kann diese bei Bedarf \xE4ndern und wieder an andere Personen schicken.');
    h3($receiver, void 0, erstelleHilfe$lambda$lambda_4);
    ul($receiver, void 0, erstelleHilfe$lambda$lambda_5);
    h3($receiver, void 0, erstelleHilfe$lambda$lambda_6);
    $receiver.unaryPlus_pdl1vz$('Sollte dir ein Fehler im Programm aufgefallen sein, dann melde diesen entweder ');
    a($receiver, 'https://github.com/menzelths/kurswahlMultiplatform/issues', void 0, void 0, erstelleHilfe$lambda$lambda_7);
    $receiver.unaryPlus_pdl1vz$(' (klicke dazu dort auf "New Issue") oder schreibe eine E-Mail an menzelths(Klammeraffe)gmail(Punkt)com.');
    p($receiver, void 0, erstelleHilfe$lambda$lambda_8);
    button($receiver, void 0, void 0, void 0, void 0, void 0, erstelleHilfe$lambda$lambda_9);
    return Unit;
  }
  function erstelleHilfe() {
    var myDiv = div(get_create(document), 'panel', erstelleHilfe$lambda);
    var con = document.getElementById('container');
    ensureNotNull(con).innerHTML = '';
    ensureNotNull(document.getElementById('container')).appendChild(myDiv);
    println('Hilfsansicht');
  }
  function erstelleAuswahl$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Einstellungen');
    return Unit;
  }
  function erstelleAuswahl$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('nicht');
    set_classes($receiver, setOf_0('rot'));
    return Unit;
  }
  function erstelleAuswahl$lambda$lambda$lambda(closure$f, closure$klassen) {
    return function ($receiver) {
      $receiver.checked = true;
      set_id($receiver, 'fach_' + toString(closure$f.id));
      closure$klassen.add_11rb$('checkbox');
      set_classes($receiver, closure$klassen);
      return Unit;
    };
  }
  function erstelleAuswahl$lambda$lambda_1(closure$fächer) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$fächer.iterator();
      while (tmp$.hasNext()) {
        var f = tmp$.next();
        var klassen = LinkedHashSet_init();
        if (f.pflicht === false) {
          checkBoxInput($receiver, void 0, void 0, void 0, void 0, erstelleAuswahl$lambda$lambda$lambda(f, klassen));
          $receiver.unaryPlus_pdl1vz$(f.name);
          get_br($receiver);
        }
      }
      return Unit;
    };
  }
  function erstelleAuswahl$lambda$lambda$lambda_0(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    println('Knopf gedr\xFCckt');
    var checkboxes = document.getElementsByClassName('checkbox');
    var exclude = ArrayList_init();
    tmp$ = checkboxes.length;
    for (var i = 0; i < tmp$; i++) {
      var aktuelleCB = Kotlin.isType(tmp$_0 = checkboxes[i], HTMLInputElement) ? tmp$_0 : throwCCE();
      if ((tmp$_1 = !(aktuelleCB != null ? aktuelleCB.checked : null)) != null ? tmp$_1 : false)
        exclude.add_11rb$(toInt(last_0(split(aktuelleCB.id, ['_']))));
    }
    var excludedString = '';
    tmp$_2 = exclude.iterator();
    while (tmp$_2.hasNext()) {
      var e = tmp$_2.next();
      var wert = toString_0(e, 2);
      excludedString += repeat('0', 6 - wert.length | 0) + wert;
    }
    var wert_0 = Kodierung_getInstance().binarystring2Characterstring_61zpoe$(excludedString);
    Variablen_getInstance().excludedList = exclude;
    Variablen_getInstance().excluded = wert_0;
    Variablen_getInstance().setzeHash();
    var aktuelleBelegung = Belegung$Companion_getInstance().getBelegungsobjekt();
    erstelleRaster(aktuelleBelegung);
    visualisiereBelegung(aktuelleBelegung);
    eventsAnhängen(aktuelleBelegung);
    Variablen_getInstance().status = aktuelleBelegung.serialisiere();
    Variablen_getInstance().setzeHash();
    return Unit;
  }
  function erstelleAuswahl$lambda$lambda_2($receiver) {
    $receiver.text_61zpoe$('OK');
    set_onClickFunction($receiver, erstelleAuswahl$lambda$lambda$lambda_0);
    return Unit;
  }
  function erstelleAuswahl$lambda($receiver) {
    h2($receiver, void 0, erstelleAuswahl$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('Bitte die F\xE4cher abw\xE4hlen, die den Sch\xFClerinnen und Sch\xFClern bei der Auswahl an ihrer Schule ');
    span($receiver, void 0, erstelleAuswahl$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$(' angezeigt werden sollen.');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Danach auf OK dr\xFCcken.');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Daraufhin werden nur noch die \xFCbrigen F\xE4cher inklusive der Pflichtf\xE4cher in der Kurswahl angezeigt und der Link in der Adresszeile des Browsers kann an die Sch\xFClerinnen und Sch\xFCler weitergegeben werden. Somit sehen die Sch\xFClerinnen und Sch\xFCler beim Aufruf dieses Links nur noch die verbliebenen F\xE4cher dieser Liste und die Pflichtf\xE4cher.');
    var fächer = Belegung$Companion_getInstance().holeFächer();
    ul($receiver, void 0, erstelleAuswahl$lambda$lambda_1(fächer));
    button($receiver, void 0, void 0, void 0, void 0, void 0, erstelleAuswahl$lambda$lambda_2);
    return Unit;
  }
  function erstelleAuswahl() {
    var myDiv = div(get_create(document), 'panel', erstelleAuswahl$lambda);
    var con = document.getElementById('container');
    ensureNotNull(con).innerHTML = '';
    ensureNotNull(document.getElementById('container')).appendChild(myDiv);
    println('Auswahlansicht');
  }
  function erstelleRaster$lambda$lambda$lambda(it) {
    erstelleHilfe();
    return Unit;
  }
  function erstelleRaster$lambda$lambda($receiver) {
    $receiver.text_61zpoe$('Hilfe anzeigen');
    set_onClickFunction($receiver, erstelleRaster$lambda$lambda$lambda);
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda_0(it) {
    Belegung$Companion_getInstance().getBelegungsobjekt().deleteBelegung();
    var aktuelleBelegung = Belegung$Companion_getInstance().getBelegungsobjekt();
    erstelleRaster(aktuelleBelegung);
    visualisiereBelegung(aktuelleBelegung);
    eventsAnhängen(aktuelleBelegung);
    Variablen_getInstance().status = aktuelleBelegung.serialisiere();
    Variablen_getInstance().setzeHash();
    return Unit;
  }
  function erstelleRaster$lambda$lambda_0($receiver) {
    $receiver.text_61zpoe$('Auswahl zur\xFCcksetzen');
    set_onClickFunction($receiver, erstelleRaster$lambda$lambda$lambda_0);
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda$lambda(closure$zeile) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('fett'));
      $receiver.unaryPlus_pdl1vz$(closure$zeile.text);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda_1(closure$zeile) {
    return function ($receiver) {
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda(closure$zeile));
      for (var i = 0; i <= 5; i++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_0);
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf_0('fett'));
    $receiver.unaryPlus_pdl1vz$('Wochenstunden');
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_3(closure$zeile, closure$i) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$zeile.stunden.get_za3lpa$(closure$i).toString());
      set_classes($receiver, setOf_0('fett'));
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda_2(closure$zeile) {
    return function ($receiver) {
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_1);
      for (var i = 0; i <= 2; i++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_2);
      }
      for (var i_0 = 0; i_0 <= 3; i_0++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_3(closure$zeile, i_0));
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_4(closure$zeile) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$zeile.name);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_5(closure$zeile) {
    return function ($receiver) {
      var klassen = LinkedHashSet_init();
      if (closure$zeile.klickbar.contains_11rb$(Belegung$Companion$Kursart$LF_getInstance())) {
        $receiver.unaryPlus_pdl1vz$('LF');
        klassen.add_11rb$('klickbar');
        set_id($receiver, closure$zeile.fachnameOriginal + '_LF');
      }
      if (equals(closure$zeile.gewählt, Belegung$Companion$Kursart$LF_getInstance())) {
        klassen.add_11rb$('belegt_LF');
      }
      klassen.add_11rb$('zentriert');
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_6(closure$zeile) {
    return function ($receiver) {
      var klassen = LinkedHashSet_init();
      if (closure$zeile.klickbar.contains_11rb$(Belegung$Companion$Kursart$BF_getInstance())) {
        $receiver.unaryPlus_pdl1vz$('BF');
        klassen.add_11rb$('klickbar');
        set_id($receiver, closure$zeile.fachnameOriginal + '_BF');
        if (equals(closure$zeile.gewählt, Belegung$Companion$Kursart$BF_getInstance())) {
          klassen.add_11rb$('belegt_BF');
        }
      }
       else if (closure$zeile.klickbar.contains_11rb$(Belegung$Companion$Kursart$WF_getInstance())) {
        $receiver.unaryPlus_pdl1vz$('WF');
        klassen.add_11rb$('klickbar');
        set_id($receiver, closure$zeile.fachnameOriginal + '_WF');
        if (equals(closure$zeile.gewählt, Belegung$Companion$Kursart$WF_getInstance())) {
          klassen.add_11rb$('belegt_WF');
        }
      }
      klassen.add_11rb$('zentriert');
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_7(closure$zeile) {
    return function ($receiver) {
      var tmp$;
      var klassen = LinkedHashSet_init();
      if (closure$zeile.mündlichKlickbar) {
        klassen.add_11rb$('klickbar');
        var gewählt = (tmp$ = closure$zeile.gewählt) != null ? tmp$ : '';
        if (Kotlin.isType(gewählt, Belegung$Companion$Kursart)) {
          if (equals(gewählt, Belegung$Companion$Kursart$BF_getInstance())) {
            set_id($receiver, closure$zeile.fachnameOriginal + '_mBF');
          }
           else if (equals(gewählt, Belegung$Companion$Kursart$WF_getInstance())) {
            set_id($receiver, closure$zeile.fachnameOriginal + '_mWF');
          }
        }
      }
      if (closure$zeile.mündlich) {
        klassen.add_11rb$('belegt_m');
      }
      klassen.add_11rb$('zentriert');
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda_8(closure$gewählt, closure$zeile, closure$i) {
    return function ($receiver) {
      var klassen = LinkedHashSet_init();
      if (Kotlin.isType(closure$gewählt, Belegung$Companion$Kursart)) {
        if (closure$zeile.stunden.get_za3lpa$(closure$i) !== 0) {
          $receiver.unaryPlus_pdl1vz$(closure$zeile.stunden.get_za3lpa$(closure$i).toString());
          if (closure$zeile.stundenAlternativVorhanden === true) {
            klassen.add_11rb$('klickbar');
            klassen.add_11rb$('stunden');
            if (equals(closure$gewählt, Belegung$Companion$Kursart$BF_getInstance())) {
              set_id($receiver, closure$zeile.name + '_stundenBF');
            }
             else if (equals(closure$gewählt, Belegung$Companion$Kursart$WF_getInstance())) {
              set_id($receiver, closure$zeile.name + '_stundenWF');
            }
          }
        }
         else {
          $receiver.unaryPlus_pdl1vz$(' ');
        }
      }
       else {
        $receiver.unaryPlus_pdl1vz$(' ');
      }
      if (closure$zeile.anrechnungspflichtig.get_za3lpa$(closure$i) === 1) {
        klassen.add_11rb$('fett');
        klassen.add_11rb$('blau');
      }
      klassen.add_11rb$('zentriert');
      set_classes($receiver, klassen);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda_3(closure$zeile) {
    return function ($receiver) {
      var tmp$;
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_4(closure$zeile));
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_5(closure$zeile));
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_6(closure$zeile));
      td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_7(closure$zeile));
      var gewählt = (tmp$ = closure$zeile.gewählt) != null ? tmp$ : '';
      for (var i = 0; i <= 3; i++) {
        td($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda_8(gewählt, closure$zeile, i));
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda_1(closure$darstellung) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$darstellung.iterator();
      while (tmp$.hasNext()) {
        var zeile = tmp$.next();
        if (Kotlin.isType(zeile, Belegung$Überschrift)) {
          tr($receiver, void 0, erstelleRaster$lambda$lambda$lambda_1(zeile));
        }
         else if (Kotlin.isType(zeile, Belegung$Summe)) {
          tr($receiver, void 0, erstelleRaster$lambda$lambda$lambda_2(zeile));
        }
         else if (Kotlin.isType(zeile, Belegung$ZeileDarstellung)) {
          tr($receiver, void 0, erstelleRaster$lambda$lambda$lambda_3(zeile));
        }
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      if (closure$it.kommentarart === Belegung$Kommentarart$SCHLECHT_getInstance()) {
        set_classes($receiver, setOf_0('rot'));
      }
       else if (closure$it.kommentarart === Belegung$Kommentarart$GUT_getInstance()) {
        set_classes($receiver, setOf_0('gr\xFCn'));
      }
       else {
        set_classes($receiver, emptySet());
      }
      $receiver.unaryPlus_pdl1vz$(closure$it.text);
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      span($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda$lambda$lambda(closure$it));
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda$lambda_4(closure$meldungen) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$meldungen.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        li($receiver, void 0, erstelleRaster$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda_2(closure$aktuelleBelegung) {
    return function ($receiver) {
      var meldungen = closure$aktuelleBelegung.holeFehler();
      ul($receiver, void 0, erstelleRaster$lambda$lambda$lambda_4(meldungen));
      return Unit;
    };
  }
  function erstelleRaster$lambda$lambda_3($receiver) {
    if (Belegung$Companion_getInstance().holeKurswahlKorrekt()) {
      $receiver.unaryPlus_pdl1vz$('Kurswahl g\xFCltig! Anrechnungspflichtige Kurse sind in der Kurswahl blau und fett dargestellt.');
      get_br($receiver);
      $receiver.unaryPlus_pdl1vz$('Richtigkeit der Kurswahl ohne Gew\xE4hr: bitte unbedingt zusammen mit dem Oberstufenberater \xFCberpr\xFCfen! ');
      set_classes($receiver, setOf(['gr\xFCnText', 'fett']));
    }
     else {
      $receiver.unaryPlus_pdl1vz$('Kurswahl ung\xFCltig!');
      set_classes($receiver, setOf(['rotText', 'fett']));
    }
    get_br($receiver);
    return Unit;
  }
  function erstelleRaster$lambda$lambda_4($receiver) {
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('Version 0.1.6_2023_01_19');
    set_classes($receiver, setOf_0('klein'));
    return Unit;
  }
  function erstelleRaster$lambda(closure$darstellung, closure$aktuelleBelegung) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, void 0, erstelleRaster$lambda$lambda);
      button($receiver, void 0, void 0, void 0, void 0, void 0, erstelleRaster$lambda$lambda_0);
      table($receiver, void 0, erstelleRaster$lambda$lambda_1(closure$darstellung));
      div_0($receiver, void 0, erstelleRaster$lambda$lambda_2(closure$aktuelleBelegung));
      div_0($receiver, void 0, erstelleRaster$lambda$lambda_3);
      div_0($receiver, void 0, erstelleRaster$lambda$lambda_4);
      return Unit;
    };
  }
  function erstelleRaster(aktuelleBelegung) {
    aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
    var darstellung = aktuelleBelegung.holeDarstellung();
    var $receiver = aktuelleBelegung.getFächer();
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.aufgabenfeld;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var fächerauswahl = destination;
    var myDiv = div(get_create(document), 'panel', erstelleRaster$lambda(darstellung, aktuelleBelegung));
    var con = document.getElementById('container');
    ensureNotNull(con).innerHTML = '';
    ensureNotNull(document.getElementById('container')).appendChild(myDiv);
  }
  function eventsAnhängen$lambda(closure$elemente, closure$i, closure$aktuelleBelegung) {
    return function (event) {
      var tmp$, tmp$_0;
      var id = (tmp$_0 = (tmp$ = closure$elemente[closure$i]) != null ? tmp$.id : null) != null ? tmp$_0 : '';
      var typEvent = split(id, ['_']);
      var refresh = false;
      if (typEvent.size === 2) {
        if (startsWith(typEvent.get_za3lpa$(1), 'm')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance(), [typEvent.get_za3lpa$(0), equals(typEvent.get_za3lpa$(1).substring(1), 'BF') ? Belegung$Companion$Kursart$BF_getInstance() : Belegung$Companion$Kursart$WF_getInstance()]);
          refresh = true;
        }
         else if (equals(typEvent.get_za3lpa$(1), 'LF')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), [typEvent.get_za3lpa$(0), Belegung$Companion$Kursart$LF_getInstance()]);
          refresh = true;
        }
         else if (equals(typEvent.get_za3lpa$(1), 'BF')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), [typEvent.get_za3lpa$(0), Belegung$Companion$Kursart$BF_getInstance()]);
          refresh = true;
        }
         else if (equals(typEvent.get_za3lpa$(1), 'WF')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLE_getInstance(), [typEvent.get_za3lpa$(0), Belegung$Companion$Kursart$WF_getInstance()]);
          refresh = true;
        }
         else if (startsWith(typEvent.get_za3lpa$(1), 'stunden')) {
          closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance(), [typEvent.get_za3lpa$(0), equals(typEvent.get_za3lpa$(1).substring(7), 'BF') ? Belegung$Companion$Kursart$BF_getInstance() : Belegung$Companion$Kursart$WF_getInstance()]);
          refresh = true;
        }
      }
      if (refresh === true) {
        erstelleRaster(closure$aktuelleBelegung);
        visualisiereBelegung(closure$aktuelleBelegung);
        eventsAnhängen(closure$aktuelleBelegung);
        closure$aktuelleBelegung.action_4t1mlb$(Belegung$Companion$Aktion$CHECK_getInstance(), []);
        Variablen_getInstance().status = closure$aktuelleBelegung.serialisiere();
        Variablen_getInstance().setzeHash();
      }
      return Unit;
    };
  }
  function eventsAnhängen(aktuelleBelegung) {
    var tmp$;
    var elemente = document.getElementsByClassName('klickbar');
    tmp$ = elemente.length;
    for (var i = 0; i <= tmp$; i++) {
      if (elemente[i] != null) {
        ensureNotNull(elemente[i]).addEventListener('click', eventsAnhängen$lambda(elemente, i, aktuelleBelegung));
      }
    }
  }
  function visualisiereBelegung(aktuelleBelegung) {
    var belegung = Belegung$Companion_getInstance().getBelegungsobjekt().getBelegung();
    var tmp$;
    tmp$ = belegung.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var id = element.name + '_' + toString(element.typ);
      var id_mündlich = element.name + '_m' + (element.typ === Belegung$Companion$Kursart$BF_getInstance() ? 'BF' : element.typ === Belegung$Companion$Kursart$WF_getInstance() ? 'WF' : '');
      var typ = element.typ;
      var zelle = document.getElementById(id);
      var $receiver = aktuelleBelegung.getBelegung();
      var destination = ArrayList_init();
      var tmp$_4;
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        if (element_0.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance()))
          destination.add_11rb$(element_0);
      }
      if (destination.size < 2) {
        if (element.typ === Belegung$Companion$Kursart$BF_getInstance() || element.typ === Belegung$Companion$Kursart$WF_getInstance()) {
          (tmp$_0 = document.getElementById(id_mündlich)) != null ? addClass(tmp$_0, ['klickbar']) : null;
        }
      }
       else {
        if (element.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
          (tmp$_1 = document.getElementById(id_mündlich)) != null ? addClass(tmp$_1, ['klickbar']) : null;
        }
      }
      if (zelle != null) {
        addClass(zelle, ['belegt_' + toString(typ)]);
      }
      if (element.attribute.contains_11rb$(Fachattribute$muendlichePruefung_getInstance())) {
        (tmp$_2 = document.getElementById(id_mündlich)) != null ? (tmp$_2.innerHTML = 'X') : null;
      }
       else {
        (tmp$_3 = document.getElementById(id_mündlich)) != null ? (tmp$_3.innerHTML = '&nbsp;&nbsp;') : null;
      }
    }
  }
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  var package$sample = _.sample || (_.sample = {});
  package$sample.main = main;
  Belegung.Zeile = Belegung$Zeile;
  Belegung.Überschrift = Belegung$Überschrift;
  Object.defineProperty(Belegung$Kommentarart, 'GUT', {
    get: Belegung$Kommentarart$GUT_getInstance
  });
  Object.defineProperty(Belegung$Kommentarart, 'SCHLECHT', {
    get: Belegung$Kommentarart$SCHLECHT_getInstance
  });
  Object.defineProperty(Belegung$Kommentarart, 'NEUTRAL', {
    get: Belegung$Kommentarart$NEUTRAL_getInstance
  });
  Belegung.Kommentarart = Belegung$Kommentarart;
  Belegung.Summe = Belegung$Summe;
  Belegung.Kommentar = Belegung$Kommentar;
  Belegung.ZeileDarstellung = Belegung$ZeileDarstellung;
  Belegung$Companion.prototype.Anrechnung = Belegung$Companion$Anrechnung;
  Object.defineProperty(Belegung$Companion$Kursart, 'LF', {
    get: Belegung$Companion$Kursart$LF_getInstance
  });
  Object.defineProperty(Belegung$Companion$Kursart, 'BF', {
    get: Belegung$Companion$Kursart$BF_getInstance
  });
  Object.defineProperty(Belegung$Companion$Kursart, 'WF', {
    get: Belegung$Companion$Kursart$WF_getInstance
  });
  Belegung$Companion.prototype.Kursart = Belegung$Companion$Kursart;
  Object.defineProperty(Belegung$Companion$Aktion, 'NEU', {
    get: Belegung$Companion$Aktion$NEU_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'L\xD6SCHE', {
    get: Belegung$Companion$Aktion$LÖSCHE_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'TOGGLE', {
    get: Belegung$Companion$Aktion$TOGGLE_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'CHECK', {
    get: Belegung$Companion$Aktion$CHECK_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'TOGGLEM\xDCNDLICH', {
    get: Belegung$Companion$Aktion$TOGGLEMÜNDLICH_getInstance
  });
  Object.defineProperty(Belegung$Companion$Aktion, 'TOGGLESTUNDEN', {
    get: Belegung$Companion$Aktion$TOGGLESTUNDEN_getInstance
  });
  Belegung$Companion.prototype.Aktion = Belegung$Companion$Aktion;
  Belegung$Companion.prototype.Belegfach = Belegung$Companion$Belegfach;
  Object.defineProperty(Belegung, 'Companion', {
    get: Belegung$Companion_getInstance
  });
  package$sample.Belegung = Belegung;
  Object.defineProperty(Aufgabenfeld, 'I', {
    get: Aufgabenfeld$I_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'II', {
    get: Aufgabenfeld$II_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'III', {
    get: Aufgabenfeld$III_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'Sport', {
    get: Aufgabenfeld$Sport_getInstance
  });
  Object.defineProperty(Aufgabenfeld, 'Seminarfach', {
    get: Aufgabenfeld$Seminarfach_getInstance
  });
  package$sample.Aufgabenfeld = Aufgabenfeld;
  Object.defineProperty(Fachattribute, 'Naturwissenschaft', {
    get: Fachattribute$Naturwissenschaft_getInstance
  });
  Object.defineProperty(Fachattribute, 'NawiFe', {
    get: Fachattribute$NawiFe_getInstance
  });
  Object.defineProperty(Fachattribute, 'Deutsch', {
    get: Fachattribute$Deutsch_getInstance
  });
  Object.defineProperty(Fachattribute, 'Fremdsprache', {
    get: Fachattribute$Fremdsprache_getInstance
  });
  Object.defineProperty(Fachattribute, 'Mathematik', {
    get: Fachattribute$Mathematik_getInstance
  });
  Object.defineProperty(Fachattribute, 'kannNawiErsetzen', {
    get: Fachattribute$kannNawiErsetzen_getInstance
  });
  Object.defineProperty(Fachattribute, 'Seminarfach', {
    get: Fachattribute$Seminarfach_getInstance
  });
  Object.defineProperty(Fachattribute, 'GeGe', {
    get: Fachattribute$GeGe_getInstance
  });
  Object.defineProperty(Fachattribute, 'Geschichte', {
    get: Fachattribute$Geschichte_getInstance
  });
  Object.defineProperty(Fachattribute, 'MuKu', {
    get: Fachattribute$MuKu_getInstance
  });
  Object.defineProperty(Fachattribute, 'muendlichePruefung', {
    get: Fachattribute$muendlichePruefung_getInstance
  });
  Object.defineProperty(Fachattribute, 'spaetbeginnend', {
    get: Fachattribute$spaetbeginnend_getInstance
  });
  Object.defineProperty(Fachattribute, 'Orchidee', {
    get: Fachattribute$Orchidee_getInstance
  });
  Object.defineProperty(Fachattribute, 'Geo', {
    get: Fachattribute$Geo_getInstance
  });
  Object.defineProperty(Fachattribute, 'Gk', {
    get: Fachattribute$Gk_getInstance
  });
  Object.defineProperty(Fachattribute, 'ReliEthik', {
    get: Fachattribute$ReliEthik_getInstance
  });
  Object.defineProperty(Fachattribute, 'Sport', {
    get: Fachattribute$Sport_getInstance
  });
  package$sample.Fachattribute = Fachattribute;
  Object.defineProperty(package$sample, 'anrechnungspflichtigeKurse', {
    get: function () {
      return anrechnungspflichtigeKurse;
    }
  });
  package$sample.Fach = Fach;
  package$sample.cut_6ic1pp$ = cut;
  Object.defineProperty(package$sample, 'Kodierung', {
    get: Kodierung_getInstance
  });
  package$sample.Sample = Sample;
  Object.defineProperty(Variablen$Ansichten, 'START', {
    get: Variablen$Ansichten$START_getInstance
  });
  Object.defineProperty(Variablen$Ansichten, 'WAHL', {
    get: Variablen$Ansichten$WAHL_getInstance
  });
  Variablen.prototype.Ansichten = Variablen$Ansichten;
  Object.defineProperty(package$sample, 'Variablen', {
    get: Variablen_getInstance
  });
  package$sample.erstelleHilfe = erstelleHilfe;
  package$sample.erstelleAuswahl = erstelleAuswahl;
  package$sample.erstelleRaster_6vo07b$ = erstelleRaster;
  package$sample.eventsAnhängen_6vo07b$ = eventsAnhängen;
  package$sample.visualisiereBelegung_6vo07b$ = visualisiereBelegung;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  anrechnungspflichtigeKurse = listOf([Fachattribute$NawiFe_getInstance(), Fachattribute$Mathematik_getInstance(), Fachattribute$Deutsch_getInstance(), Fachattribute$Geschichte_getInstance(), Fachattribute$MuKu_getInstance(), Fachattribute$Geo_getInstance(), Fachattribute$Gk_getInstance()]);
  main();
  Kotlin.defineModule('kurswahlMultiplatform', _);
  return _;
}));

//# sourceMappingURL=kurswahlMultiplatform.js.map
