import { NavParams, AlertController, ToastController, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    template: `
    <ion-list>
      <ion-item (tap)="violation();">違反報告する</ion-item>
      <ion-item (tap)="hide();">非表示にする</ion-item>
    </ion-list>
  `
})
export class PopoverReport
{
    constructor(
        private params: NavParams,
        private alert:AlertController,
        private viewCtrl: ViewController,
        private toastCtrl: ToastController,
    ){}

    violation()
    {
        let prompt = this.alert.create({
            title: '違反報告する',
            message: "利用規約に反していると思われるユーザを見つけた場合、ご報告いただけますと幸いです。ご報告いただくと自動的にこのユーザをブロックします。",
            inputs: [
                {
                    name: 'reason',
                    placeholder: '違反理由'
                },
            ],
            buttons: [
                {
                    text: '閉じる',
                    handler: data =>
                    {
                        this.viewCtrl.dismiss();
                    }
                },
                {
                    text: '送信',
                    handler: data =>
                    {


                        let toast = this.toastCtrl.create({
                            message: '違反報告ありがとうございました。今後本ユーザは表示されません。',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        this.viewCtrl.dismiss();
                    }
                }
            ]
        });
        prompt.present();
    }

    hide()
    {
        let confirm = this.alert.create({
            title: '非表示にする',
            message: '非表示にすると、自分とこのユーザ相互が表示されなくなります。一度非表示にすると解除はできません。',
            buttons: [
                {
                    text: '閉じる',
                    handler: data =>
                    {
                        this.viewCtrl.dismiss();
                    }
                },
                {
                    text: '非表示にする',
                    handler: () =>
                    {
                        let toast = this.toastCtrl.create({
                            message: '非表示にしました。今後本ユーザは表示されません。',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        this.viewCtrl.dismiss();
                    }
                }
            ]
        });
        confirm.present();
    }
}