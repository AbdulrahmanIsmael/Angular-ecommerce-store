import { Observable, catchError, from, throwError } from 'rxjs';

import { AuthResponse } from '@supabase/supabase-js';
import { Injectable } from '@angular/core';
import { supabase } from '../lib/supabase.client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  register(username: string, email: string, password: string): Observable<AuthResponse> {
    if (!username || !email || !password) {
      return throwError(
        () => new Error('Username, email, and password are required for registration!'),
      );
    }

    const promise = supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    return from(promise).pipe(catchError((error) => throwError(() => new Error(error.message))));
  }

  // signIn(email: string, password: string): Observable<AuthResponse> {}
}
