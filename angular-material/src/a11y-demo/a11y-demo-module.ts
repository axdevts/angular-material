/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AccessibilityDemoHome, AccessibilityDemoRoot} from './a11y-demo';
import {ACCESSIBILITY_DEMO_ROUTES} from './a11y-demo-routes';
import {DemoMaterialModule} from './a11y-material-module';
import {AutocompleteAccessibilityDemo} from './autocomplete/autocomplete-a11y';
import {ButtonToggleAccessibilityDemo} from './button-toggle/button-toggle-a11y';
import {ButtonAccessibilityDemo} from './button/button-a11y';
import {CardAccessibilityDemo} from './card/card-a11y';
import {CheckboxAccessibilityDemo} from './checkbox/checkbox-a11y';
import {ChipsAccessibilityDemo} from './chips/chips-a11y';
import {DatepickerAccessibilityDemo} from './datepicker/datepicker-a11y';
import {
  DialogAccessibilityDemo,
  DialogAddressFormDialog,
  DialogFruitExampleDialog,
  DialogNeptuneExampleDialog,
  DialogNeptuneIFrameDialog,
  DialogWelcomeExampleDialog
} from './dialog/dialog-a11y';
import {ExpansionPanelAccessibilityDemo} from './expansion/expansion-a11y';
import {GridListAccessibilityDemo} from './grid-list/grid-list-a11y';
import {IconAccessibilityDemo} from './icon/icon-a11y';
import {InputAccessibilityDemo} from './input/input-a11y';
import {ListAccessibilityDemo} from './list/list-a11y';
import {MenuAccessibilityDemo} from './menu/menu-a11y';
import {ProgressBarAccessibilityDemo} from './progress-bar/progress-bar-a11y';
import {ProgressSpinnerAccessibilityDemo} from './progress-spinner/progress-spinner-a11y';
import {RadioAccessibilityDemo} from './radio/radio-a11y';
import {SelectAccessibilityDemo} from './select/select-a11y';
import {SidenavBasicAccessibilityDemo} from './sidenav/basic-sidenav-a11y';
import {SidenavDualAccessibilityDemo} from './sidenav/dual-sidenav-a11y';
import {SidenavMobileAccessibilityDemo} from './sidenav/mobile-sidenav-a11y';
import {SidenavAccessibilityDemo} from './sidenav/sidenav-a11y';
import {SlideToggleAccessibilityDemo} from './slide-toggle/slide-toggle-a11y';
import {SliderAccessibilityDemo} from './slider/slider-a11y';
import {SnackBarAccessibilityDemo} from './snack-bar/snack-bar-a11y';
import {TableAccessibilityDemo} from './table/table-a11y';
import {
  FoggyTabContent,
  RainyTabContent,
  SunnyTabContent,
  TabsAccessibilityDemo,
} from './tabs/tabs-a11y';
import {ToolbarAccessibilityDemo} from './toolbar/toolbar-a11y';
import {TooltipAccessibilityDemo} from './tooltip/tooltip-a11y';


@NgModule({
  imports: [
    RouterModule.forChild(ACCESSIBILITY_DEMO_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AccessibilityRoutingModule {}

@NgModule({
  imports: [
    AccessibilityRoutingModule,
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AccessibilityDemoHome,
    AccessibilityDemoRoot,
    AutocompleteAccessibilityDemo,
    ButtonAccessibilityDemo,
    ButtonToggleAccessibilityDemo,
    CardAccessibilityDemo,
    CheckboxAccessibilityDemo,
    ChipsAccessibilityDemo,
    DatepickerAccessibilityDemo,
    DialogAccessibilityDemo,
    DialogAddressFormDialog,
    DialogFruitExampleDialog,
    DialogNeptuneExampleDialog,
    DialogNeptuneIFrameDialog,
    DialogWelcomeExampleDialog,
    ExpansionPanelAccessibilityDemo,
    FoggyTabContent,
    GridListAccessibilityDemo,
    IconAccessibilityDemo,
    InputAccessibilityDemo,
    ListAccessibilityDemo,
    MenuAccessibilityDemo,
    ProgressBarAccessibilityDemo,
    ProgressSpinnerAccessibilityDemo,
    RadioAccessibilityDemo,
    RainyTabContent,
    SelectAccessibilityDemo,
    SidenavAccessibilityDemo,
    SidenavBasicAccessibilityDemo,
    SidenavDualAccessibilityDemo,
    SidenavMobileAccessibilityDemo,
    SlideToggleAccessibilityDemo,
    SliderAccessibilityDemo,
    SnackBarAccessibilityDemo,
    SunnyTabContent,
    TableAccessibilityDemo,
    TabsAccessibilityDemo,
    ToolbarAccessibilityDemo,
    TooltipAccessibilityDemo,
  ],
  entryComponents: [
    DialogAccessibilityDemo,
    DialogAddressFormDialog,
    DialogFruitExampleDialog,
    DialogNeptuneExampleDialog,
    DialogNeptuneIFrameDialog,
    DialogWelcomeExampleDialog,
    FoggyTabContent,
    RainyTabContent,
    SunnyTabContent,
  ]
})
export class AccessibilityDemoModule {}
