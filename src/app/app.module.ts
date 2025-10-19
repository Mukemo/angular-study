import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPipe } from './admin/welcome/color.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './admin/welcome/highlight.directive';
import { UnlessDirective } from './admin/welcome/unless.directive';
import { AdminModule } from './admin/admin.module';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPipe,
    HighlightDirective,
    UnlessDirective,
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
