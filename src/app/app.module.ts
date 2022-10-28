import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { ButterflyComponent } from './components/butterfly/butterfly.component';
import { EditedForComponent } from './components/edited-for/edited-for.component';
import { ReelComponent } from './components/reel/reel.component';
import { WrapperComponent } from './Work/wrapper/wrapper.component';
import { CardComponent } from './Work/components/card/card.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent, HeroComponent, ButterflyComponent, EditedForComponent, ReelComponent, WrapperComponent, CardComponent, AboutComponent, ContactComponent, ProjectComponent, SafePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
