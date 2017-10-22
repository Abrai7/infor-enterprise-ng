import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ViewChild,
  Inject
} from '@angular/core';

import {
  SohoWizardComponent,
  SohoToastService
} from '@infor/sohoxi-angular';

@Component({
  selector: 'soho-wizard-demo',
  templateUrl: './wizard.demo.html',
})
export class WizardDemoComponent implements OnInit, AfterViewInit {

  @ViewChild(SohoWizardComponent) wizard: SohoWizardComponent;

  // buttons = [
  //   {id: 'prevous', text: Locale.translate('Previous'), click: () => { this.wizard.previous(); }},
  //   {id: 'next', text: Locale.translate('Next'), click: () => { this.wizard.next(); }, isDefault: true},
  //   {id: 'finish', text: Locale.translate('Finish'), click: () => { this.wizard.finish(); }},
  // ];

  // public ticks: SohoWizardTick[] = [
  //   { label: 'Select Files', href: 'select-files', state: 'current'},
  //   { label: 'Target Folder', href: 'target-folder'},
  //   { label: 'Backup Rules', href: 'backup-rule'},
  //   { label: 'Validation', href: 'validation-rule'},
  //   { label: 'Confirmation', href: 'confirmation'},
  //   { label: 'Result', href: 'result'}
  // ];

  constructor(private toastService: SohoToastService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  help() {
    alert('display some help');
  }

  onActivated(e: SohoWizardEvent) {
    this.toastService.show({
      'title': 'Activated!',
      'message': 'The tick with the label <span style="font-weight: bold;">' + e.tick.text() + '</span> was activated!'
    });
  }
}

@Component({
  selector: 'demo-select-files-page',
  template: `<div style="flex: 0;">
  <fieldset>
  <legend>Select individual files or a zip file containing previously exported reports:</legend>
  <br />
  </fieldset>
</div>
<div class="buttonset" style="flex: 0; margin-bottom: 5px;">
  <button soho-button="icon" icon="add">Add</button>
  <button soho-button="icon" icon="delete" disabled>Remove</button>
</div>
<div style="display:flex; flex: 1;">
  <div soho-datagrid [columns]="columns" [data]="data" selectable="true" filterable="true" class="scrollable-area">
  </div>
</div>`,
styles: [
  `:host {
      display:        flex;
      flex:           1;
      flex-direction: column;
  }`]
})
export class DemoSelectFilePageComponent {
  public columns: SohoDataGridColumn[] = [
    { id: 'selectionCheckbox', sortable: false, resizable: false, width: 50, formatter: Formatters.SelectionCheckbox, align: 'center'},
    { id: 'filename', name: 'File Name', field: 'filename', formatter: Formatters.Text, width: '200px' },
    { id: 'filetype', name: 'File Type', field: 'filetype', formatter: Formatters.Text },
    { id: 'filesize', name: 'File Size', field: 'filesize', formatter: Formatters.Text }
  ];

  public data: any[] = [
    {filename: 'FTAL1.srdl', filetype: 'Report', filesize: '189kb'},
    {filename: 'WeeklyReport.pdf', filetype: 'PDF', filesize: '345kb'},
    {filename: 'FTJL1.srdl', filetype: 'Report', filesize: '145kb'},
    {filename: 'FTJL2.srdl', filetype: 'Report', filesize: '167kb'}
  ];
}


@Component({
  selector: 'demo-target-folder-page',
  template: `
  <div style="flex: 0;">
  <fieldset>
  <legend>Use the following options to determing the folder and the options used to import the files.</legend>
  </fieldset>
  </div>
  <div class="field" style="flex: 0;">
  <label soho-label for="target-folder-lookup">Target Folder for the import:</label>
  <input soho-lookup id="target-folder-lookup" />
  </div>
  <div class="field" style="flex: 0;">
  <p>Where contained in the zip structure:</p>
  </div>
  <div class="field" style="flex: 0;">
  <input soho-checkbox type="checkbox" id="use-folder-checkbox">
  <label soho-label for="use-folder-checkbox" [forCheckBox]="true">Use the Folder Structure</label>
  </div>
  <div class="field" style="flex: 0;">
  <input soho-checkbox type="checkbox" id="apply-permissions">
  <label soho-label for="apply-permissions" [forCheckBox]="true">Apply Folder Permissions</label>
  </div>`,
styles: [
  `:host {
      display:        flex;
      flex:           1;
      flex-direction: column;
  }`]
})
export class DemoTargetFolderPageComponent {
}

@Component({
  selector: 'demo-backup-rule-page',
  template: `<div style="flex: 0;">
  <fieldset>
  <legend>Select the rule to use when replacing files with a newer version.</legend>
  </fieldset>
  </div>
<div class="field" style="flex: 0;">
  <input soho-radiobutton type="radio" name="overwrite-rule" id="prompt-overwritten" value='1' checked/>
  <label soho-label class="radio-label" class="radio-label" for="prompt-overwritten">Always prompt when files are being overwritten</label>
  <br>
  <input soho-radiobutton soho-trackdirty type="radio" name="overwrite-rule" id="backup-overwritten" value='2' />
  <label soho-label  class="radio-label" for="backup-overwritten">Do not prompt but always move files to the safe backup folder</label>
</div>
<div class="field" style="flex: 0;">
  <label soho-label for="backup-folder-lookup">Backup Folder:</label>
  <input soho-lookup id="backup-folder-lookup" />
</div>`,
styles: [
  `:host {
      display:        flex;
      flex:           1;
      flex-direction: column;
  }`]
})
export class DemoBackupRulePageComponent {
}
