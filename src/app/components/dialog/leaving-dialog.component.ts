import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leaving-dialog',
    templateUrl: './leaving-dialog.component.html',
    styleUrls: ['./leaving-dialog.component.scss']
})
export class LeavingDialogComponent {

    socialMedia = 'No social media was presented';
    socialURL: string;

    constructor(private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: Object,
        private dialogRef: MatDialogRef<LeavingDialogComponent>,
        private cd: ChangeDetectorRef) { }

    goToLink() {
        window.location.replace(this.socialURL);
    }

    close() {
        this.dialogRef.close();
    }
}
