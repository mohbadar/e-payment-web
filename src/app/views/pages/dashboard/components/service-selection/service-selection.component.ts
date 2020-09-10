import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DataExchangeService } from "app/core/service/data.exchange.service";
import { Router } from "@angular/router";

@Component({
  selector: "kt-service-selection",
  templateUrl: "./service-selection.component.html",
  styleUrls: ["./service-selection.component.scss"],
})
export class ServiceSelectionComponent implements OnInit {
  item: any;
  loadingAfterSubmit;
  viewLoading;

  route = "/launch-mmo-service";

  services = [
    {
      id: 1,
      name: "Top Up",
      translate: "MMO.SERVICES.TOP_UP",
      icon: "topup.gif",
    },
    {
      id: 2,
      name: "Fund Transfer",
      translate: "MMO.SERVICES.FUND_TRANSFER",
      icon: "mm.png",
    },
    {
      id: 3,
      name: "Balance Inquiry",
      translate: "MMO.SERVICES.BALANCE_INQUIRY",
      icon: "bi.png",
    },
  ];

  constructor(
    private dialogRef: MatDialogRef<ServiceSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dataExchangeService: DataExchangeService,
    private router: Router
  ) {
    this.item = data.item;
  }

  ngOnInit() {
    console.log("coming item", this.item);
  }

  launchService(selectedService) {
    const item = {
      mmo: this.item,
      service: selectedService,
    };
    console.log("launch item", item);

    this.dataExchangeService.changeData(item);
    this.router.navigate([`${this.route}`]);
    this.dialogRef.close();
  }
}
