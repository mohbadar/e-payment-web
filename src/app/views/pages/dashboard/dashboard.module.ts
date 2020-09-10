// Angular
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { DashboardComponent } from "./dashboard.component";
import {
  NgbDropdownModule,
  NgbTabsetModule,
  NgbTooltipModule,
} from "@ng-bootstrap/ng-bootstrap";
// Translate
import { TranslateModule } from "@ngx-translate/core";
import { ServiceSelectionComponent } from "./components/service-selection/service-selection.component";
import {
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatIconModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
} from "@angular/material";
import { LaunchMmoServiceComponent } from "./components/launch-mmo-service/launch-mmo-service.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    TranslateModule.forChild(),
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "launch-mmo-service",
        component: LaunchMmoServiceComponent,
      },
    ]),

    // ng-bootstrap modules
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule,
    TranslateModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    TranslateModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  declarations: [
    DashboardComponent,
    ServiceSelectionComponent,
    LaunchMmoServiceComponent,
  ],
  entryComponents: [ServiceSelectionComponent],
})
export class DashboardModule {}
