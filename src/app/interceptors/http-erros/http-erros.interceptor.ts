import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const httpErrosInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbar = inject(MatSnackBar);

  const clonedRequest = req.clone({
    setHeaders: {
      'x-access-token': 'MEU_TOKEN',
    },
  });

  return next(clonedRequest).pipe(
    catchError((error) => {
      snackbar.open('Ops, houve um erro!', 'Fechar', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return throwError(() => error);
    })
  );
};
