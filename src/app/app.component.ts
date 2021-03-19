import { Component } from "@angular/core";
import * as Highcharts from "highcharts/highstock";
 
import HIndicatorsAll from "highcharts/indicators/indicators-all";
import HDragPanes from "highcharts/modules/drag-panes";
import HAnnotationsAdvanced from "highcharts/modules/annotations-advanced";
import HPriceIndicator from "highcharts/modules/price-indicator";
import HFullScreen from "highcharts/modules/full-screen";
import HStockTools from "highcharts/modules/stock-tools";

HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        pointInterval: 24 * 3600 * 1000,
        data: [1, 2, 3, 4, 5]
      }
    ]
  };
}
