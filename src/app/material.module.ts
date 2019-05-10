import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatTooltipModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatDividerModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatDividerModule,
        MatTooltipModule
    ]
})

export class MaterialModule { }