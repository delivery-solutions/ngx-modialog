import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

import { DOMOutsideEventPlugin, DOMOverlayRenderer } from './providers/index';
import { OverlayRenderer } from './models/tokens';
import { CSSBackdrop, CSSDialogContainer } from './components/index';
import {
  Overlay,
  ModalOverlay,
  OverlayDialogBoundary,
  OverlayTarget
} from './overlay/index';

@NgModule({
    declarations: [
        ModalOverlay,
        CSSBackdrop,
        CSSDialogContainer,
        OverlayDialogBoundary,
        OverlayTarget
    ],
    imports: [CommonModule],
    exports: [
        CSSBackdrop,
        CSSDialogContainer,
        OverlayDialogBoundary,
        OverlayTarget
    ],
    providers: [
        Overlay
    ]
})
export class ModalModule {

  /**
   * Returns a ModalModule.
   * Ivy no longer needs entryComponents (ANALYZE_FOR_ENTRY_COMPONENTS was removed in Angular 22);
   * the argument is kept so existing callers still compile.
   * @param entryComponents A list of dynamically inserted components (dialog's), ignored.
   */
  static withComponents(entryComponents: Array<Type<any> | any[]>): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: []
    };
  }

  /**
   * Returns a NgModule for use in the root Module.
   * @param entryComponents A list of dynamically inserted components (dialog's), ignored under Ivy.
   */
  static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [
        {provide: OverlayRenderer, useClass: DOMOverlayRenderer},
        {provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true}
      ]
    };
  }
}
