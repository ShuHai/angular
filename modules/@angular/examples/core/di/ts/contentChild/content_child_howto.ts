/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// #docregion HowTo
import {AfterContentInit, Component, ContentChild, Directive, QueryList} from '@angular/core';

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Directive({selector: 'someDir'})
class SomeDir implements AfterContentInit {
  @ContentChild(ChildDirective) contentChild: ChildDirective;

  ngAfterContentInit() {
    // contentChild is set
  }
}
// #enddocregion