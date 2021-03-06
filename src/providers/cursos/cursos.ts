import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICurso } from '../../interfaces/ICurso';

/*
  Generated class for the CursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }

  allTeste(){
    return this.http.get<ICurso[]>('http://localhost:3000/cursos');
  }

  showTeste(data:ICurso){
    return this.http.get<ICurso>('http://localhost:3000/cursos/'+data.id);
  }

  addTeste(data:ICurso){
    return this.http.post<ICurso>('http://localhost:3000/cursos',data);
  }

  editTeste(data:ICurso){
    return this.http.put<ICurso>('http://localhost:3000/cursos/'+data.id,data);//concatena o id do registro e as informações que quer alterar no registro(data)
  }

  deleteTeste(data:ICurso){
    return this.http.delete<ICurso>('http://localhost:3000/cursos/'+data.id);
  }

  all(){
    const lista: ICurso[] = [
      {
        "id":1,
        "titulo":"Curso de Ionic",
        "descricao":"Aprenda Ionic na Prática",
        "valor":23.90,
        "valor_txt":"23,90","imagem":"https://digitalscientists.com/wp-content/uploads/2018/03/ionic-logo-landscape-1.png",
        "aulas":[
          {
            "id":1,
            "ordem":1,
            "titulo":"Introdução ao Curso",
            "tempo":"10:00",
            "video":"https://youtube.com/embed/lv_n3sDpXAc"
          },
          {
            "id":2,
            "ordem":2,
            "titulo":"Realizando a Instalação",
            "tempo":"05:00",
            "video":"https://youtube.com/embed/lv_n3sDpXAc"
          }
        ]
      },
      {
        "id":2,
        "titulo":"Curso de JS",
        "descricao":"Aprenda JS na Prática",
        "valor":33.90,
        "valor_txt":"33,90","imagem":"https://digitalscientists.com/wp-content/uploads/2018/03/ionic-logo-landscape-1.png",
        "aulas":[]
      }
    ]; 

    return lista;
  }

}
