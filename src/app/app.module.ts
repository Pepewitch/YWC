import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NavigationMainContentComponent } from './components/navigation-bar/navigation-main-content/navigation-main-content.component';
import { NavigationSidenavContentComponent } from './components/navigation-bar/navigation-sidenav-content/navigation-sidenav-content.component';
import { NavigationSidenavItemComponent } from './components/navigation-bar/navigation-sidenav-item/navigation-sidenav-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LocationComponent } from './components/location/location.component';
import { DetailPhotoComponent } from './views/detail-photo/detail-photo.component';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { InterestingComponent } from './components/interesting/interesting.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationBarComponent,
    NavigationMainContentComponent,
    NavigationSidenavContentComponent,
    NavigationSidenavItemComponent,
    LocationComponent,
    DetailPhotoComponent,
    FilterDialogComponent,
    InterestingComponent,
    FooterComponent,
  ],
  entryComponents: [
    FilterDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
