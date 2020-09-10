import { Component, OnInit } from "@angular/core";
import { MessageType, LayoutUtilsService } from "app/core/_base/crud";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { DataExchangeService } from "app/core/service/data.exchange.service";
import { KeycloakService } from "keycloak-angular";
import { Location } from "@angular/common";

@Component({
  selector: "kt-launch-mmo-service",
  templateUrl: "./launch-mmo-service.component.html",
  styleUrls: ["./launch-mmo-service.component.scss"],
})
export class LaunchMmoServiceComponent implements OnInit {
  serviceLaunch;
  form: FormGroup;
  record;
  newRecord;

  constructor(
    private formBuilder: FormBuilder,
    private keycloakService: KeycloakService,
    private layoutUtilService: LayoutUtilsService,
    private location: Location,
    private dataExchangeService: DataExchangeService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      serviceProvider: ["", [Validators.required]],
      serviceName: ["", [Validators.required]],
      sourceNumber: ["", [Validators.required]],
      destinationNumber: ["", [Validators.required]],
      amount: ["", [Validators.required]],
    });

    this.loadItem();
  }

  loadItem() {
    this.dataExchangeService.currentData.subscribe(
      (data) => {
        if (data === undefined || data === null) {
          this.routeHome();
        } else {
          this.record = data;
          console.log("passed data", this.record);
        }
      },
      (error) => {
        throw error;
      }
    );
  }

  setForValues(record) {
    this.form.controls["serviceProvider"].setValue(record.mmo.name);
    this.form.controls["serviceName"].setValue(record.service.name);
  }

  /**
   * Redirect to home page
   */
  routeHome() {
    this.location.back();
  }

  /**
   * Update the behaviour config
   */
  submit() {
    this.newRecord = this.form.value;
    this.newRecord.userId = this.keycloakService.getUsername();
    const data = { ...this.record, ...this.newRecord };
    console.log("Form Data", data);
    // this.behavConfigService.update(data.id, data).subscribe(
    //   (response) => {
    //     this.form.reset({});
    //     const _createMessage = `Type has been updated!`;
    //     this.layoutUtilService.showActionNotification(
    //       _createMessage,
    //       MessageType.Update
    //     );
    //     this.routeHome();
    //   },
    //   (err) => {
    //     const msg = " Error occured updating behaviour config";
    //     this.layoutUtilService.showActionNotification(msg);
    //   }
    // );
  }
}
