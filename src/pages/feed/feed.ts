import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  //public valor:number;
  public objeto_feed = {
    usuario:"Marty McFly",
    data:"November 5, 1955",
    imagem:"assets/imgs/advance-card-bttf.png",
    post:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qtd_likes:12,
    qtd_comments: 4,
    time_last_comment: "11h ago"
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //public soma(num1:number, num2:number):number{
   // return num1 + num2;
  //}

  ionViewDidLoad() {
    //this.valor = this.soma(5,10);
    //console.log('ionViewDidLoad FeedPage');
  }

}
