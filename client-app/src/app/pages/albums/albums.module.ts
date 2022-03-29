import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
];

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumDetailComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AlbumsModule {




}
