import { configurationMenuModule } from "./menu/configuration.menu";
import { customerServiceMenuModule } from "./menu/customer-service.menu";
import { helpdeskMenuModule } from "./menu/helpdesk.menu";
import { serviceConnectionMenuModule } from "./menu/service-connection.menu";
import { meteringMenuModule } from "./menu/metering.menu";
import { billingMenuModule } from "./menu/billing.menu";
import { paymentMenuModule } from "./menu/payment.menu";
import { reportingMenu } from "./menu/reporting.menu";
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export class MenuConfig {

  constructor(private keycloackService: KeycloakService) { }

  public defaults: any = {
    header: {
      self: {},
      items: [
        {
          title: "Home",
          root: true,
          alignment: "left",
          page: "",
          translate: "MENU.HOME",
        },
      ],
    },
    aside: {
      self: {},
      items: [
        {
          title: "Home",
          root: true,
          alignment: "left",
          page: "",
          translate: "MENU.HOME",
        },
      ],
    },
  };

  public get configs(): any {
    // Add all the menu modules to the main array
    // this.defaults.header.items.splice(1, 0, configurationMenuModule);
    // this.defaults.header.items.splice(2, 0, serviceConnectionMenuModule);
    // this.defaults.header.items.splice(3, 0, customerServiceMenuModule);
    // this.defaults.header.items.splice(4, 0, meteringMenuModule);
    // this.defaults.header.items.splice(5, 0, billingMenuModule);
    // this.defaults.header.items.splice(6, 0, paymentMenuModule);
    // this.defaults.header.items.splice(7, 0, helpdeskMenuModule);


    if (this.keycloackService.isUserInRole('view_reporting_module')) {
      this.defaults.header.items.splice(8, 0, reportingMenu);
    }


    // this.defaults.aside.items.splice(1, 0, configurationMenuModule);
    // this.defaults.aside.items.splice(2, 0, serviceConnectionMenuModule);
    // this.defaults.aside.items.splice(3, 0, customerServiceMenuModule);
    // this.defaults.aside.items.splice(4, 0, meteringMenuModule);
    // this.defaults.aside.items.splice(5, 0, billingMenuModule);
    // this.defaults.aside.items.splice(6, 0, paymentMenuModule);
    // this.defaults.aside.items.splice(7, 0, helpdeskMenuModule);
    if (this.keycloackService.isUserInRole('view_reporting_module')) {
      this.defaults.side.items.splice(8, 0, reportingMenu);
    }


    this.defaults.header.items = this.prepareComponentsUrls(
      this.defaults.header.items
    );

    return this.defaults;
  }

  // Recursively add the parent's page url to the child's page url
  private prepareComponentsUrls(jObject, identifier = "") {
    return jObject.map((obj) => {
      if (obj.hasOwnProperty("page")) {
        obj.page = identifier + obj.page;
        if (obj.hasOwnProperty("submenu")) {
          obj.submenu = this.prepareComponentsUrls(obj.submenu, obj.page);
        }
      }

      return obj;
    });
  }
}
