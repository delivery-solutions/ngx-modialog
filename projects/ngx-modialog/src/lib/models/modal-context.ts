import { FluentAssignMethod } from '../framework/fluent-assign';
import { extend, arrayUnion } from '../framework/utils';
import { OverlayContext, OverlayContextBuilder } from './overlay-context';

export const DEFAULT_VALUES = {};

const DEFAULT_SETTERS = [
  'message'
];

export class ModalContext extends OverlayContext {
  /**
   * The core message to display.
   * A modal might have an extended message (e.g: HTML message) or other fields (e.g: title) but
   * all models, at core, convey a message thus message is common to all modals.
   */
  message: string;
}

/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
export class ModalContextBuilder<T extends ModalContext> extends OverlayContextBuilder<T> {
  /**
   * The core message to display.
   * A modal might have an extended message (e.g: HTML message) or other fields (e.g: title) but
   * all models, at core, convey a message thus message is common to all modals.
   */
  message: FluentAssignMethod<string, this>;

  constructor(
    defaultValues?: T | T[],
    initialSetters?: string[],
    baseType?: new () => T
  ) {
    super(
      extend<any>(DEFAULT_VALUES, defaultValues || {}),
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType
    );
  }
}
