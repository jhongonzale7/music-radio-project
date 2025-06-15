import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig }             from './app/app.config';
import { App }                   from './app/app';

import { importProvidersFrom }   from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }      from '@angular/common/http';
import { FormsModule }           from '@angular/forms';

// Módulos de Angular Material
import { MatToolbarModule }      from '@angular/material/toolbar';
import { MatButtonModule }       from '@angular/material/button';
import { MatCardModule }         from '@angular/material/card';
import { MatFormFieldModule }    from '@angular/material/form-field';
import { MatInputModule }        from '@angular/material/input';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule
    )
  ]
})
.catch((err) => console.error(err));
