import {
  ComponentRef,
  createComponent as ngCreateComponent,
  EnvironmentInjector,
  Injector,
  ViewContainerRef
} from '@angular/core';

export interface CreateComponentArgs {
  component: any;
  vcRef: ViewContainerRef;
  injector?: Injector;
  projectableNodes?: any[][];
}

export function createComponent(instructions: CreateComponentArgs): ComponentRef<any> {
  const injector: Injector =  instructions.injector || instructions.vcRef.injector;

  if (instructions.vcRef) {
    return instructions.vcRef.createComponent(instructions.component, {
      index: instructions.vcRef.length,
      injector,
      projectableNodes: instructions.projectableNodes
    });
  } else {
    return ngCreateComponent(instructions.component, {
      environmentInjector: injector.get(EnvironmentInjector),
      elementInjector: injector,
      projectableNodes: instructions.projectableNodes
    });
  }
}
