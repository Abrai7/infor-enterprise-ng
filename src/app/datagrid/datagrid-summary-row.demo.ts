import { Component, OnInit } from '@angular/core';

export const SUMMARY_DATA: any[] = [

  { id: 1, location: 'CA, USA', firstname: 'Jonathon', lastname: 'Hardy', phone: '(312) 555 - 7854', purchases: 56.48, percentage: 24.32 },
  { id: 2, location: 'Germany', firstname: 'Coyle', lastname: 'Rita', phone: '+ 49(897) 104 - 6155', purchases: 16.00, percentage: 6.89 },
  { id: 3, location: 'GOR, USA', firstname: 'Mike', lastname: 'Warneke', phone: '(503) 555 - 1358', purchases: 37.15, percentage: 15.99 },
  { id: 4, location: 'FL, USA', firstname: 'Marc', lastname: 'Bianco', phone: '(924) 555 - 8609', purchases: 45.37, percentage: 19.53 },
  { id: 5, location: 'French', firstname: 'Philippe', lastname: 'Martin', phone: '+ 33 135 - 8609', purchases: 77.28, percentage: 33.27 }
];

export const SUMMARY_COLUMNS: SohoDataGridColumn[] = [
  { id: 'id', name: 'Customer Id', field: 'id', sortable: true, filterType: 'integer', formatter: Soho.Formatters.Readonly },
  { id: 'location', name: 'Location', field: 'location', sortable: true, filterType: 'text', formatter: Soho.Formatters.Hyperlink },
  { id: 'firstname', name: 'First Name', field: 'firstname', sortable: true, filterType: 'text', formatter: Soho.Formatters.Readonly },
  { id: 'lastname', name: 'Last Name', field: 'lastname', sortable: true, filterType: 'text', formatter: Soho.Formatters.Readonly },
  { id: 'phone', name: 'Phone', field: 'phone', sortable: true, filterType: 'text', formatter: Soho.Formatters.Readonly },
  { id: 'purchases', name: 'Purchases', field: 'purchases', sortable: false, filterType: 'number', formatter: Soho.Formatters.Decimal,
    align: 'right', numberFormat: { minimumFractionDigits: 2, maximumFractionDigits: 2 }, editor: Soho.Editors.Input },
  { id: 'percentage', name: 'Percentage', field: 'percentage', sortable: false, filterType: 'number', formatter: Soho.Formatters.Decimal,
    align: 'right', editor: Soho.Editors.Input }
];

@Component({
  selector: 'app-soho-datagrid-summary-row',
  templateUrl: 'datagrid-summary-row.demo.html'
})
export class DataGridSummaryRowDemoComponent implements OnInit {
  gridOptions?: SohoDataGridOptions = undefined;

  ngOnInit() {
    this.gridOptions = {
      columns: SUMMARY_COLUMNS,
      dataset: SUMMARY_DATA,
      selectable: 'single',
      idProperty: 'id',
      editable: true,
      isList: false,
      summaryRow: true,
      summaryRowColumns: [
        { field: 'purchases', summaryRowFormatter: Soho.Formatters.SummaryRow, aggregator: 'sum' },
        { field: 'percentage', summaryRowFormatter: Soho.Formatters.SummaryRow, aggregator: 'sum', summaryText: ' %', summaryTextPlacement: 'after' }
      ],
      filterable: true
    };
  }
}
