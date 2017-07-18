import { Component, ViewChild, Inject } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from "../pages/signin/signin";
import { AutenticacaoService } from "../services/autenticacao";
import { ChatPage } from "../pages/chat/chat";
import firebase from 'firebase';
import { RegistroPage } from "../pages/registro/registro";
import { FirebaseApp } from "angularfire2";
import { HistoricoPage } from "../pages/historico/historico";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = SigninPage;
    isAuthenticated: boolean;
    signinPage = SigninPage;
    registroPage = RegistroPage;
    historicoPage = HistoricoPage;
    
    @ViewChild('nav') nav: NavController;
    constructor(@Inject(FirebaseApp) firebaseApp: any,
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtrl: MenuController,
      private autenticacaoService: AutenticacaoService) {
        
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated=true;
          this.rootPage = ChatPage;
        } else {
          this.isAuthenticated=false;
          this.rootPage = SigninPage;
        }
      });
    
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });
    }

  carrega(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  logout() {
    this.autenticacaoService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}

