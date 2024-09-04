import { CanDeactivateFn } from '@angular/router';

export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  // const currentComponet = component as ;
  // if(currentComponet.form.invalid && currentComponet.form.dirty){
  //   return window.confirm("Desea salir la paginas? los cambios se eliminaran")
 return true;
  }
 

