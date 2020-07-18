import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
    private hideTabBarPages: string[] = ['maps'];

    constructor(private router: Router, private platform: Platform) {
        this.platform?.ready().then(() => {
            this.navEvents();
        });
    }

    private showHideTabs(e: NavigationEnd) {
        const urlArray = e.url.split('/');
        const pageUrl = urlArray[urlArray.length - 1];
        const page = pageUrl.split('?')[0];
        const shouldHide = this.hideTabBarPages.indexOf(page) > -1;
        let matchBlockedUrl = false;
        this.hideTabBarPages.forEach(url => {
            urlArray.forEach( currentPageUrl => {
                if ( url === currentPageUrl) {
                    matchBlockedUrl = true;
                }
            });
        });
        shouldHide || matchBlockedUrl ? this.hideTabs() : this.showTabs();
    }

    hideTabs() {
        const tabBar = document.getElementById('beTabBar');
        if (tabBar !== null && tabBar.style.display !== 'none') {
            tabBar.style.display = 'none';
        }
    }

    showTabs() {
        const tabBar = document.getElementById('beTabBar');
        if (tabBar !== null && tabBar.style.display !== 'flex') {
            tabBar.style.display = 'flex';
        }
    }

    navEvents() {
        this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((e: any) => {
            this.showHideTabs(e);
        });
    }

}
