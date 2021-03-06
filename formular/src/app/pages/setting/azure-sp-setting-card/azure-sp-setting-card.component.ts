import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { ApiUrls } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ServicePrincipleGetallViewModel } from './azure-sp-setting-card.model';
import { CreateSpComponent } from './create-sp/create-sp.component';
import { DeleteSpComponent } from './delete-sp/delete-sp.component';

@Component({
  selector: 'app-azure-sp-setting-card',
  templateUrl: './azure-sp-setting-card.component.html',
  styleUrls: ['./azure-sp-setting-card.component.css'],
  providers: [ DialogService],
  encapsulation: ViewEncapsulation.None
})
export class AzureSpSettingCardComponent implements OnInit {

  servicePrincipleSettings: ServicePrincipleGetallViewModel[] = [];

  constructor(
    private readonly httpService: HttpService,
    private readonly dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getAllSp();
  }

  getAllSp(): void {
    this.httpService.get({url: ApiUrls.SERVICE_PRINCIPLE_GET_ALL}).subscribe(res => {
      this.servicePrincipleSettings = res.body;
    });
  }

  clickUpdate(): void {
    console.log("update")
  }

  clickRemove(modelToDelete: ServicePrincipleGetallViewModel): void {
    var diaglogRef = this.dialogService.open(DeleteSpComponent, {
      header: "Aure You Sure Want To Remove Service Principal",
      width: '50%',
      data: {
        modelToDelete: modelToDelete
      }
    });
    diaglogRef.onClose.subscribe( _ => {
      this.getAllSp();
    })
  }

  showCreateDiag(): void {
    var diaglogRef: DynamicDialogRef = this.dialogService.open(CreateSpComponent, {
      header: 'Creat New Service Principle',
        width: '50%',
        data: {
          test_data: "test_data"
        }
    })
    diaglogRef.onClose.subscribe( _ => {
      this.getAllSp();
    })
  }
}
