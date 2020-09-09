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
  ],
  providers: [],
  declarations: [DashboardComponent, ServiceSelectionComponent],
  entryComponents: [ServiceSelectionComponent],
})
export class DashboardModule {}
