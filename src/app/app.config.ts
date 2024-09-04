import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"app-tare1","appId":"1:166311231769:web:12b2999a3d74a724bac588","databaseURL":"https://app-tare1-default-rtdb.firebaseio.com","storageBucket":"app-tare1.appspot.com","apiKey":"AIzaSyCUaND4mmqmftfokfS3Iq_Bz37XZ0n4Bsk","authDomain":"app-tare1.firebaseapp.com","messagingSenderId":"166311231769"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"app-tare1","appId":"1:166311231769:web:12b2999a3d74a724bac588","databaseURL":"https://app-tare1-default-rtdb.firebaseio.com","storageBucket":"app-tare1.appspot.com","apiKey":"AIzaSyCUaND4mmqmftfokfS3Iq_Bz37XZ0n4Bsk","authDomain":"app-tare1.firebaseapp.com","messagingSenderId":"166311231769"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
