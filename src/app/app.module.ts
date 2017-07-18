import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from "angularfire2";
import { ChatPage } from "../pages/chat/chat";
import { AutenticacaoService } from "../services/autenticacao";
import { SigninPage } from "../pages/signin/signin";
import { RegistroPage } from "../pages/registro/registro";
import { UsuarioService } from "../services/usuario";
import { HistoricoPage } from "../pages/historico/historico";
import { HistoricoMensagensPage } from "../pages/historico-mensagens/historico-mensagens";
import { ChatService } from "../services/chat";
import { DatePipe } from '@angular/common';

export const firebaseConfig={
    apiKey: "AIzaSyDAEQRme7bXFnCSJVtWP-T3Tn_EKxwNZ9I",
    authDomain: "chat-12fc2.firebaseapp.com"
}

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    SigninPage,
    RegistroPage,
    HistoricoPage,
    HistoricoMensagensPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    SigninPage,
    RegistroPage,
    HistoricoPage,
    HistoricoMensagensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacaoService,
    UsuarioService,
    ChatService,
    DatePipe
  ]
})
export class AppModule {}
