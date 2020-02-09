import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { SharedModule } from '../shared/shared.module';
// import { PostService } from './post.service';
// import { AuthService } from './auth.service';
// import { AuthGuard } from './auth.guard';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    SharedModule
  ],
  // providers: [PostService, AuthService, AuthGuard]
})
export class CoreModule { }
